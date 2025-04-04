---
layout: post
date: 2025-04-04 23:48:52
image: /assets/img/kafka-python.png
title: Como conectei duas IAs - Prática com Python, Docker e Mensageria com Apache Kafka
description: Neste post, mostro passo a passo como fiz duas inteligências artificiais conversarem entre si usando Apache Kafka, Python, Docker e conceitos modernos de arquitetura distribuída.
introduction: Já pensou em fazer duas IAs se comunicarem de forma assíncrona, simulando um cenário de microserviços reais? Foi exatamente isso que experimentei, e neste artigo te mostro como funciona na prática essa integração com Kafka.
main-class: tech
color: "#2b2e4a"
tags:
  - tech
  - kafka
  - python
  - docker
  - arquitetura distribuída
  - microserviços
  - ia
---

## Introdução

![Docker](assets/img/docker.png)

Fazer duas inteligências artificiais se comunicarem pode parecer algo futurista ou complexo. Mas com as ferramentas certas, isso é totalmente viável hoje. Recentemente, desenvolvi uma experiência prática onde duas aplicações Python, simulando IAs, trocam mensagens por meio do Apache Kafka, uma das tecnologias de mensageria mais robustas e utilizadas no mundo.

Neste post, vou te mostrar:
- Como configurar um ambiente Kafka com Docker
- Como criar produtor e consumidor com Python
- Como fazer uma IA enviar mensagens e outra interpretá-las
- Conceitos e aprendizados por trás da arquitetura

## Por que usar Apache Kafka?

O Kafka é uma plataforma de streaming distribuído que permite que sistemas se comuniquem de forma assíncrona, escalável e desacoplada. Ele é amplamente usado em aplicações que exigem alto desempenho, como sistemas bancários, IoT, logs e claro, inteligência artificial distribuída.

### Benefícios:
- Alta performance e throughput
- Escalabilidade horizontal
- Garantia de entrega (at least once ou exactly once)
- Assincronicidade (independência entre produtor e consumidor)

## O experimento: IAs se comunicando via Kafka

Criei duas aplicações simples em Python:

- `ia1_producer.py`: simula uma IA que envia mensagens (como respostas de uma análise de sentimento)
- `ia2_consumer.py`: outra IA que consome essas mensagens e as classifica como positiva, negativa ou neutra

Essas mensagens são enviadas para um **tópico Kafka**, permitindo que as IAs se comuniquem mesmo sem saber uma da outra.

## Ambiente utilizado

- **Python 3.12**
- **Apache Kafka 3.4.0** (modo Zookeeper)
- **Docker + Docker Compose**
- **Biblioteca `kafka-python`**
- **VS Code com Git Bash / PowerShell**

## Passo 1: Subindo Kafka com Docker Compose

![Docker](assets/img/vscode.png)
O arquivo `docker-compose.yml`:

```yaml
version: '3.8'

services:
  zookeeper:
    image: bitnami/zookeeper:3.8
    ports:
      - "2181:2181"
    environment:
      - ALLOW_ANONYMOUS_LOGIN=yes

  kafka:
    image: bitnami/kafka:3.4.0
    ports:
      - "9092:9092"
    environment:
      - KAFKA_CFG_ZOOKEEPER_CONNECT=zookeeper:2181
      - KAFKA_CFG_ADVERTISED_LISTENERS=PLAINTEXT://localhost:9092
      - KAFKA_CFG_LISTENERS=PLAINTEXT://0.0.0.0:9092
      - KAFKA_CFG_LISTENER_SECURITY_PROTOCOL_MAP=PLAINTEXT:PLAINTEXT
      - ALLOW_PLAINTEXT_LISTENER=yes
      - KAFKA_ENABLE_KRAFT=no
    depends_on:
      - zookeeper
```

Depois de criar o arquivo, executei:

```bash
docker compose up -d
```

Criei um tópico com:

```bash
docker exec kafka kafka-topics.sh --create --topic topico-ia --bootstrap-server localhost:9092 --partitions 1 --replication-factor 1
```

## Passo 2: Scripts das IAs

### `ia1_producer.py`

```python
from kafka import KafkaProducer
import json, time

producer = KafkaProducer(
    bootstrap_servers='localhost:9092',
    value_serializer=lambda v: json.dumps(v).encode('utf-8')
)

mensagens = [
    {"id": 1, "texto": "O atendimento foi excelente!"},
    {"id": 2, "texto": "A consulta demorou demais e não resolveu meu problema."}
]

for msg in mensagens:
    print(f"IA1 enviando: {msg}")
    producer.send("topico-ia", msg)
    time.sleep(1)

producer.flush()
```

### `ia2_consumer.py`

```python
from kafka import KafkaConsumer
import json

consumer = KafkaConsumer(
    'topico-ia',
    bootstrap_servers='localhost:9092',
    auto_offset_reset='earliest',
    group_id='grupo-ia',
    value_deserializer=lambda m: json.loads(m.decode('utf-8'))
)

print("IA2 aguardando mensagens...")

for message in consumer:
    msg = message.value
    print(f"IA2 recebeu: {msg}")

    texto = msg["texto"].lower()
    if "excelente" in texto or "ótimo" in texto:
        print("Classificação: Positiva")
    elif "demorou" in texto or "problema" in texto:
        print("Classificação: Negativa")
    else:
        print("Classificação: Neutra")
```

## Aprendizados práticos

Durante o processo, enfrentei e resolvi desafios reais:

- Compreensão do modo **Zookeeper vs KRaft** no Kafka
- Manipulação de containers `Exited` e conflitos de nomes
- Correção de configurações de listeners e permissões
- Instalação e uso de ambientes virtuais com `venv`
- Integração do VS Code com o ambiente Python correto

## O que isso significa na prática?

Esse tipo de arquitetura pode ser a base para:

- Sistemas de IA distribuídos
- Processamento de linguagem natural em tempo real
- Monitoramento autônomo com análise por módulos independentes
- Integração de microserviços inteligentes

## Conclusão

Essa experiência me mostrou como tecnologias de produção podem ser combinadas com IA de forma simples, modular e poderosa. E melhor: com ferramentas abertas e acessíveis.

A comunicação entre IAs é um caminho natural para sistemas inteligentes que precisam operar de forma paralela, descentralizada e responsiva.

> Se você quer experimentar IA em ambientes reais, comece pequeno, como esse exemplo, e evolua com confiança.

---

**Quer ver mais experimentos como esse? Me acompanha por aqui ou visite [meu GitHub](https://github.com/roberlancarvalho/ia-mensageria) para acessar o repositório com o código completo.**

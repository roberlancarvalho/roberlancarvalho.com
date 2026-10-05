---
layout: post
date: 2026-10-05 10:00:00
image: /assets/img/agentes-ia/capa.png
title: Agentes de IA na Prática - O Que Aprendi Construindo Agentes na Tech North
description: Agentes de IA deixaram de ser só conversa e passaram a executar tarefas. Mas o que funciona de verdade, o que quebra e quando não usar? Compartilho o que aprendi.
introduction: O que muda quando a IA deixa de responder e passa a agir, e os princípios que eu sigo para construir agentes confiáveis.
main-class: ia
color: "#3776AB"
tags:
  - inteligência artificial
  - agentes de ia
  - automação
  - tecnologia
  - inovação
---

## Introdução

Nos últimos anos, praticamente todo mundo teve o seu primeiro contato com a Inteligência Artificial por meio de um chat. Você pergunta, a IA responde e a conversa termina ali. Foi uma revolução, mas, olhando de dentro de uma empresa de tecnologia, percebi que o salto realmente transformador não estava em responder melhor, e sim em **executar**: consultar um sistema, preencher um cadastro, cruzar dados, enviar uma mensagem e só então voltar com o resultado.

É exatamente isso que chamamos de **agente de IA**. Na [Tech North](https://technorth.com.br/), esse tem sido um dos meus principais focos, com projetos como o **AutonomIA**, voltado à automação de processos empresariais, e o **SynapsIA**, um assistente para suporte e triagem de pacientes crônicos. Neste post, compartilho o que aprendi sobre o tema: o que é um agente, onde ele brilha, onde ele tropeça e os princípios que sigo para construir agentes em que dá para confiar.

## Do Chatbot ao Agente

A diferença entre um chatbot e um agente parece sutil, mas muda tudo:

* **Chatbot**: recebe uma pergunta e devolve um texto. Não tem acesso ao mundo fora da conversa e não toma nenhuma ação.
* **Agente**: recebe um **objetivo**, decide quais passos tomar, usa **ferramentas** (APIs, banco de dados, e-mail, planilhas), observa o resultado de cada ação e repete esse ciclo até concluir a tarefa.

![O ciclo de um agente de IA: objetivo, planeja, age, observa e repete](/assets/img/agentes-ia/ciclo-do-agente.svg)

Uma das melhores definições que encontrei está no guia *Building Effective Agents*, publicado pela Anthropic, que separa dois tipos de sistema:

> "Workflows são sistemas em que LLMs e ferramentas são orquestrados por caminhos de código predefinidos. Agentes, por outro lado, são sistemas em que os LLMs direcionam dinamicamente seus próprios processos e o uso de ferramentas, mantendo o controle sobre como realizam as tarefas."
>
> — Anthropic, [*Building Effective Agents*](https://www.anthropic.com/engineering/building-effective-agents) (tradução livre)

Essa distinção é muito importante, porque nem todo problema precisa de um agente. Muitas vezes, um fluxo bem desenhado, em que a IA executa apenas uma etapa específica, resolve com mais previsibilidade e menos custo.

## Onde os Agentes Brilham

* **Tarefas repetitivas com variação**: processos que seguem uma lógica parecida, mas cada caso tem detalhes diferentes, como classificar solicitações, extrair informações de documentos ou organizar demandas.
* **Integração entre sistemas**: quando a informação está espalhada em vários lugares e alguém perde horas copiando e colando de um sistema para o outro.
* **Triagem e priorização**: organizar o que chega, identificar o que é urgente e encaminhar para a pessoa certa, que é justamente o tipo de tarefa em que um assistente como o SynapsIA pode apoiar equipes de saúde.
* **Atendimento de primeiro nível**: responder dúvidas frequentes consultando a base de conhecimento real da empresa, e não apenas o que o modelo "acha".

## Onde os Agentes Tropeçam

Se existe uma lição que considero essencial, é esta: **erros se acumulam**. Um agente executa vários passos em sequência e, se cada passo tem uma pequena chance de falhar, a chance de a tarefa inteira dar certo cai rapidamente.

Fiz as contas para ilustrar. Se cada passo acerta 95% das vezes, que parece um ótimo número, um agente que precisa encadear 20 passos conclui a tarefa sem nenhum erro em apenas cerca de **36%** dos casos. Com 90% por passo, esse número cai para **12%**.

![Gráfico: chance de concluir a tarefa sem erro cai conforme o número de passos aumenta](/assets/img/agentes-ia/confiabilidade-composta.svg)

Isso explica por que demonstrações de agentes impressionam tanto e, ao mesmo tempo, por que tantos projetos travam quando chegam ao mundo real. Na prática, isso me levou a três conclusões:

* **Menos passos é melhor**: quanto mais curta a cadeia, mais confiável o resultado.
* **Cada passo precisa ser verificável**: validar a saída de uma etapa antes de seguir para a próxima evita que um erro pequeno vire um problema grande.
* **Saber quando parar**: um bom agente reconhece quando não tem informação suficiente e pede ajuda, em vez de inventar.

## Os Princípios que Eu Sigo

### 1. Comece pelo Processo, Não pela IA

O erro mais comum que vejo é começar pela tecnologia: "vamos colocar um agente aqui". O caminho que funciona é o inverso. Primeiro, mapear o processo, entender onde está o gargalo e só então avaliar se a IA é a melhor solução. Às vezes, uma automação tradicional, sem nenhum modelo de linguagem, resolve melhor.

O próprio guia da Anthropic reforça essa ideia:

> "Ao construir aplicações com LLMs, recomendamos encontrar a solução mais simples possível e só aumentar a complexidade quando necessário."
>
> — Anthropic, [*Building Effective Agents*](https://www.anthropic.com/engineering/building-effective-agents) (tradução livre)

### 2. Ferramentas Pequenas e Bem Descritas

Um agente é tão bom quanto as ferramentas que ele tem à disposição. Ferramentas genéricas demais ("execute qualquer consulta no banco") são perigosas e confusas para o modelo. O que funciona melhor são ferramentas pequenas, com nomes claros, uma única responsabilidade e uma descrição que explique exatamente quando usá-las, como se você estivesse escrevendo a documentação para um novo desenvolvedor da equipe.

### 3. Humano no Circuito

Algumas ações não devem ser tomadas por um agente sozinho. Enviar um e-mail para um cliente, aprovar um pagamento ou alterar um dado sensível são exemplos de decisões que pedem **aprovação humana**.

Na saúde, esse princípio não é opcional. Como discuti no post sobre [IA na Saúde](/ia-na-saude), a tecnologia deve **apoiar** o profissional, e nunca substituir o seu julgamento. Em um assistente de triagem como o SynapsIA, o agente organiza as informações e sinaliza prioridades; quem decide é sempre o profissional de saúde.

### 4. Avalie Antes de Confiar

Software tradicional tem testes automatizados. Agentes também precisam de algo parecido: um conjunto de casos reais com o resultado esperado, executado a cada mudança no prompt, no modelo ou nas ferramentas. Sem isso, cada ajuste vira um tiro no escuro, e uma melhoria em um ponto pode quebrar silenciosamente outro.

### 5. Observabilidade: Registre Tudo

Quando um agente erra, a primeira pergunta é: **por quê?** E só dá para responder se cada passo estiver registrado: o que o modelo decidiu, qual ferramenta chamou, com quais parâmetros e o que recebeu de volta. Logs detalhados transformam um comportamento misterioso em um problema que pode ser investigado e corrigido.

### 6. Segurança desde o Primeiro Dia

Dar ferramentas a uma IA também abre portas para novos tipos de ataque. A OWASP, referência mundial em segurança de aplicações, mantém o [Top 10 para Aplicações com LLMs](https://genai.owasp.org/llm-top-10/), e dois itens dessa lista são especialmente relevantes para agentes:

* **Prompt Injection (LLM01)**: instruções maliciosas escondidas em um documento, e-mail ou página que o agente lê, tentando fazê-lo agir contra o usuário.
* **Agência Excessiva (LLM06)**: quando o agente tem mais permissões do que precisa, o estrago potencial de qualquer falha aumenta.

A regra que sigo é a do **menor privilégio**: o agente só acessa o que é estritamente necessário para a tarefa, e nada além disso.

## Arquitetura: Agentes Também Precisam Conversar

À medida que os projetos crescem, um único agente fazendo tudo deixa de ser uma boa ideia. Faz mais sentido ter agentes especializados, cada um com sua responsabilidade, trocando mensagens entre si. Foi exatamente esse tipo de comunicação que explorei no post [Como conectei duas IAs com Python, Docker e Apache Kafka](/mensageria-kafka-ia): usar mensageria para que sistemas inteligentes se comuniquem de forma assíncrona, desacoplada e rastreável.

Essa abordagem traz benefícios importantes:

* **Escalabilidade**: cada agente pode ser escalado de forma independente.
* **Resiliência**: se um agente falha, as mensagens ficam na fila e não se perdem.
* **Rastreabilidade**: cada mensagem trocada vira um registro do que aconteceu.

## Custo e Latência Também São Requisitos

Cada passo de um agente é, em geral, uma chamada a um modelo de linguagem, e cada chamada tem custo e tempo de resposta. Um agente que resolve a tarefa em 15 passos pode ser tecnicamente impressionante e, ao mesmo tempo, inviável financeiramente ou lento demais para o usuário.

Por isso, sempre considero:

* **Usar o modelo certo para cada etapa**: nem todo passo precisa do modelo mais poderoso. Tarefas simples, como classificar ou extrair dados, podem usar modelos menores e mais baratos.
* **Evitar trabalho repetido**: guardar resultados que não mudam com frequência economiza chamadas.
* **Medir desde o início**: acompanhar o custo e o tempo por tarefa concluída, e não apenas por chamada.

## Quando NÃO Usar um Agente

Depois de tudo isso, talvez a lição mais valiosa seja saber quando dizer não:

* **Quando o processo é totalmente previsível**: se os passos são sempre os mesmos, uma automação tradicional é mais barata, mais rápida e mais confiável.
* **Quando o erro é inaceitável e não há revisão humana**: se uma falha pode causar um dano sério e ninguém vai revisar, o agente não deveria agir sozinho.
* **Quando não há dados ou ferramentas confiáveis**: um agente sem acesso a informações corretas apenas erra com mais confiança.

## Conclusão

Agentes de IA representam uma mudança real na forma como construímos software: em vez de programar cada passo, passamos a definir objetivos, ferramentas e limites. Mas, como toda tecnologia poderosa, eles exigem responsabilidade. Os melhores resultados que tenho visto não vêm dos agentes mais complexos, e sim dos mais **simples, bem delimitados e observáveis**.

Se você está pensando em usar agentes na sua empresa, meu conselho é começar pequeno: escolha um processo, defina claramente o que o agente pode e não pode fazer, mantenha um humano no circuito e meça tudo. A complexidade pode vir depois, quando ela realmente fizer sentido.

E você, já usa ou pensa em usar agentes de IA no seu trabalho? Deixe seu comentário aqui embaixo, e, se este conteúdo foi útil, compartilhe com quem também está nessa jornada!

## Referências

* Anthropic. [*Building Effective Agents*](https://www.anthropic.com/engineering/building-effective-agents).
* OWASP. [*Top 10 for Large Language Model Applications*](https://genai.owasp.org/llm-top-10/).
* Roberlan Carvalho. [*Inteligência Artificial na Saúde - Impacto, Diretrizes e Perspectivas*](/ia-na-saude).
* Roberlan Carvalho. [*Como conectei duas IAs - Prática com Python, Docker e Mensageria com Apache Kafka*](/mensageria-kafka-ia).

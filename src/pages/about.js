import SocialLinks from 'components/SocialLinks'
import { NextSeo } from 'next-seo'
import { MainContent } from 'styles/base'

const AboutPage = () => (
  <>
    <NextSeo
      title="Sobre Mim | Roberlan Carvalho"
      description="Desenvolvedor Full Stack, CEO da Tech North e pesquisador em Inteligência Artificial, focado em soluções para saúde e inovação."
      openGraph={{
        type: 'website',
        locale: 'pt_BR',
        url: 'https://roberlancarvalho.com',
        site_name: 'Roberlan Carvalho',
        title:
          'Roberlan Carvalho - Desenvolvedor Full Stack e CEO da Tech North',
        description:
          'Desenvolvedor Full Stack e empreendedor focado em Inteligência Artificial, liderando inovações na Tech North.',
        images: [
          {
            url: 'https://roberlancarvalho.com/assets/img/author.png',
            width: 1200,
            height: 630,
            alt: 'Roberlan Carvalho: Desenvolvedor Full Stack e CEO da Tech North'
          }
        ]
      }}
    />
    <MainContent>
      <h1>Sobre Mima</h1>
      <p>
        Sou{' '}
        <strong>
          <a
            href="http://lattes.cnpq.br/7931430602114384"
            target="_blank"
            rel="noopener noreferrer"
          >
            Roberlan Carvalho
          </a>
        </strong>
        , desenvolvedor Full Stack e CEO da{' '}
        <strong>
          <a
            href="https://technorth.com.br/"
            target="_blank"
            rel="noopener noreferrer"
          >
            Tech North
          </a>
        </strong>
        . Sou um entusiasta e profissional de tecnologia cujo trabalho é focado
        no desenvolvimento de soluções tecnológicas, com destaque para
        aplicações em Inteligência Artificial, inovação e gestão.
      </p>

      <p>
        Ao longo da minha trajetória profissional, atuei no desenvolvimento e
        continuidade de sistemas complexos na{' '}
        <a
          href="https://www.unimedfortaleza.com.br/"
          target="_blank"
          rel="noopener noreferrer"
        >
          Unimed Fortaleza
        </a>
        , trabalhando com processos hospitalares. Atualmente, dedico-me ao
        desenvolvimento de sistemas SaaS e à liderança de projetos na{' '}
        <a
          href="https://technorth.com.br/"
          target="_blank"
          rel="noopener noreferrer"
        >
          Tech North
        </a>
        , uma empresa de tecnologia fundada em 2018, onde crio softwares e
        soluções de IA como o SynapsIA e AutonomIA, e voltados à saúde como
        FluxivaMed.
      </p>

      <p>
        Sou <strong>formado em Sistemas de Informação</strong> pela{' '}
        <a
          href="http://unicatolicaquixada.edu.br/"
          target="_blank"
          rel="noopener noreferrer"
        >
          Unicatólica de Quixadá
        </a>{' '}
        e atualmente cursando Mestrado em <strong>Computação</strong> pela{' '}
        <a href="https://ufrj.br/" target="_blank" rel="noopener noreferrer">
          Universidade Federal do Rio de Janeiro (UFRJ)
        </a>
        , além de Especialização em <strong>Inteligência Artificial</strong>{' '}
        pela{' '}
        <a
          href="https://www.utfpr.edu.br/"
          target="_blank"
          rel="noopener noreferrer"
        >
          Universidade Tecnológica Federal do Paraná (UTFPR)
        </a>
        . Meu artigo{' '}
        <a
          href="https://doi.org/10.25191/recs.v10i1.1493"
          target="_blank"
          rel="noopener noreferrer"
        >
          Inteligência Artificial na Saúde: Diretrizes para uma Implementação
          Eficaz
        </a>{' '}
        tem como foco a aplicação da IA na saúde, abordando boas práticas e
        considerações éticas para sua implementação e uso com eficácia.
      </p>

      <h2>Minhas Experiências</h2>
      <p>
        Minha atuação envolve a construção de soluções escaláveis, unindo visão
        técnica e de negócios, abrangendo desde sistemas web e mobile até a
        integração de IA em processos clínicos e empresariais. Tenho experiência
        em:
      </p>
      <ul>
        <li>
          <strong>Desenvolvimento Full Stack</strong> – Aplicações modernas
          usando Java, Spring Boot, Node.js, ReactJS, Angular e Typescript.
        </li>
        <li>
          <strong>Inteligência Artificial</strong> – Aplicações de aprendizado
          de máquina, análise de dados e modelos preditivos.
        </li>
        <li>
          <strong>Gestão de Dados</strong> – Banco de dados relacionais e NoSQL,
          incluindo PostgreSQL, Oracle e MongoDB.
        </li>
        <li>
          <strong>Consultoria e Gestão</strong> – Liderança técnica e soluções
          sob medida para empresas, focando em automação e otimização de
          negócios.
        </li>
      </ul>

      <h2>Projetos e Idealizações</h2>
      <p>
        Como fundador da Tech North, estou à frente do desenvolvimento de
        diversos projetos de inovação tecnológica:
      </p>
      <ul>
        <li>
          <strong>Tech North</strong> – Fábrica de software focada em soluções
          customizadas, gestão de projetos e consultoria estratégica.
        </li>
        <li>
          <strong>Plataforma SynapsIA</strong> – Assistente virtual com IA para
          suporte e triagem de pacientes crônicos.
        </li>
        <li>
          <strong>APShared</strong> – Aplicativo inteligente para
          compartilhamento de moradia e pontos de acesso.
        </li>
        <li>
          <strong>MasterClient</strong> – Sistema de gestão de carteira de
          clientes com segmentação avançada.
        </li>
        <li>
          <strong>AutonomIA</strong> – Ferramenta de automação de processos
          empresariais baseada em IA.
        </li>
      </ul>

      <h2>Minhas Habilidades</h2>
      <ul>
        <li>Javascript / Typescript</li>
        <li>Angular, ReactJS, Next.js</li>
        <li>NodeJS</li>
        <li>Java / Spring Boot</li>
        <li>DevOps, Design Patterns e Arquiteturas</li>
        <li>Inteligência Artificial e Machine Learning</li>
        <li>Banco de Dados: PostgreSQL, Oracle, MongoDB</li>
        <li>Automação de Processos</li>
        <li>Gestão de Projetos de Software e Negócios</li>
      </ul>

      <h2>Hobbies e Interesses</h2>
      <p>
        Fora do universo da tecnologia, sou apaixonado por música, toco violão
        nas horas vagas, sou baterista. Também curto jogos de FPS e acompanho
        tudo sobre ficção científica e o futuro da IA.
      </p>
      <p>
        Nos momentos de lazer, gosto de fazer trilhas, ler, praia, jogar, ir ao
        cinema, escrever sobre tecnologia e me manter conectado às tendências de
        branding e inovação. Este blog é meu espaço para compartilhar essa
        jornada.
      </p>

      <h2>Contato</h2>
      <p>
        Se você quer discutir um projeto, inovação para sua empresa ou apenas
        trocar ideias sobre o futuro da tecnologia, me chame. Conecte-se comigo
        através das redes abaixo:
      </p>

      <SocialLinks hideStyle />
    </MainContent>
  </>
)

export default AboutPage

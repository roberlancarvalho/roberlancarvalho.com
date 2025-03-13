import { NextSeo } from 'next-seo'
import SocialLinks from 'components/SocialLinks'
import { MainContent } from 'styles/base'

const AboutPage = () => (
  <>
    <NextSeo
      title="Sobre Mim | Roberlan Carvalho"
      description="Desenvolvedor Full Stack e pesquisador em Inteligência Artificial, com expertise em soluções tecnológicas para a área da saúde e inovação digital."
      openGraph={{
        type: 'website',
        locale: 'pt_BR',
        url: 'https://seusite.com.br',
        site_name: 'Roberlan Carvalho',
        title:
          'Roberlan Carvalho - Desenvolvedor Full Stack e Pesquisador em IA',
        description:
          'Desenvolvedor Full Stack com experiência em Inteligência Artificial, inovação digital e soluções tecnológicas para empresas.',
        images: [
          {
            url: 'https://seusite.com.br/assets/img/seu-avatar.jpg',
            width: 1200,
            height: 630,
            alt: 'Roberlan Carvalho: Desenvolvedor Full Stack e Pesquisador em IA'
          }
        ]
      }}
    />
    <MainContent>
      <h1>Sobre Mim</h1>
      <p>
        Olá! Sou <strong>Roberlan Carvalho</strong>, desenvolvedor Full Stack, pesquisador e entusiasta de tecnologia. Meu trabalho é focado no desenvolvimento de soluções tecnológicas, com destaque para aplicações em <strong>Inteligência Artificial na saúde</strong>, inovação digital e gestão de sistemas empresariais.
      </p>

      <p>
        Ao longo da minha trajetória profissional, atuei no desenvolvimento e manutenção de sistemas para a <a href="https://www.unimedfortaleza.com.br/" target="_blank" rel="noopener noreferrer">Unimed Fortaleza</a>, contribuindo para a modernização de processos hospitalares e administrativos. Além disso, sou fundador da <a href="https://technorth.com.br/" target="_blank" rel="noopener noreferrer">Tech North</a>, uma empresa voltada para o desenvolvimento de software sob medida e consultoria em tecnologia.
      </p>

      <p>
        Sou <strong>bacharel em Sistemas de Informação</strong> pela <a href="http://unicatolicaquixada.edu.br/" target="_blank" rel="noopener noreferrer">Unicatólica de Quixadá</a> e atualmente curso uma especialização em <strong>Inteligência Artificial</strong> pela <a href="https://www.utfpr.edu.br/" target="_blank" rel="noopener noreferrer">Universidade Tecnológica Federal do Paraná (UTFPR)</a>. Minha pesquisa acadêmica tem como foco a aplicação da IA na saúde, abordando diretrizes para sua implementação ética e eficaz em hospitais e clínicas.
      </p>

      <h2>Minhas Experiências</h2>
      <p>
        Minha atuação profissional envolve a construção de soluções escaláveis e eficientes, abrangendo desde sistemas web e mobile até a integração de IA em processos clínicos e empresariais. Tenho experiência em:
      </p>
      <ul>
        <li><strong>Desenvolvimento Full Stack</strong> – Aplicações modernas usando Java, Spring Boot, Node.js, ReactJS, Angular e Typescript.</li>
        <li><strong>Inteligência Artificial</strong> – Aplicações de aprendizado de máquina, análise de dados e modelos preditivos.</li>
        <li><strong>Gestão de Dados</strong> – Banco de dados relacionais e NoSQL, incluindo PostgreSQL, Oracle e MongoDB.</li>
        <li><strong>Consultoria em Tecnologia</strong> – Soluções sob medida para empresas, incluindo automação e otimização de processos.</li>
      </ul>

      <h2>Projetos e Idealizações</h2>
      <p>
        Além do meu trabalho no setor corporativo, desenvolvi e idealizei diversos projetos voltados para inovação tecnológica:
      </p>
      <ul>
        <li><strong><a href="https://technorth.com.br/" target="_blank" rel="noopener noreferrer">Tech North</a></strong> – Desenvolvimento de softwares personalizados e consultoria em TI.</li>
        <li><strong>Plataforma SynapsIA</strong> – Assistente virtual com IA para suporte a pacientes crônicos.</li>
        <li><strong>APShared</strong> – Aplicativo para compartilhamento de imóveis e aluguel colaborativo.</li>
        <li><strong>MasterClient</strong> – Sistema de gestão de clientes baseado em critérios específicos.</li>
        <li><strong>AutonomIA</strong> – Ferramenta de automação baseada em IA para otimização de tarefas empresariais.</li>
      </ul>

      <h2>Hobbies e Interesses</h2>
      <p>
        Fora do universo do desenvolvimento, sou apaixonado por música e faço parte da banda <strong>Opus Seth</strong>. Também sou entusiasta de jogos digitais e acompanho o mundo da tecnologia, inteligência artificial e inovação.
      </p>
      <p>
        Nos momentos de lazer, gosto de explorar novas tecnologias, escrever sobre ciência e tecnologia, e me manter atualizado sobre as tendências da indústria. Além disso, mantenho este blog como um espaço para compartilhar conhecimento e trocar ideias com a comunidade.
      </p>

      <h2>Minhas Habilidades</h2>
      <ul>
        <li>Javascript / Typescript</li>
        <li>ReactJS / Next.js</li>
        <li>AngularJS</li>
        <li>NodeJS</li>
        <li>Java / Spring Boot</li>
        <li>Inteligência Artificial e Machine Learning</li>
        <li>Banco de Dados: PostgreSQL, Oracle, MongoDB</li>
        <li>Automação de Processos</li>
        <li>Gestão de Projetos de Softwares</li>
      </ul>

      <h2>Contato</h2>
      <p>
        Se você tem um projeto em mente, deseja explorar soluções inovadoras ou apenas trocar ideias sobre tecnologia e IA, entre em contato!
        Conecte-se comigo através das minhas redes sociais ou envie uma mensagem diretamente pelo site.
      </p>

      <SocialLinks hideStyle />
    </MainContent>
  </>
)

export default AboutPage

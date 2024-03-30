import { NextSeo } from 'next-seo'
import SocialLinks from 'components/SocialLinks'

import { MainContent } from 'styles/base'
import AdComponent from 'components/AdComponent'

const AboutPage = () => (
  <>
    <NextSeo
      title="Sobre Mim | Roberlan Carvalho"
      description="Mergulhe na jornada de Roberlan Carvalho, um desenvolvedor Full Stack com uma paixão vibrante por tecnologia e inovação."
      openGraph={{
        type: 'website',
        locale: 'pt_BR',
        url: 'https://seusite.com.br',
        site_name: 'Roberlan Carvalho',
        title:
          'Descubra Roberlan Carvalho - Desenvolvedor Full Stack e Visionário Tecnológico',
        description:
          'Mergulhe na jornada de Roberlan Carvalho, um desenvolvedor Full Stack com uma paixão vibrante por tecnologia e inovação.',
        images: [
          {
            url: 'https://seusite.com.br/assets/img/seu-avatar.jpg',
            width: 1200,
            height: 630,
            alt: 'Roberlan Carvalho: Desenvolvedor Full Stack e Visionário Tecnológico'
          }
        ]
      }}
    />
    <MainContent>
      <h1>Sobre Mim</h1>
      <p>
        Saudações! Meu nome é Roberlan Carvalho, um entusiasta da tecnologia que
        transformou a paixão em profissão. Atualmente, desbravo o mundo da
        programação na{' '}
        <a
          href="https://www.unimedfortaleza.com.br/"
          target="_blank"
          rel="noopener noreferrer"
        >
          Unimed Fortaleza
        </a>{' '}
        e na{' '}
        <a
          href="https://www.poncetech.com.br/"
          target="_blank"
          rel="noopener noreferrer"
        >
          Ponce Tech
        </a>
        , além de ser o fundador da{' '}
        <a
          href="https://technorth.com.br/"
          target="_blank"
          rel="noopener noreferrer"
        >
          Tech North
        </a>
        , uma iniciativa que reflete meu espírito empreendedor.
      </p>
      <p>
        Minha trajetória na{' '}
        <a
          href="http://unicatolicaquixada.edu.br/"
          target="_blank"
          rel="noopener noreferrer"
        >
          Unicatólica de Quixadá
        </a>
        , cursando Sistemas de Informação, tem aprofundado minha paixão por
        tecnologia e seu potencial para resolver problemas e enriquecer vidas.
        Dominando tecnologias como HTML, CSS, JavaScript, ReactJS, AngularJS,
        Java/Spring Boot, React Native, NodeJS, Oracle, e PostgreSQL, encaro
        cada projeto como uma nova aventura, onde programar se torna um
        playground de infinitas possibilidades.
      </p>
      <p>
        A colaboração e o compartilhamento de conhecimento são essenciais para
        mim. Fora do trabalho, gosto de trocar ideias sobre tecnologia e
        programação com amigos, o que também me motivou a iniciar este blog.
        Como desenvolvedor, gamer e músico, valorizo o equilíbrio entre
        profissão e hobbies, buscando sempre uma vida harmoniosa e criativa.
      </p>

      <AdComponent />

      <h2>Minhas Habilidades</h2>
      <ul>
        <li>Javascript / Typescript</li>
        <li>ReactJS</li>
        <li>AngularJS</li>
        <li>React Native</li>
        <li>NodeJS</li>
        <li>Java</li>
        <li>Spring Boot</li>
        <li>PostgreSQL</li>
        <li>Oracle</li>
      </ul>
      <p>
        Se você tem um projeto em mente ou apenas quer trocar ideias sobre o
        universo da tecnologia, não hesite em entrar em contato!
      </p>
      <h2>Contato</h2>
      <p>
        Conecte-se comigo através das minhas redes sociais ou envie uma mensagem
        diretamente pelo site.
      </p>

      <SocialLinks hideStyle />
    </MainContent>
  </>
)

export default AboutPage

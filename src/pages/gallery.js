import { NextSeo } from 'next-seo'
import { MainContent } from 'styles/base'
import Gallery from 'components/Gallery'

const galleryData = [
  {
    theme: 'Trilhas e Aventuras',
    description: 'Algumas das minhas aventuras e trilhas favoritas.',
    photos: [
      {
        src: '/assets/img/aventuras-e-trilhas/primeira-vez.jpg',
        alt: 'Trilha: Pedra da Galinha Choca',
        caption:
          'Primeira vez subindo a Pedra da Galinha Choca em Quixadá-CE - fevereiro de 2017.'
      },
      {
        src: '/assets/img/aventuras-e-trilhas/vista-do-topo.jpg',
        alt: 'Trilha: Pedra da Galinha Choca 2',
        caption: 'Vista do topo da Pedra da Galinha Choca.'
      },
      {
        src: '/assets/img/aventuras-e-trilhas/a-galera.jpg',
        alt: 'Trilha: Pedra da Galinha Choca 3',
        caption: 'Vista do topo da Pedra da Galinha Choca.'
      },
      
    ]
  },
  {
    theme: '',
    description: '',
    photos: [
      {
        src: '/assets/img/aventuras-e-trilhas/subindo.jpg',
        alt: 'Trilha: Pedra da Psicose',
        caption:
          'Trilha da Pedra da Psicose em Quixadá - CE.'
      },
      {
        src: '/assets/img/aventuras-e-trilhas/eu.jpg',
        alt: 'Trilha: Pedra da Galinha Choca 5',
        caption: 'Uma foto minha lá de cima.'
      },
    ]
  },
  {
    theme: 'Colação',
    description: 'Algumas fotos da minha colação de grau.',
    photos: [
      {
        src: '/assets/img/eventos/apresentacao-tcc.jpg',
        alt: 'Apresentação',
        caption: 'Dia da apresentação do TCC.'
      },
      {
        src: '/assets/img/eventos/formado.webp',
        alt: 'Colação de grau',
        caption: 'Dia da colação de grau.'
      },
      {
        src: '/assets/img/eventos/recebendo.jpg',
        alt: 'Colação de grau',
        caption: 'Colação de grau - recebendo do coordenador do curso.'
      },
      {
        src: '/assets/img/eventos/assinando.jpg',
        alt: 'Colação de grau',
        caption: 'Colação de grau - assinando.'
      },
    ]
  },
  {
    theme: 'Palestras e Eventos',
    description: 'Alguns momentos legais onde ministrei palestras, aprestações, etc.',
    photos: [
      {
        src: '/assets/img/eventos/palestrando2.jpg',
        alt: 'Palestra',
        caption: 'Ministrando palestra para os alunos de Sistemas de Informação da UniCatólica de Quixadá, sobre Inteligência Artificial e segurança de dados.'
      },
      {
        src: '/assets/img/eventos/palestrando.jpg',
        alt: 'Palestra',
        caption: 'Momnento da palestra sobre Inteligência Artificial e segurança de dados.'
      },
      {
        src: '/assets/img/eventos/mesa.jpg',
        alt: 'Mesa redonda',
        caption: 'Participando da mesa redonda sobre o mercado de trabalho, no evento do curso de Sistemas de Informação.'
      },
      {
        src: '/assets/img/eventos/premiacao.webp',
        alt: 'Premiação',
        caption: 'Recebendo a premiação do Prêmio Saber da Extensão da UniCatólica de Quixadá (fui receber com a camisa do Iron Maiden. Rsrs).'
      },
    ]
  }
]

const GalleryPage = () => (
  <>
    <MainContent>
      <h1>Galeria de Fotos</h1>
      <p>Explore algumas fotos de eventos, hobbies e momentos especiais.</p>
      <NextSeo title="Galeria | Roberlan Carvalho" />
    </MainContent>

    {galleryData.map((section, index) => (
      <Gallery
        key={index}
        theme={section.theme}
        description={section.description}
        photos={section.photos}
      />
    ))}
  </>
)

export default GalleryPage

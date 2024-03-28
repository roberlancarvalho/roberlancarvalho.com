import Project from 'components/Project'
import { NextSeo } from 'next-seo'
import { MainContent } from 'styles/base'

const projectsList = [
  {
    title: 'Master Point',
    description: 'Software de gestão empresarial integrada.',
    image:
      '/assets/img/portfolio/masterpoint.png', // Caminho para a imagem do projeto 1
    link: '#'
  },
  {
    title: 'Huro Print',
    description: 'Loja virtual de artigos personalizados.',
    image:
      '/assets/img/portfolio/huroprint.png', // Caminho para a imagem do projeto 1
    link: '#'
  },
  {
    title: 'Set Tarefas',
    description: 'Software de gestão de tafefas para setores e individual.',
    image:
      '/assets/img/portfolio/settarefas.png', // Caminho para a imagem do projeto 1
    link: '#'
  },
  {
    title: 'Cyber Aid',
    description: 'Sistema online de doações e acompanhamento.',
    image:
      '/assets/img/portfolio/cyberaid.png', // Caminho para a imagem do projeto 1
    link: '#'
  },
  {
    title: 'Gama GPS',
    description: 'Site intitucional.',
    image:
      '/assets/img/portfolio/gamagps.png', // Caminho para a imagem do projeto 1
    link: '#'
  },
  {
    title: 'Team Comics',
    description: 'Portal de notícias.',
    image:
      '/assets/img/portfolio/teamcomics.png', // Caminho para a imagem do projeto 1
    link: '#'
  },
  {
    title: 'AP Shared',
    description: 'Aplicativo de locação de imóveis.',
    image:
      '/assets/img/portfolio/apshared.png', // Caminho para a imagem do projeto 1
    link: '#'
  }
]

const PortfolioPage = () => (
  <>
    <MainContent>
      <h1>Portfólio</h1>

      <p>Veja uma seleção dos meus projetos mais recentes e relevantes.</p>

      <NextSeo
        title="Portfólio | Roberlan Carvalho"
        description="Veja uma seleção dos meus projetos mais recentes e relevantes."
        openGraph={{
          images: [
            {
              url: 'https://avatars.githubusercontent.com/u/19395705?s=400&u=e93e431233af3ce1657749cd251ee13537ae9466&v=4',
              width: 1200,
              height: 630,
              alt: 'Roberlan Carvalho - Portfólio'
            }
          ]
        }}
      />
    </MainContent>

    {projectsList.map(({ title, description, image, link }, i) => (
      <Project
        key={i}
        title={title}
        description={description}
        image={image}
        link={link}
      />
    ))}
  </>
)

export default PortfolioPage

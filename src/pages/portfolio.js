import Project from 'components/Project'
import { NextSeo } from 'next-seo'
import { MainContent } from 'styles/base'

const projectsList = [
  {
    title: 'Projeto 1',
    description: 'Descrição do projeto 1.',
    image:
      'https://avatars.githubusercontent.com/u/19395705?s=400&u=e93e431233af3ce1657749cd251ee13537ae9466&v=4', // Caminho para a imagem do projeto 1
    link: 'https://example.com/project1'
  },
  {
    title: 'Projeto 1',
    description: 'Descrição do projeto 1.',
    image:
      'https://avatars.githubusercontent.com/u/19395705?s=400&u=e93e431233af3ce1657749cd251ee13537ae9466&v=4', // Caminho para a imagem do projeto 1
    link: 'https://example.com/project1'
  },
  {
    title: 'Projeto 1',
    description: 'Descrição do projeto 1.',
    image:
      'https://avatars.githubusercontent.com/u/19395705?s=400&u=e93e431233af3ce1657749cd251ee13537ae9466&v=4', // Caminho para a imagem do projeto 1
    link: 'https://example.com/project1'
  },
  {
    title: 'Projeto 1',
    description: 'Descrição do projeto 1.',
    image:
      'https://avatars.githubusercontent.com/u/19395705?s=400&u=e93e431233af3ce1657749cd251ee13537ae9466&v=4', // Caminho para a imagem do projeto 1
    link: 'https://example.com/project1'
  },
  {
    title: 'Projeto 1',
    description: 'Descrição do projeto 1.',
    image:
      'https://avatars.githubusercontent.com/u/19395705?s=400&u=e93e431233af3ce1657749cd251ee13537ae9466&v=4', // Caminho para a imagem do projeto 1
    link: 'https://example.com/project1'
  },
  {
    title: 'Projeto 1',
    description: 'Descrição do projeto 1.',
    image:
      'https://avatars.githubusercontent.com/u/19395705?s=400&u=e93e431233af3ce1657749cd251ee13537ae9466&v=4', // Caminho para a imagem do projeto 1
    link: 'https://example.com/project1'
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

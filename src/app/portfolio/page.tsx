import type { Metadata } from 'next'
import { Project } from 'components/content/Project'

// Todos os 7 sem link público real hoje (confirmado no diagnóstico) — ver
// decisão do usuário em docs/decisions.md: sem link, com nota
// "privado/cliente", nenhuma URL inventada.
const PROJECTS = [
  {
    title: 'Master Point',
    description: 'Software de gestão empresarial integrada.',
    image: '/assets/img/portfolio/masterpoint.png'
  },
  {
    title: 'Huro Print',
    description: 'Loja virtual de artigos personalizados.',
    image: '/assets/img/portfolio/huroprint.png'
  },
  {
    title: 'Set Tarefas',
    description: 'Software de gestão de tarefas para setores e individual.',
    image: '/assets/img/portfolio/settarefas.png'
  },
  {
    title: 'Cyber Aid',
    description: 'Sistema online de doações e acompanhamento.',
    image: '/assets/img/portfolio/cyberaid.png'
  },
  {
    title: 'Gama GPS',
    description: 'Site intitucional.',
    image: '/assets/img/portfolio/gamagps.png'
  },
  {
    title: 'Team Comics',
    description: 'Portal de notícias.',
    image: '/assets/img/portfolio/teamcomics.png'
  },
  {
    title: 'AP Shared',
    description: 'Aplicativo de locação de imóveis.',
    image: '/assets/img/portfolio/apshared.png'
  }
]

export const metadata: Metadata = {
  title: 'Portfólio',
  description: 'Veja uma seleção dos meus projetos mais recentes e relevantes.',
  openGraph: {
    images: [
      {
        url: 'https://avatars.githubusercontent.com/u/19395705?s=400&u=e93e431233af3ce1657749cd251ee13537ae9466&v=4',
        width: 1200,
        height: 630,
        alt: 'Roberlan Carvalho - Portfólio'
      }
    ]
  }
}

export default function PortfolioPage() {
  return (
    <div className="mx-auto max-w-[70rem] px-4 py-8 large:px-8">
      <h1 className="text-3xl font-bold text-post">Portfólio</h1>
      <p className="mt-2 text-texts">Veja uma seleção dos meus projetos mais recentes e relevantes.</p>

      <div className="mt-6">
        {PROJECTS.map(project => (
          <Project key={project.title} {...project} />
        ))}
      </div>
    </div>
  )
}

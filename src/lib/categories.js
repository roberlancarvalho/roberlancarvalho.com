const gradientMap = {
  dev: 'linear-gradient(135deg, #1565C0 0%, #0D47A1 100%)', // Azul escuro
  tech: 'linear-gradient(135deg, #00838F 0%, #006064 100%)', // Azul petróleo
  nerd: 'linear-gradient(135deg, #3949AB 0%, #1A237E 100%)', // Azul médio
  js: 'linear-gradient(135deg, #FDD835 0%, #FFEB3B 100%)', // Amarelo equilibrado
  code: 'linear-gradient(135deg, #FB8C00 0%, #F57C00 100%)', // Laranja quente
  design: 'linear-gradient(135deg, #8E24AA 0%, #9C27B0 100%)', // Roxo elegante
  devops: 'linear-gradient(135deg, #0097A7 0%, #00796B 100%)', // Azul petróleo escuro
  tips: 'linear-gradient(135deg, #7CB342 0%, #558B2F 100%)', // Verde suave
  ia: 'linear-gradient(135deg, #5E35B1 0%, #4527A0 100%)', // Roxo médio
  css: 'linear-gradient(135deg, #0288D1 0%, #01579B 100%)', // Azul brilhante
  dicas: 'linear-gradient(135deg, #FFA000 0%, #FF8F00 100%)', // Amarelo dourado
  'ui/ux': 'linear-gradient(135deg, #E53935 0%, #B71C1C 100%)', // Vermelho moderado
  seg: 'linear-gradient(135deg, #6D4C41 0%, #4E342E 100%)', // Marrom escuro
  backend: 'linear-gradient(135deg, #546E7A 0%, #37474F 100%)', // Azul acinzentado escuro
  frontend: 'linear-gradient(135deg, #EC407A 0%, #D81B60 100%)', // Rosa forte
  mobile: 'linear-gradient(135deg, #00796B 0%, #004D40 100%)', // Verde escuro suave
  database: 'linear-gradient(135deg, #388E3C 0%, #1B5E20 100%)', // Verde clássico
  cloud: 'linear-gradient(135deg, #1976D2 0%, #0D47A1 100%)', // Azul médio escuro
  segurança: 'linear-gradient(135deg, #C62828 0%, #B71C1C 100%)', // Vermelho intenso
  inovação: 'linear-gradient(135deg, #673AB7 0%, #512DA8 100%)' // Roxo elétrico
}

const arts = ['dev', 'ia', 'inovacao', 'nerd', 'tech', 'tips']

// Degradê e arte SVG da categoria (padrão de circuito se não houver arte própria)
export function categoryTheme(category) {
  const key = category?.toLowerCase()
  const slug = key?.normalize('NFD').replace(/[̀-ͯ]/g, '')
  const gradient =
    gradientMap[key] || 'linear-gradient(135deg, #777 0%, #444 100%)'

  return {
    gradient,
    colors: gradient.match(/#[0-9a-f]{6}/gi),
    art: `/assets/img/categories/${arts.includes(slug) ? slug : 'circuit'}.svg`
  }
}

export function categoryBackground(category, fit = 'cover no-repeat') {
  const { art, gradient } = categoryTheme(category)
  return `url('${art}') center / ${fit}, ${gradient}`
}

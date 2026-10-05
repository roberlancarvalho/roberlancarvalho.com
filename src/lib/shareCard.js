import { categoryTheme } from 'lib/categories'

// Tamanhos do Instagram. `safeTop`/`safeBottom` deixam livre a área que a
// interface do app cobre (barra de progresso, campo de resposta).
export const FORMATS = {
  story: {
    width: 1080,
    height: 1920,
    safeTop: 260,
    safeBottom: 380,
    title: 88
  },
  feed: { width: 1080, height: 1350, safeTop: 90, safeBottom: 110, title: 72 }
}

const FONT =
  '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif'
const ACCENT = '#38bdf8'
const PAD = 90

function loadImage(src) {
  return new Promise((resolve, reject) => {
    const img = new Image()
    img.crossOrigin = 'anonymous'
    img.onload = () => resolve(img)
    img.onerror = reject
    img.src = src
  })
}

// Imagens locais passam pelo otimizador do Next: baixa ~100 KB em vez do PNG original
const optimized = src =>
  src.startsWith('/')
    ? `/_next/image?url=${encodeURIComponent(src)}&w=1080&q=80`
    : src

function drawCover(ctx, img, w, h) {
  const scale = Math.max(w / img.width, h / img.height)
  const dw = img.width * scale
  const dh = img.height * scale
  ctx.drawImage(img, (w - dw) / 2, (h - dh) / 2, dw, dh)
}

function wrap(ctx, text, maxWidth, maxLines) {
  const lines = []
  let line = ''
  for (const word of text.split(/\s+/)) {
    const test = line ? `${line} ${word}` : word
    if (ctx.measureText(test).width > maxWidth && line) {
      lines.push(line)
      line = word
    } else {
      line = test
    }
  }
  if (line) lines.push(line)
  if (lines.length > maxLines) {
    lines.length = maxLines
    lines[maxLines - 1] = lines[maxLines - 1].replace(/\s*\S*$/, '…')
  }
  return lines
}

async function drawBackground(ctx, w, h, image, category) {
  if (image) {
    try {
      drawCover(ctx, await loadImage(optimized(image)), w, h)
      return
    } catch (e) {
      // imagem indisponível: cai na arte da categoria
    }
  }

  const { colors, art } = categoryTheme(category)
  const gradient = ctx.createLinearGradient(0, 0, w, h)
  gradient.addColorStop(0, colors[0])
  gradient.addColorStop(1, colors[1] || colors[0])
  ctx.fillStyle = gradient
  ctx.fillRect(0, 0, w, h)

  try {
    const svg = await loadImage(art)
    const size = 300
    for (let y = 0; y < h; y += size)
      for (let x = 0; x < w; x += size) ctx.drawImage(svg, x, y, size, size)
  } catch (e) {
    // sem arte, fica só o degradê
  }
}

export async function renderShareCard({
  format,
  title,
  description,
  category,
  image,
  site
}) {
  const f = FORMATS[format]
  const { width: w, height: h } = f
  const canvas = document.createElement('canvas')
  canvas.width = w
  canvas.height = h
  const ctx = canvas.getContext('2d')

  await drawBackground(ctx, w, h, image, category)

  // Escurece de cima para baixo para o texto ficar legível sobre qualquer imagem
  const shade = ctx.createLinearGradient(0, 0, 0, h)
  shade.addColorStop(0, 'rgba(2, 6, 23, 0.35)')
  shade.addColorStop(0.45, 'rgba(2, 6, 23, 0.55)')
  shade.addColorStop(1, 'rgba(2, 6, 23, 0.92)')
  ctx.fillStyle = shade
  ctx.fillRect(0, 0, w, h)

  const maxWidth = w - PAD * 2

  ctx.font = `700 ${f.title}px ${FONT}`
  const titleLines = wrap(ctx, title, maxWidth, 6)
  const titleLead = f.title * 1.15

  const descSize = Math.round(f.title * 0.48)
  ctx.font = `300 ${descSize}px ${FONT}`
  const descLines = description ? wrap(ctx, description, maxWidth, 4) : []
  const descLead = descSize * 1.4

  // Bloco de texto ancorado embaixo, acima da área segura
  const blockHeight =
    50 + 40 + titleLines.length * titleLead + 30 + descLines.length * descLead
  let y = Math.max(f.safeTop + 120, h - f.safeBottom - 170 - blockHeight)

  ctx.textBaseline = 'top'
  ctx.shadowColor = 'rgba(0, 0, 0, 0.45)'
  ctx.shadowBlur = 16

  // Selo da categoria
  if (category) {
    const label = category.toUpperCase()
    ctx.font = `700 30px ${FONT}`
    const pillW = ctx.measureText(label).width + 48
    ctx.fillStyle = ACCENT
    ctx.beginPath()
    ctx.roundRect
      ? ctx.roundRect(PAD, y, pillW, 50, 25)
      : ctx.rect(PAD, y, pillW, 50)
    ctx.fill()
    ctx.fillStyle = '#0f172a'
    ctx.shadowBlur = 0
    ctx.fillText(label, PAD + 24, y + 10)
    ctx.shadowBlur = 16
  }
  y += 50 + 40

  ctx.fillStyle = '#ffffff'
  ctx.font = `700 ${f.title}px ${FONT}`
  for (const line of titleLines) {
    ctx.fillText(line, PAD, y)
    y += titleLead
  }

  y += 30
  ctx.fillStyle = 'rgba(255, 255, 255, 0.85)'
  ctx.font = `300 ${descSize}px ${FONT}`
  for (const line of descLines) {
    ctx.fillText(line, PAD, y)
    y += descLead
  }

  // Rodapé: chamada + endereço do blog
  ctx.shadowBlur = 0
  const footerY = h - f.safeBottom - 110
  ctx.fillStyle = ACCENT
  ctx.fillRect(PAD, footerY, 80, 6)
  ctx.font = `700 36px ${FONT}`
  ctx.fillStyle = '#ffffff'
  ctx.fillText('Leia o artigo completo', PAD, footerY + 30)
  ctx.font = `400 32px ${FONT}`
  ctx.fillStyle = ACCENT
  ctx.fillText(site, PAD, footerY + 78)

  return new Promise(resolve => canvas.toBlob(resolve, 'image/png'))
}

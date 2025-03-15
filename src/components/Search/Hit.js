import Post from 'components/Post'

const Hit = ({ hit }) => {
  const slug = hit.fields?.slug || hit.slug // Tenta pegar de `fields`, se não existir, pega de `hit` diretamente

  if (!slug) {
    console.warn("⚠️ Alerta: Post sem slug", hit);
    return null; // Evita erro caso o slug esteja faltando
  }

  return (
    <Post
      slug={slug} // Usa a variável corrigida
      title={hit.title}
      date={hit.date}
      description={hit.description}
      main_class={hit.main_class}
    />
  )
}

export default Hit

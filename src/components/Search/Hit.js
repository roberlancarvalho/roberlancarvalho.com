import Post from 'components/Post'

const Hit = ({ hit }) => {
  const slug = hit.fields?.slug || hit.slug 

  if (!slug) {
    console.warn("⚠️ Alerta: Post sem slug", hit);
    return null;
  }

  const formatDate = (dateString) => {
    if (!dateString) return 'Data desconhecida';
    return new Intl.DateTimeFormat('pt-BR', {
      day: '2-digit',
      month: 'long',
      year: 'numeric',
    }).format(new Date(dateString));
  };

  return (
    <Post
      slug={slug}
      title={hit.title}
      date={formatDate(hit.date)}
      description={hit.description}
      main_class={hit.main_class}
    />
  )
}

export default Hit

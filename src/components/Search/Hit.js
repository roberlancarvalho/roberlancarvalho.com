import Post from 'components/Post'

const Hit = ({ hit }) => {
  const slug = hit.fields?.slug || hit.slug || "";
  const mainClass = hit.main_class || "default"; // Adiciona um valor padrão

  console.log("main_class:", mainClass); // Para depuração

  if (!slug) {
    console.warn("⚠️ Alerta: Post sem slug", hit);
    return null;
  }

  return (
    <Post
      slug={slug}
      title={hit.title}
      date={hit.date}
      description={hit.description}
      main_class={mainClass} // Garante que sempre tenha um valor
    />
  );
};


export default Hit

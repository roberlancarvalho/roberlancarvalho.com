import Image from 'next/image'
import Link from 'next/link'

import * as S from './styled'

// Cabeçalho único de todas as páginas. Com `image` ou `category` vira um
// banner: a imagem (ou a arte da categoria) fica por trás do título.
const PageHeader = ({
  title,
  description,
  meta,
  backHref,
  image,
  category
}) => (
  <S.Header
    $hero={Boolean(image || category)}
    $category={image ? null : category}
  >
    {image && (
      <Image src={image} alt="" layout="fill" objectFit="cover" priority />
    )}
    <S.Inner>
      {backHref && (
        <Link href={backHref} passHref>
          <S.Back>← Voltar na listagem</S.Back>
        </Link>
      )}
      {meta && <S.Meta>{meta}</S.Meta>}
      <S.Title>{title}</S.Title>
      {description && <S.Description>{description}</S.Description>}
    </S.Inner>
  </S.Header>
)

export default PageHeader

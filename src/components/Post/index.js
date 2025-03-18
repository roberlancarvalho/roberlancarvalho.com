import Link from 'next/link'
import { useRouter } from 'next/router'
import * as S from './styled'

const Post = ({ slug, date, timeToRead, title, description, main_class }) => {
  const router = useRouter();

  return (
    <Link href={slug} passHref>
      <S.PostLink>
        <S.PostWrapper>
          {main_class && router.pathname !== '/search' && (
            <S.PostTag color={main_class?.toLowerCase()}>{main_class}</S.PostTag>
          )}
          <S.PostInfo>
            <S.PostDate>
              {date} {timeToRead && ` • ${timeToRead} min de leitura`}
            </S.PostDate>
            <S.PostTitle>{title}</S.PostTitle>
            <S.PostDescription>{description}</S.PostDescription>
          </S.PostInfo>
        </S.PostWrapper>
      </S.PostLink>
    </Link>
  )
}

export default Post

import * as S from './styled'

const Project = ({ title, description, link, image }) => {
  return (
    <S.CourseLink href={link}>
      <S.CourseWrapper>
        <S.CourseImage src={image} alt={title} />
        <S.CourseInfo>
          <S.CourseTitle>{title}</S.CourseTitle>
          <S.CourseDescription>{description}</S.CourseDescription>
        </S.CourseInfo>
      </S.CourseWrapper>
    </S.CourseLink>
  )
}

export default Project

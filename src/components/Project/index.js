import * as S from './styled'

const Project = ({ title, description, link, image }) => {
  return (
    <S.ProjectLink href={link}>
      <S.ProjectWrapper>
        <S.ProjectImage src={image} alt={title} />
        <S.ProjectInfo>
          <S.ProjectTitle>{title}</S.ProjectTitle>
          <S.ProjectDescription>{description}</S.ProjectDescription>
        </S.ProjectInfo>
      </S.ProjectWrapper>
    </S.ProjectLink>
  )
}

export default Project

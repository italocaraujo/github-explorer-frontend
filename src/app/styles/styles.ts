import styled from 'styled-components'

export const Container = styled.main`
  max-width: 1200px;
  margin: 0 auto;
  padding: 2rem;
`

export const Title = styled.h2`
  font-size: 2rem;
  color: ${({ theme }) => theme.cards.titleColor};
`

export const Username = styled.h4`
  font-size: 0.875rem;
  margin-bottom: 1rem;
  color: ${({ theme }) => theme.colors.text};
`

export const ErrorMessage = styled.p`
  color: ${({ theme }) => theme.colors.error};
  margin: 1rem 0;
`

export const ReposGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
  gap: 1rem;
  margin-top: 2rem;
`

export const RepoTitle = styled.h3`
  font-size: 1.5rem;
  color: ${({ theme }) => theme.cards.titleColor};
`

export const RepoDescription = styled.p`
  font-size: 0.875rem;
  color: ${({ theme }) => theme.cards.subtitleColor};
  margin-top: 0.375rem;
`

export const LanguageTag = styled.span`
  display: inline-block;
  background: ${({ theme }) => theme.cards.badgeBackground};
  color: ${({ theme }) => theme.cards.badgeTextColor};
  font-weight: 600;
  font-size: 0.8rem;
  padding: 0.125rem 0.625rem;
  border-radius: 3.125rem;
`
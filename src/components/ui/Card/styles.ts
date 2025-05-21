import styled from 'styled-components'

interface StyledCardProps {
  $hoverEffect?: boolean
}

export const StyledCard = styled.div<StyledCardProps>`
  background: ${({ theme }) => theme.colors.background};
  border: 1px solid ${({ theme }) => theme.cards.borderColor};
  border-radius: 8px;
  transition: all 0.3s ease;
  overflow: hidden;

  ${({ $hoverEffect }) => 
    $hoverEffect && `
      &:hover {
        transform: translateY(-2px);
        box-shadow: 0 4px 8px rgba(0, 0, 0, 0.15);
        cursor: pointer;
      }
    `
  }
`

export const UserCard = styled(StyledCard)`
  display: flex;
  flex-direction: column;
  padding: ${({ theme }) => theme.spacing.large};

  img {
    border-radius: 50%;
    width: 80px;
    height: 80px;
    object-fit: cover;
    margin-bottom: 1rem;
  }

  h2 {
    font-size: 1.5rem;
    color: ${({ theme }) => theme.cards.titleColor};
  }

  h4 {
    color: ${({ theme }) => theme.cards.subtitleColor};
    font-size: 1.2rem;
  }

  p {
    color: ${({ theme }) => theme.cards.subtitleColor};
    font-size: 0.875rem;
  }
`

export const RepoCard = styled(StyledCard)`
  h3 {
    color: ${({ theme }) => theme.colors.secondary};
    font-size: 1.2rem;
  }

  p {
    color: ${({ theme }) => theme.colors.text};
    opacity: 0.8;
    font-size: 0.9rem;
  }
`
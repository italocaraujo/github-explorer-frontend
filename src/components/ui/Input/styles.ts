import styled from 'styled-components'

export const StyledInput = styled.input`
  padding: ${({ theme }) => theme.spacing.medium};
  border: 1px solid ${({ theme }) => theme.cards.borderColor};
  border-radius: 4px;
  width: 100%;
  font-size: 1rem;
  font-family: Inter, sans-serif;
  transition: border 0.2s ease-in-out;


  &:hover {
    border: 1px solid ${({ theme }) => theme.colors.primary};
    outline: none;
  }
  &:focus {
    border: 1px solid ${({ theme }) => theme.colors.primary};
    outline: 1px solid ${({ theme }) => theme.colors.primary};
  }
`
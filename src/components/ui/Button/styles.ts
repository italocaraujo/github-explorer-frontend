import styled from 'styled-components'
import { StyledButtonProps } from './types'

const shouldForwardProp = (prop: string) =>
  !['fullWidth', 'isLoading'].includes(prop)

export const StyledButton = styled.button.withConfig({ shouldForwardProp })<StyledButtonProps>`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  gap: ${({ theme }) => theme.spacing.small};
  border: none;
  border-radius: 4px;
  cursor: pointer;
  transition: all 0.2s ease;
  font-weight: 600;
  font-family: Inter, sans-serif;

  ${({ variant, theme }) => {
    switch (variant) {
      case 'primary':
        return `
          background: ${theme.colors.primary};
          color: white;
          &:hover {
            background: ${theme.colors.primary}dd;
          }
        `
      case 'secondary':
        return `
          background: ${theme.colors.secondary};
          color: white;
          &:hover {
            background: ${theme.colors.secondary}dd;
          }
        `
      case 'outline':
        return `
          background: transparent;
          color: ${theme.colors.primary};
          border: 1px solid ${theme.colors.primary};
          &:hover {
            background: ${theme.colors.primary}11;
          }
        `
      case 'text':
        return `
          background: transparent;
          color: ${theme.colors.primary};
          &:hover {
            background: ${theme.colors.primary}11;
          }
        `
      default:
        return `
          background: ${theme.colors.primary};
          color: white;
        `
    }
  }}

  ${({ size, theme }) => {
    switch (size) {
      case 'small':
        return `
          padding: ${theme.spacing.small} ${theme.spacing.medium};
          font-size: 0.875rem;
        `
      case 'large':
        return `
          padding: ${theme.spacing.medium} ${theme.spacing.large};
          font-size: 1.125rem;
        `
      default:
        return `
          padding: ${theme.spacing.small} ${theme.spacing.large};
          font-size: 1rem;
        `
    }
  }}

  ${({ fullWidth }) => fullWidth && 'width: 100%;'}

  ${({ isLoading }) => isLoading && `
    opacity: 0.7;
    cursor: wait;
  `}

  &:disabled {
    opacity: 0.5;
    cursor: not-allowed;
  }
`

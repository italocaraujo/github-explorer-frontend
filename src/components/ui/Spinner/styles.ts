import styled, { keyframes } from 'styled-components'

const spin = keyframes`
  to { transform: rotate(360deg); }
`

interface StyledSpinnerProps {
  $size: 'small' | 'medium' | 'large'
  $color?: string
}

export const StyledSpinner = styled.div<StyledSpinnerProps>`
  display: inline-block;
  border: 2px solid rgba(255, 255, 255, 0.3);
  border-radius: 50%;
  border-top-color: ${({ $color, theme }) => $color || theme.colors.primary};
  animation: ${spin} 1s ease-in-out infinite;
  
  ${({ $size }) => {
    switch ($size) {
      case 'small':
        return 'width: 16px; height: 16px;'
      case 'large':
        return 'width: 24px; height: 24px;'
      default:
        return 'width: 20px; height: 20px;'
    }
  }}
`
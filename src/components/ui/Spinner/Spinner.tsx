'use client'

import { StyledSpinner } from './styles'

interface SpinnerProps {
  size?: 'small' | 'medium' | 'large'
  color?: string
}

export const Spinner = ({ size = 'medium', color }: SpinnerProps) => {
  return <StyledSpinner $size={size} $color={color} />
}
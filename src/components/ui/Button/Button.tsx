'use client'

import { StyledButton } from './styles'
import { ButtonProps } from './types'
import { Spinner } from '../Spinner/Spinner'

export const Button = ({
  children,
  variant = 'primary',
  size = 'medium',
  fullWidth = false,
  isLoading = false,
  startIcon,
  endIcon,
  disabled,
  ...props
}: ButtonProps) => {
  return (
    <StyledButton
      variant={variant}
      size={size}
      fullWidth={fullWidth}
      isLoading={isLoading}
      disabled={disabled || isLoading}
      {...props}
    >
      {isLoading ? (
        <Spinner size={size === 'large' ? 'medium' : 'small'} />
      ) : (
        <>
          {startIcon && <span className="start-icon">{startIcon}</span>}
          {children}
          {endIcon && <span className="end-icon">{endIcon}</span>}
        </>
      )}
    </StyledButton>
  )
}
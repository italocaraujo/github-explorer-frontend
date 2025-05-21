import { ReactNode, ButtonHTMLAttributes } from 'react'

/**
 * Props para o componente Button
 * 
 * @property children - Conteúdo do botão (texto, ícone, etc.)
 * @property variant - Estilo visual do botão (primary, secondary, etc.)
 * @property size - Tamanho do botão (small, medium, large)
 * @property fullWidth - Se o botão deve ocupar 100% da largura
 * @property isLoading - Estado de carregamento (exibe um spinner)
 * @property startIcon - Ícone no início do botão
 * @property endIcon - Ícone no final do botão
 */
export interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  children: ReactNode
  variant?: 'primary' | 'secondary' | 'outline' | 'text'
  size?: 'small' | 'medium' | 'large'
  fullWidth?: boolean
  isLoading?: boolean
  startIcon?: ReactNode
  endIcon?: ReactNode
}

export type StyledButtonProps = Pick<
  ButtonProps, 
  'variant' | 'size' | 'fullWidth' | 'isLoading'
>
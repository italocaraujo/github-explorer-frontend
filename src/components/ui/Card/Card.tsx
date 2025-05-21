import { ReactNode } from 'react'
import { StyledCard } from './styles'

interface CardProps {
  children: ReactNode
  className?: string
  hoverEffect?: boolean
  onClick?: () => void
}

export const Card = ({
  children,
  className,
  hoverEffect = false,
  onClick,
}: CardProps) => {
  return (
    <StyledCard 
      className={className} 
      $hoverEffect={hoverEffect}
      onClick={onClick}
    >
      {children}
    </StyledCard>
  )
}
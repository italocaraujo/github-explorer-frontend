// src/components/LanguageFilter/LanguageFilter.tsx
'use client'

import styled from 'styled-components'

const FilterContainer = styled.div`
  margin: 1rem 0;
`

const FilterLabel = styled.label`
  display: block;
  margin-bottom: 0.5rem;
  font-weight: 500;
  color: ${({ theme }) => theme.cards.subtitleColor};
`

const FilterInput = styled.input`
  padding: 0.5rem;
  border: 1px solid #ddd;
  border-radius: 4px;
  width: 100%;
  max-width: 300px;
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

interface LanguageFilterProps {
  value: string
  onChange: (language: string) => void
  availableLanguages: string[]
}

export const LanguageFilter = ({ 
  value, 
  onChange,
  availableLanguages 
}: LanguageFilterProps) => {
  return (
    <FilterContainer>
      <FilterLabel htmlFor="language-filter">Filtrar por linguagem:</FilterLabel>
      <FilterInput
        id="language-filter"
        type="text"
        value={value}
        onChange={(e) => onChange(e.target.value)}
        placeholder="Ex: JavaScript, Python..."
        list="language-suggestions"
      />
      <datalist id="language-suggestions">
        {availableLanguages.map((lang) => (
          <option key={lang} value={lang} />
        ))}
      </datalist>
    </FilterContainer>
  )
}
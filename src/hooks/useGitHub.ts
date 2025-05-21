'use client'

import { useState, useEffect } from 'react' // Mudei para useEffect
import { githubService } from '@/services/api'

interface GitHubUser {
  login: string
  id: number
  avatar_url: string
  name: string | null
  bio: string | null
  public_repos: number
  followers: number
  following: number
  html_url: string
}

interface Repo {
  id: number
  name: string
  full_name: string
  html_url: string
  description: string | null
  language: string | null
  stargazers_count: number
  forks_count: number
  updated_at: string
}

export const useGitHub = () => {
  const [user, setUser] = useState<GitHubUser | null>(null)
  const [allRepos, setAllRepos] = useState<Repo[]>([])
  const [filteredRepos, setFilteredRepos] = useState<Repo[]>([])
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState<string | null>(null)
  const [languageFilter, setLanguageFilter] = useState('')

  // Extrai linguagens únicas dos repositórios (corrigido a tipagem)
  const availableLanguages = Array.from(
    new Set(allRepos
      .map(repo => repo.language)
      .filter((lang): lang is string => lang !== null)
    )
  )

  const applyLanguageFilter = () => {
    if (!languageFilter) {
      setFilteredRepos(allRepos)
      return
    }
    
    const filtered = allRepos.filter(repo => 
      repo.language?.toLowerCase().includes(languageFilter.toLowerCase())
    )
    setFilteredRepos(filtered)
  }

  // Corrigido: usando useEffect ao invés de useState
  useEffect(() => {
    applyLanguageFilter()
  }, [languageFilter, allRepos])

  const searchUser = async (username: string) => {
    setLoading(true)
    setError(null)
    setLanguageFilter('')
    
    try {
      const [profileResponse, reposResponse] = await Promise.all([
        githubService.getProfile(username),
        githubService.getRepos(username)
      ])
      
      setUser(profileResponse.data)
      setAllRepos(reposResponse.data)
      setFilteredRepos(reposResponse.data)
    } catch (err) {
      setError('Usuário não encontrado')
      setUser(null)
      setAllRepos([])
      setFilteredRepos([])
    } finally {
      setLoading(false)
    }
  }

  return { 
    user, 
    repos: filteredRepos,
    allRepos,
    loading, 
    error, 
    searchUser,
    languageFilter,
    setLanguageFilter,
    availableLanguages
  }
}
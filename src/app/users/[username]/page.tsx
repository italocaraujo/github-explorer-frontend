'use client'

import { useParams } from 'next/navigation'
import { useEffect, useState } from 'react'
import { githubService } from '@/services/api'
import { Card } from '@/components/ui/Card/Card'

interface UserProfile {
  login: string
  name: string
  avatar_url: string
  bio: string
  public_repos: number
  followers: number
  following: number
}

interface Repo {
  id: number
  name: string
  description: string
  language: string
  stargazers_count: number
}

export default function UserProfilePage() {
  const params = useParams()
  const username = params.username as string
  const [profile, setProfile] = useState<UserProfile | null>(null)
  const [repos, setRepos] = useState<Repo[]>([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    const fetchData = async () => {
      try {
        const [profileRes, reposRes] = await Promise.all([
          githubService.getProfile(username),
          githubService.getRepos(username)
        ])
        setProfile(profileRes.data)
        setRepos(reposRes.data)
      } catch (error) {
        console.error('Failed to fetch data:', error)
      } finally {
        setLoading(false)
      }
    }

    fetchData()
  }, [username])

  if (loading) return <div>Carregando...</div>
  if (!profile) return <div>Usuário não encontrado</div>

  return (
    <div className="container mx-auto p-4">
      <Card className="mb-6 p-6">
        <div className="flex flex-col md:flex-row gap-6 items-center">
          <img
            src={profile.avatar_url}
            alt={`${profile.login}'s avatar`}
            className="w-32 h-32 rounded-full"
          />
          <div>
            <h1 className="text-2xl font-bold">{profile.name || profile.login}</h1>
            {profile.bio && <p className="text-gray-600 mt-2">{profile.bio}</p>}
            <div className="flex gap-4 mt-4">
              <div>
                <span className="font-semibold">{profile.public_repos}</span> repositórios
              </div>
              <div>
                <span className="font-semibold">{profile.followers}</span> seguidores
              </div>
              <div>
                <span className="font-semibold">{profile.following}</span> seguindo
              </div>
            </div>
          </div>
        </div>
      </Card>

      <h2 className="text-xl font-semibold mb-4">Repositórios</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {repos.map((repo) => (
          <Card key={repo.id} className="p-4 hover:shadow-lg transition-shadow">
            <h3 className="font-medium text-lg mb-2">
              <a 
                href={`https://github.com/${username}/${repo.name}`} 
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-blue-600"
              >
                {repo.name}
              </a>
            </h3>
            <p className="text-gray-600 text-sm mb-3">
              {repo.description || 'Sem descrição'}
            </p>
            <div className="flex justify-between items-center">
              {repo.language && (
                <span className="inline-block bg-blue-100 text-blue-800 text-xs px-2 py-1 rounded">
                  {repo.language}
                </span>
              )}
              <span className="text-yellow-600 text-sm">
                ⭐ {repo.stargazers_count}
              </span>
            </div>
          </Card>
        ))}
      </div>
    </div>
  )
}
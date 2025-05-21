import styled from 'styled-components'
import { GitHubUser } from '@/types/github'

const ProfileContainer = styled.div`
  display: flex;
  gap: 2rem;
  margin-bottom: 2rem;
`

interface UserProfileProps {
  user: GitHubUser
}

export const UserProfile = ({ user }: UserProfileProps) => (
  <ProfileContainer>
    <img 
      src={user.avatar_url} 
      alt={`Avatar de ${user.login}`} 
      width={200} 
      height={200}
    />
    <div>
      <h1>{user.name || user.login}</h1>
      {user.bio && <p>{user.bio}</p>}
      <p>📍 {user.location || 'Localização não informada'}</p>
    </div>
  </ProfileContainer>
)
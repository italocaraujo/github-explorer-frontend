import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import StyledComponentsRegistry from './lib/registry'
import { Providers } from './providers'
import { GlobalStyles } from '@/styles/GlobalStyles'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'GitHub Explorer',
  description: 'Explore perfis e repositórios do GitHub',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="pt-BR">
      <body className={inter.className}>
        <StyledComponentsRegistry>
          <Providers>
            <GlobalStyles />
            {children}
          </Providers>
        </StyledComponentsRegistry>
      </body>
    </html>
  )
}

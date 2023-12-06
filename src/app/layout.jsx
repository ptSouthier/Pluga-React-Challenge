import { Inter } from 'next/font/google'
import './globals.css'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Pluga | Todas as ferramentas para integrar',
  description: 'Conheça todas as possibilidades de automatizar suas tarefas manuais (e chatas).',
}

export default function RootLayout({ children }) {
  return (
    <html lang="pt-br" translate="no">
      <body className={inter.className}>{children}</body>
    </html>
  )
}

import './globals.css'

export const metadata = {
  title: 'Cake Factory — Bolos Artesanais que Encantam',
  description: 'Sobremesas artesanais que tornam qualquer momento mais especial.',
}

export default function RootLayout({ children }) {
  return (
    <html lang="pt-BR">
      <body>{children}</body>
    </html>
  )
}

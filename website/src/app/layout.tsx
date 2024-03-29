import './globals.css'

export const metadata = {
  title: 'MagicReviews | Home',
  description: 'Generated by create next app',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>
        <div>
          <h1>{metadata.title}</h1>
        </div>
        {children}
      </body>
    </html>
  )
}

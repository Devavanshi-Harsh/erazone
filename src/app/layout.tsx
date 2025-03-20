export const metadata = {
  title: 'Harsh - Java Full Stack Developer',
  description: 'Harsh\'s Portfolio, a Java and React developer',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body style={{backgroundColor:'#45474B'}}>{children}</body>
    </html>
  )
}

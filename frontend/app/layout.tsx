import type { Metadata } from 'next'
import { Roboto } from 'next/font/google'
import './globals.scss'
import Navbar from './Navbar'
import { Provider } from '../components/Providers';


const roboto = Roboto({
  weight: '400',
  subsets: ['latin'],
})

export const metadata: Metadata = {
  title: 'Library app',
  description: 'Future description',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (

    <html>
      <body className={roboto.className}>
        <Provider>
          <Navbar />
          {children}
        </Provider>
      </body>
    </html>
  )
}

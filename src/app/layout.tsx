import './globals.css'
import type { Metadata } from 'next'
import { Karla } from 'next/font/google'

const karla = Karla({
	weight: ['200', '300', '400', '600', '700', '800'],
	subsets: ['latin'],
})

export const metadata: Metadata = {
	title: 'Portfolio | Thays Lima, front-end developer',
	description: "Thays Lima's web developer portfolio",
}

export default function RootLayout({
	children,
}: {
	children: React.ReactNode
}) {
	return (
		<html lang="pt-br">
			<body className={karla.className}>{children}</body>
		</html>
	)
}

import '@/styles/lib/normalize/normalize.scss';
import '@/styles/globals.scss';
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'

const inter = Inter({
	subsets: ['latin'],
});

export const metadata: Metadata = {
	title: 'Protafolio',
	description: 'Generated by create next app',
}

export default function RootLayout({
	children,
}: {
	children: React.ReactNode
}) {
	return (
		<html lang="en">
		<body className="bg-sky-50 text-stone-900 dark:bg-primary dark:text-cyan-50">{children}</body>
		</html>
	)
}

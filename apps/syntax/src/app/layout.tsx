import clsx from 'clsx'
import { type Metadata } from 'next'
import { Inter } from 'next/font/google'
import localFont from 'next/font/local'

import { Providers } from '@/app/providers'
import { Layout } from '@/components/Layout'

import '@/styles/tailwind.css'

const inter = Inter({
    subsets: ['latin'],
    display: 'swap',
    variable: '--font-inter',
})

// Use local version of Lexend so that we can use OpenType features
const lexend = localFont({
    src: '../fonts/lexend.woff2',
    display: 'swap',
    variable: '--font-lexend',
})

export const metadata: Metadata = {
    title: {
        template: '%s - Docs',
        default: '@grahamcrackers/components - A Component Library',
    },
    description: 'A library of react components in a single package.',
}

export default function RootLayout({
    children,
}: {
    children: React.ReactNode
}) {
    return (
        <html
            lang="en"
            className={clsx(
                'h-full antialiased',
                inter.variable,
                lexend.variable,
            )}
            suppressHydrationWarning
        >
            <body className="flex min-h-full bg-white dark:bg-slate-900">
                <Providers>
                    <Layout>{children}</Layout>
                </Providers>
            </body>
        </html>
    )
}

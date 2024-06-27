'use client'

import clsx from 'clsx'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { useEffect, useState } from 'react'

import { Hero } from '@/components/Hero'
import { Logo, LogoIcon } from '@/components/Logo'
import { MobileNavigation } from '@/components/MobileNavigation'
import { Navigation } from '@/components/Navigation'
import { Search } from '@/components/Search'
import { ThemeSelector } from '@/components/ThemeSelector'
import { links } from '@/lib/links'

function GitHubIcon(props: React.ComponentPropsWithoutRef<'svg'>) {
    return (
        <svg aria-hidden="true" viewBox="0 0 16 16" {...props}>
            <path d="M8 0C3.58 0 0 3.58 0 8C0 11.54 2.29 14.53 5.47 15.59C5.87 15.66 6.02 15.42 6.02 15.21C6.02 15.02 6.01 14.39 6.01 13.72C4 14.09 3.48 13.23 3.32 12.78C3.23 12.55 2.84 11.84 2.5 11.65C2.22 11.5 1.82 11.13 2.49 11.12C3.12 11.11 3.57 11.7 3.72 11.94C4.44 13.15 5.59 12.81 6.05 12.6C6.12 12.08 6.33 11.73 6.56 11.53C4.78 11.33 2.92 10.64 2.92 7.58C2.92 6.71 3.23 5.99 3.74 5.43C3.66 5.23 3.38 4.41 3.82 3.31C3.82 3.31 4.49 3.1 6.02 4.13C6.66 3.95 7.34 3.86 8.02 3.86C8.7 3.86 9.38 3.95 10.02 4.13C11.55 3.09 12.22 3.31 12.22 3.31C12.66 4.41 12.38 5.23 12.3 5.43C12.81 5.99 13.12 6.7 13.12 7.58C13.12 10.65 11.25 11.33 9.47 11.53C9.76 11.78 10.01 12.26 10.01 13.01C10.01 14.08 10 14.94 10 15.21C10 15.42 10.15 15.67 10.55 15.59C13.71 14.53 16 11.53 16 8C16 3.58 12.42 0 8 0Z" />
        </svg>
    )
}

function StorybookIcon(props: React.ComponentPropsWithoutRef<'svg'>) {
    return (
        <svg viewBox="0 0 48 48" aria-hidden="true" {...props}>
            <path
                clip-rule="evenodd"
                d="M7 2.111a2.413 2.413 0 0 0-2.26 2.5l1.486 39.62a2.413 2.413 0 0 0 2.304 2.32l32.213 1.447.108.002a2.413 2.413 0 0 0 2.413-2.413V2.413A2.413 2.413 0 0 0 40.7.004l-2.649.167.194 5.539a.36.36 0 0 1-.583.295l-1.784-1.406-2.114 1.603a.36.36 0 0 1-.577-.302l.226-5.44L7.001 2.111Zm27.441 16.276c-.849.66-7.173 1.11-7.173.17.134-3.582-1.47-3.739-2.361-3.739-.847 0-2.273.256-2.273 2.175 0 1.956 2.084 3.06 4.53 4.356 3.474 1.841 7.678 4.07 7.678 9.677 0 5.374-4.366 8.342-9.935 8.342-5.748 0-10.77-2.325-10.204-10.387.223-.947 7.53-.722 7.53 0-.089 3.327.669 4.305 2.584 4.305 1.47 0 2.14-.81 2.14-2.175 0-2.066-2.172-3.284-4.67-4.687-3.38-1.898-7.36-4.133-7.36-9.26 0-5.118 3.52-8.53 9.801-8.53 6.283 0 9.713 3.36 9.713 9.753Z"
                fill-rule="evenodd"
                fill="#FE4685"
            ></path>
        </svg>
    )
}

function Header() {
    const [isScrolled, setIsScrolled] = useState(false)

    useEffect(() => {
        function onScroll() {
            setIsScrolled(window.scrollY > 0)
        }
        onScroll()
        window.addEventListener('scroll', onScroll, { passive: true })
        return () => {
            window.removeEventListener('scroll', onScroll)
        }
    }, [])

    return (
        <header
            className={clsx(
                'sticky top-0 z-50 flex flex-none flex-wrap items-center justify-between bg-white px-4 py-5 shadow-md shadow-slate-900/5 transition duration-500 sm:px-6 lg:px-8 dark:shadow-none',
                isScrolled
                    ? 'dark:bg-slate-900/95 dark:backdrop-blur dark:[@supports(backdrop-filter:blur(0))]:bg-slate-900/75'
                    : 'dark:bg-transparent',
            )}
        >
            <div className="mr-6 flex lg:hidden">
                <MobileNavigation />
            </div>
            <div className="relative flex flex-grow basis-0 items-center">
                <Link href="/" aria-label="Home page">
                    <LogoIcon className="h-9 w-9 lg:hidden" />
                    <Logo className="hidden h-9 w-auto fill-slate-700 lg:block dark:fill-sky-100" />
                </Link>
            </div>
            <div className="-my-5 mr-6 sm:mr-8 md:mr-0">
                <Search />
            </div>
            <div className="relative flex basis-0 justify-end gap-6 sm:gap-8 md:flex-grow">
                <ThemeSelector className="relative z-10" />
                <Link
                    href={links.storybook}
                    className="group"
                    aria-label="GitHub"
                >
                    <StorybookIcon className="h-6 w-6 fill-slate-400 group-hover:fill-slate-500 dark:group-hover:fill-slate-300" />
                </Link>
                <Link href={links.github} className="group" aria-label="GitHub">
                    <GitHubIcon className="h-6 w-6 fill-slate-400 group-hover:fill-slate-500 dark:group-hover:fill-slate-300" />
                </Link>
            </div>
        </header>
    )
}

export function Layout({ children }: { children: React.ReactNode }) {
    const pathname = usePathname()
    const isHomePage = pathname === '/'

    return (
        <div className="flex w-full flex-col">
            <Header />

            {isHomePage && <Hero />}

            <div className="relative mx-auto flex w-full max-w-8xl flex-auto justify-center sm:px-2 lg:px-8 xl:px-12">
                <div className="hidden lg:relative lg:block lg:flex-none">
                    <div className="absolute inset-y-0 right-0 w-[50vw] bg-slate-50 dark:hidden" />
                    <div className="absolute bottom-0 right-0 top-16 hidden h-12 w-px bg-gradient-to-t from-slate-800 dark:block" />
                    <div className="absolute bottom-0 right-0 top-28 hidden w-px bg-slate-800 dark:block" />
                    <div className="sticky top-[4.75rem] -ml-0.5 h-[calc(100vh-4.75rem)] w-64 overflow-y-auto overflow-x-hidden py-16 pl-0.5 pr-8 xl:w-72 xl:pr-16">
                        <Navigation />
                    </div>
                </div>
                {children}
            </div>
        </div>
    )
}

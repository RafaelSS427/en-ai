import Head from 'next/head'
import React, { FC, Fragment, PropsWithChildren } from 'react'
import { NavbarApp } from '@/components'
import { Inter } from 'next/font/google'

const inter = Inter({ subsets: ['latin'] })

interface Props extends PropsWithChildren {

}

export const ClientLayout: FC<Props> = ({ children }) => {
    return (
        <Fragment>
            <Head>
                <title>EN-AI</title>
                <meta charSet="utf-8" />
                <meta name="viewport" content="width=device-width" />
            </Head>

            <NavbarApp />

            <main className={`container mx-auto max-w-screen-md px-6 mt-4 ${inter.className}`}>
                { children }
            </main>


            {/* Here will go the footer */}

        </Fragment>
    )
}
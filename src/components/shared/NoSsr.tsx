import dynamic from 'next/dynamic'
import { PropsWithChildren } from 'react'

const NoSsr = ({ children }:PropsWithChildren) => <>{children}</> 

export default dynamic(async() => await NoSsr, {
    ssr: false
})
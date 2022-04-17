import Head from "next/head"
import { useRouter } from "next/dist/client/router"
const Layout = ({children}) =>{
    const router = useRouter()
    return (
        <>
            <Head>
                <title>{router.pathname}</title>
            </Head>
            {children}
        </>
    )
}

export default Layout
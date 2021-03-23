
import { GeistProvider, CssBaseline } from '@geist-ui/react'

export default function Application({ Component, pageProps }) {
    return (
        <GeistProvider>
            <CssBaseline />
            <Component {...pageProps} />
        </GeistProvider>
        )
    }


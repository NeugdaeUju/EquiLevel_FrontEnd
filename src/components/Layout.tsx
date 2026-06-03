import Header from './Header.tsx';
import Footer from './Footer.tsx'

export default function Layout({children}: {children : React.ReactNode}) {
    return (
        <div className='layout'>
            <Header />
            <main className='content'>{children}</main>
            <Footer />
        </div>
    )
}
import { Link } from 'react-router-dom'

function Home() {
    return (
        <main>
            <h1>Home pages</h1>
            <div>
            <Link to='/especes'>Especes</Link>
            </div>
        </main>
    )
}

export default Home;
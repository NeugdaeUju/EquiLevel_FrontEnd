import './assets/scss/App.scss'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Header from './components/Header.tsx';
import Footer from './components/Footer.tsx';
import LogIn from './pages/LogIn.tsx';

function App() {
  return (
    <>
      <Header />
      <BrowserRouter>
      <Routes>
        <Route path="/" element={<LogIn />} />
      </Routes>
      </BrowserRouter>
      <Footer />
    </>
  )
}

export default App

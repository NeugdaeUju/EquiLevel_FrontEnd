import './assets/scss/App.scss'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Layout from './components/Layout.tsx';
import LogIn from './pages/LogIn.tsx';
import SignUp from './pages/SignUp.tsx';
import Home from './pages/Home.tsx';
import HeadBandEdit from "./components/HeadbandEdit";

function App() {
  return (
    <>
      <BrowserRouter>
        <HeadBandEdit />
        <Layout>
          <Routes>
            <Route path='/' element={<Home />} />
            <Route path="/login" element={<LogIn />} />
            <Route path="/signup" element={<SignUp />} />
          </Routes>
        </Layout>
      </BrowserRouter>
    </>
  )
}

export default App

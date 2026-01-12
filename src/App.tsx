import './assets/scss/App.scss'
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { useSelector } from 'react-redux';
import type { RootState} from './store/store.ts'
import Layout from './components/Layout.tsx';
import LogIn from './pages/LogIn.tsx';
import SignUp from './pages/SignUp.tsx';
import Home from './pages/Home.tsx';
import HeadBandEdit from "./components/HeadbandEdit";

function App() {
  const token = useSelector((state: RootState) => state.auth.token)
  return (
    <>
      <BrowserRouter>
        {token && <HeadBandEdit />}
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

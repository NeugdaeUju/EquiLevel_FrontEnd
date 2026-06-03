<<<<<<< HEAD

function App() {

  return (
    <>
      <h1>Ecurie - Equideow Manager</h1>
=======
import './assets/scss/App.scss'
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { useSelector } from 'react-redux';
import type { RootState} from './store/store.ts'
import Layout from './components/Layout.tsx';
import LogIn from './pages/LogIn.tsx';
import SignUp from './pages/SignUp.tsx';
import Home from './pages/Home.tsx';
import HeadBandEdit from "./components/HeadbandEdit";
import Especes from './pages/Especes.tsx';

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
            <Route path="/especes" element={<Especes />} />
          </Routes>
        </Layout>
      </BrowserRouter>
>>>>>>> 0f5643af688aef1e01968bac47603c3416633aa5
    </>
  )
}

export default App

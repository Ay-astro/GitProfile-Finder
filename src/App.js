import './index.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './component/pages/Home';
import About from './component/pages/About';
import NotfoundPage from './component/pages/NotfoundPage';
import Navbar from './component/layout/Navbar';
import Footer from './component/layout/Footer';
import { GithubProvider } from './component/context/Github/GithubContext';
import { AlertProvider } from './Alert/AlertContext';
import Alert from './component/users/Alert';
import User from './component/users/User';

function App() {
  return (
    <GithubProvider>
    <AlertProvider>
    <Router>
      <div className='flex flex-col justify-between h-screen'>

          <Navbar />
          <main className='container mx-auto px-3 pb-12'>
            <Alert/>
            <Routes>
              <Route exact path='/' element={<Home/>} />
              <Route path='/about' element={<About/>} />
              <Route path='/notfound' element={<NotfoundPage/>} />
              <Route path='/user/:login' element={<User/>} />
              <Route path='/*' element={<NotfoundPage/>} />
            </Routes>
          </main >
          <Footer />
      </div>
    </Router>
    </AlertProvider>
    </GithubProvider>
  );
}

export default App;

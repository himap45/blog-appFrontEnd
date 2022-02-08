import Home from './components/home/Home';
import './App.css';
import Article from './components/article/Article';
import Login from './components/login/Login';
import Articlelist from './components/article/Articlelist';
import {BrowserRouter as Router,Routes,Route} from 'react-router-dom';
import Error from './components/error/Error';
import Header from './components/header/Header';
import Signup from './components/signup/Signup';


function App() {
  return (
   
    
   <Router>
     <>
     <Header />
    <Routes>
      <Route path='/' element={<Home />} />
      <Route path="/home" element={<Home />} />
      <Route path='/login' element={<Login />} />
      <Route path='/signup' element={<Signup />} />
      <Route path='/article-list' element={<Articlelist />} />
      <Route path='/article/:name' element={<Article />} />
      <Route path='*' element={<Error />} />


    </Routes>
    </>
    </Router>
   
  );
}

export default App;

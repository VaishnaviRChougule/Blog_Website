
import './App.css';
import About from './components/About';
import Home from './components/Home';
import Nav from './components/Nav';
import {BrowserRouter as Router, Routes, Route,} from 'react-router-dom';
import Services from './components/Services';
import Contact from './components/Contact';
import Blog from './components/Blog';
import Footer from './components/Footer';
import Write from './components/Wrtie';
import Settings from './components/Settings';
import SinglePage from './components/SinglePage';
import {CartProvider} from 'react-use-cart'




function App() {
  const user = false;
  return (
 <>
<CartProvider>
<Router>

 <Nav/>
 

<Routes>

  <Route path="/" element={<Home/>}/>
  <Route path="/about" element={<About/>}/>
  <Route path="/services" element={<Services/>}/>
  <Route path="/contact" element={<Contact/>}/>
  <Route path="/blog"element={<Blog/>}/>
  <Route path="/write" element={<Write/>}/>
  <Route path="/settings"element={<Settings/>}/>
  <Route path="/login"element={<Home/>}/>
  <Route path="/register"element={<Home/>}/>
  <Route path="/singlepage/:id"element={<SinglePage/>}/>
  
  

 </Routes>
 <Footer />
 </Router>
 </CartProvider>
 </>
  );
}

export default App;

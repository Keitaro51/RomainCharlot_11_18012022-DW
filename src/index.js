import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'

import Header from './components/header/header.jsx';
import Home from './pages/Home';
import HousingSheet from './pages/HousingSheet';
import NotFound from './pages/notfound/NotFound'
import About from './pages/about/About'
import Footer from './components/footer/footer.jsx';

import './style/variable.css';
import './style/normalize.css';
import './style/main.css'

import reportWebVitals from './reportWebVitals';

ReactDOM.render(
    <React.StrictMode>
        <Router>
        <Header />
            <Routes>
                <Route path="/" element={<Home />}/>
                <Route path="housing/:id" element={<HousingSheet />}/>   
                <Route path="about" element={<About />}/>  
                <Route path="*" element={<NotFound />}/>            
            </Routes>
        </Router>
        <Footer />
    </React.StrictMode>,
    document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();

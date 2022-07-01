import React, {useEffect} from 'react';
import './App.scss';
import Navigation from "./Navigation";
import Main from "./Main";
import {useLocation} from "react-router-dom";

const App = () => {
    const location = useLocation()

    useEffect(() => {
        let navbar = document.getElementById('navbar');
        if (location.pathname === '/photography') {
            navbar.classList.remove('navbar-dark');
            navbar.classList.add('navbar-light');
            navbar.style.backgroundColor = 'white';
            document.body.style.backgroundColor = 'white';
        } else {
            if (window.matchMedia('(prefers-color-scheme: dark)').matches) {
                navbar.classList.add('navbar-dark');
                navbar.classList.remove('navbar-light');
                navbar.style.backgroundColor = '#111';
                document.body.style.backgroundColor = '#111';
            }
        }
    }, [location]);

    return (
        <div className='app mt-5 mb-5'>
            <Navigation/>
            <Main/>
        </div>
    );

};

export default App;
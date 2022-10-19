import {useRef, useState, useEffect, useContext} from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Footer from './template-components/Footer.js';
import "../App.css";
import Header from './template-components/Header.js';
import Desk from '../../lib/images/Desk.png'


export const Home = () => {

    return (

        <div className="page-container">
            <Header />
            <div className="content-wrap">
                <div className='homePage'>
                    <button class='btn btn-primary btn-lg' style={{marginRight:'10px', width: '10%'}}>My desk</button>
                    <a href='/user' style={{ width: '10%'}}>
                        <button class='btn btn-primary btn-lg' style={{ width: '100%'}}>Reserve desk</button>
                    </a>
                </div>
            </div>
            <Footer />
        </div>

    )
}

export default Home;
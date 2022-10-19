import {useRef, useState, useEffect, useContext} from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Footer from '../../../template-components/Footer.js';
import "../../../../App.css";
import Header from '../../../template-components/Header';
import "../../../user-management/katovi.css"
import React from 'react';
import Desk from '../../../../../lib/images/Desk.png';

export const FirtsFloor = () => {
    const [show, setShow]=React.useState(false);
    const [show2, setShow2]=React.useState(false);
    const [show3, setShow3]=React.useState(false);
    const [show4, setShow4]=React.useState(false);
    return (
        <div className="page-container">
            <Header />
            <div className="content-wrap">
                <h1 className="prviKatNaslov">Prvi kat</h1>
                <div className='container text-center'>
                    <div className='row align-items-center'>
                        <div className='col mb-auto mb-auto mx-auto'>
                            <div className='kartica2'>
                            {
                                show?
                                <div class="card text-bg-light mb-3">
                                    <div class="card-header">
                                        Header
                                        <button onClick={()=>setShow(false)} type="button" class="btn-close" aria-label="Close" style={{ float: 'right' }}></button>
                                    </div>
                                    <div class="card-body">
                                        <h5 class="card-title">Primary card title</h5>
                                        <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                                    </div>
                                </div>:null
                            }
                            </div>
                        </div>
                        <div className='col mb-auto mb-auto mx-auto'>
                            <button onClick={()=>setShow(true)} type="button" class="btn btn-success btn-lg" style={{ height: 75, width: 150, fontSize: 20, marginBottom: '150px' }}>
                                <img src={Desk} height="75%"></img>
                            </button>
                        </div>
                        <div className='col mb-auto mb-auto mx-auto'>
                            <button onClick={()=>setShow2(true)} type="button" class="btn btn-success btn-lg" style={{ height: 75, width: 150, fontSize: 20, marginBottom: '150px' }}>Drugi stol</button>
                        </div>
                        <div className='col mb-auto mb-auto mx-auto'>
                        
                            <div className='kartica2'>
                            {
                                show2?
                                <div class="card text-bg-light mb-3">
                                    <div class="card-header">
                                        Header
                                        <button onClick={()=>setShow2(false)} type="button" class="btn-close" aria-label="Close" style={{ float: 'right' }}></button>
                                    </div>
                                    <div class="card-body">
                                        <h5 class="card-title">Primary card title</h5>
                                        <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                                    </div>
                                </div>:null
                            }
                            </div>
                        </div>
                    </div>
                    <div className='row align-items-center'>
                        <div className='col mb-auto mb-auto mx-auto'>
                        
                            <div className='kartica2'>
                            {
                                show3?
                                <div class="card text-bg-light mb-3">
                                    <div class="card-header">
                                        Header
                                        <button onClick={()=>setShow3(false)} type="button" class="btn-close" aria-label="Close" style={{ float: 'right' }}></button>
                                    </div>
                                    <div class="card-body">
                                        <h5 class="card-title">Primary card title</h5>
                                        <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                                    </div>
                                </div>:null
                            }
                            </div>
                        </div>
                        <div className='col mb-auto mb-auto mx-auto'>
                            <button onClick={()=>setShow3(true)} type="button" class="btn btn-success btn-lg" style={{ height: 75, width: 150, fontSize: 20, marginBottom: '150px' }}>Treći stol</button>
                        </div>
                        <div className='col mb-auto mb-auto mx-auto'>
                            <button onClick={()=>setShow4(true)} type="button" class="btn btn-success btn-lg" style={{ height: 75, width: 150, fontSize: 20, marginBottom: '150px' }}>Četvrti stol</button>
                        </div>
                        <div className='col mb-auto mb-auto mx-auto'>
                            <div className='kartica2'>
                            {
                                show4?
                                <div class="card text-bg-light mb-3">
                                    <div class="card-header">
                                        Header
                                        <button onClick={()=>setShow4(false)} type="button" class="btn-close" aria-label="Close" style={{ float: 'right' }}></button>
                                    </div>
                                    <div class="card-body">
                                        <h5 class="card-title">Primary card title</h5>
                                        <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                                    </div>
                                </div>:null
                            }
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <Footer />
        </div>
    )

}

export default FirtsFloor;
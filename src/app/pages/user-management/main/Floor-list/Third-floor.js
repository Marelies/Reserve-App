import {useRef, useState, useEffect, useContext} from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Footer from '../../../template-components/Footer.js';
import "../../../../App.css";
import Header from '../../../template-components/Header';
import "../../../user-management/katovi.css"
import React from 'react';
import Desk from '../../../../../lib/images/Desk.png';
import TlocrtStolova2 from '../../../../../lib/images/TlocrtStolova2.png';
import { Modal } from 'bootstrap';

export const ThirdFloor = () => {
    const [show, setShow]=React.useState(false);
    const [Tekst, setTekst]=React.useState("Informacije o prvom stolu");
    const [naslov, setNaslov]=React.useState("Desk 1")
    return (
        <div className="page-container">
            <Header />
            <div className="content-wrap">
                <div className='prviKatNaslov'>
                    <h1>Third floor</h1>
                </div>
                <div className='tlocrtContainer'>
                    <img src={TlocrtStolova2} className='tlocrt'></img>
                </div>
                <div className='container-fluid text-center'>
                    <div className='row mt-5 mb-1 justify-content-center'>
                        <div className='col-2'>
                            <button onClick={()=>setShow(true) + setTekst("Information about frist desk") + setNaslov("Desk 1")}
                            type="button" class="btn btn-default btn-lg" style={{float:'right', width:'6vw'}}>Desk 1</button>
                        </div>
                        <div className='col-2'>
                            <button onClick={()=>setShow(true) + setTekst("Information about second desk") + setNaslov("Desk 2")}
                            type="button" class="btn btn-default btn-lg" style={{float:'left', width:'6vw'}}>Desk 2</button>
                        </div>
                        <div className='col-2' style={{borderLeft: '5px solid white'}}>
                            <button onClick={()=>setShow(true) + setTekst("Information about ninth desk") + setNaslov("Desk 9")}
                            type="button" class="btn btn-default btn-lg" style={{float:'right', width:'6vw'}}>Desk 9</button>
                        </div>
                        <div className='col-2'>
                        <button onClick={()=>setShow(true) + setTekst("Information about tenth desk") + setNaslov("Desk 10")}
                        type="button" class="btn btn-default btn-lg" style={{float:'left', width:'6vw'}}>Desk 10</button>
                        </div>
                    </div>
                    <div className='row mb-1 justify-content-center'>
                        <div className='col-2'>
                            <button onClick={()=>setShow(true) + setTekst("Information about third desk") + setNaslov("Desk 3")}
                            type="button" class="btn btn-default btn-lg" style={{float:'right', width:'6vw'}}>Desk 3</button>
                        </div>
                        <div className='col-2'>
                            <button onClick={()=>setShow(true) + setTekst("Information about fourth desk") + setNaslov("Desk 4")}
                            type="button" class="btn btn-default btn-lg" style={{float:'left', width:'6vw'}}>Desk 4</button>
                        </div>
                        <div className='col-2' style={{borderLeft: '5px solid white'}}>
                            <button onClick={()=>setShow(true) + setTekst("Information about eleventh desk") + setNaslov("Desk 11")}
                            type="button" class="btn btn-default btn-lg" style={{float:'right', width:'6vw'}}>Desk 11</button>
                        </div>
                        <div className='col-2'>
                            <button onClick={()=>setShow(true) + setTekst("Information about twelwe desk")}
                            type="button" class="btn btn-default btn-lg" style={{float:'left',width:'6vw'}}>Desk 12</button>
                        </div>
                    </div>
                    <div className='row mt-5 mb-1 justify-content-center'>
                        <div className='col-2'>
                            <button onClick={()=>setShow(true) + setTekst("Information about fifth desk") + setNaslov("Desk 5")}
                            type="button" class="btn btn-default btn-lg" style={{float:'right', width:'6vw'}}>Desk 5</button>
                        </div>
                        <div className='col-2'>
                            <button onClick={()=>setShow(true) + setTekst("Information about sixth desk") + setNaslov("Desk 6")}
                            type="button" class="btn btn-default btn-lg" style={{float:'left', width:'6vw'}}>Desk 6</button>
                        </div>
                        <div className='col-2' style={{borderLeft: '5px solid white'}}>
                            <button onClick={()=>setShow(true) + setTekst("Information about tirthteen desk") + setNaslov("Desk 13")}
                            type="button" class="btn btn-default btn-lg" style={{float:'right', width:'6vw'}}>Desk 13</button>
                        </div>
                        <div className='col-2'>
                            <button onClick={()=>setShow(true) + setTekst("Information about fourtheen desk") + setNaslov("Desk 14")}
                            type="button" class="btn btn-default btn-lg" style={{float:'left',width:'6vw'}}>Desk 14</button>
                        </div>
                    </div>
                    <div className='row mb-1 justify-content-center'>
                        <div className='col-2'>
                            <button onClick={()=>setShow(true) + setTekst("informacije o sedmom stolu") + setNaslov("Desk 7")}
                            type="button" class="btn btn-default btn-lg" style={{float:'right', width:'6vw'}}>Desk 7</button>
                        </div>
                        <div className='col-2'>
                            <button onClick={()=>setShow(true) + setTekst("informacije o osmom stolu") + setNaslov("Desk 8")}
                            type="button" class="btn btn-default btn-lg" style={{float:'left', width:'6vw'}}>Desk 8</button>
                        </div>
                        <div className='col-2' style={{borderLeft: '5px solid white'}}>
                            <button onClick={()=>setShow(true) + setTekst("informacije o petnaestom stolu") + setNaslov("Desk 15")}
                            type="button" class="btn btn-default btn-lg" style={{float:'right', width:'6vw'}}>Desk 15</button>
                        </div>
                        <div className='col-2'>
                            <button onClick={()=>setShow(true) + setTekst("informacije o sesnaestom stolu") + setNaslov("Desk 16")}
                            type="button" class="btn btn-default btn-lg" style={{float:'left',width:'6vw'}}>Desk 16</button>
                        </div>
                    </div>
                </div>
                <div className='kartica2'>
                    {
                    show? 
                    <div class="card text-bg-light mb-3">
                        <div class="card-header">
                             Your choice
                            <button onClick={()=>setShow(false)} type="button" class="btn-close" aria-label="Close" 
                            style={{ float: 'right' }}></button>
                        </div>
                        <div class="card-body">
                            <h5 class="card-title">{naslov}</h5> 
                            <p class="card-text">{Tekst}</p>
                            <hr/>
                            <button type='submit' class="btn btn-default" data-bs-toggle="modal" data-bs-target="#staticBackdrop" style={{float: 'right'}}>Reserve {naslov}</button>
                        </div>
                    </div>:null
                    }
                </div>
                <div class="modal fade" id="staticBackdrop" data-bs-backdrop="static" tabindex="-1" aria-labelledby="staticBackdropLabel" aria-hidden="true">
                    <div class="modal-dialog modal-dialog-centered">
                        <div class="modal-content">
                            <div class="modal-header">
                                <h5>{naslov}</h5>
                                <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                            </div>
                            <div class="modal-body">
                                <p>Are you sure you want to reserve {naslov}?</p>
                            </div>
                            <div class="modal-footer">
                                <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">No</button>
                                <a href='/success'>
                                    <button type="submit" class="btn btn-primary">Yes</button>
                                </a>
                            </div>
                        </div>
                    </div>
                </div>  
            </div>
            <Footer />
        </div>
    )
}
export default ThirdFloor;
import {useRef, useState, useEffect, useContext} from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Footer from '../../template-components/Footer.js';
import "../../../App.css";
import Header from '../../template-components/Header.js';
import "../UserManagement.css";


export const UserManagement = () => {

    return (

        <div className="page-container">
            <Header />
            <div className="content-wrap">
                <div className="container text-center">
                    <div className="cards">
                        <div className="kartica mx-auto">
                            <a href="/fourth" className='linkKartica'>
                                <div class="card text-bg-primary mb-5 mt-5">
                                    <div class="card-body">
                                        <p class="tekst">Broj stolova:</p>
                                        <p class="tekst">Broj slobodnih stolova:</p>
                                        <p class="tekst">Broj zauzetih stolova:</p>
                                    </div>
                                    <div class="card-footer">
                                        <h1 class="velikiTekst">4. Kat</h1>
                                    </div>
                                </div>
                            </a>
                        </div>
                        <div className="kartica mx-auto">
                            <a href="/third" className='linkKartica'>
                                <div class="card text-bg-success mb-5">
                                    <div class="card-body">
                                        <p class="tekst">Broj stolova:</p>
                                        <p class="tekst">Broj slobodnih stolova:</p>
                                        <p class="tekst">Broj zauzetih stolova:</p>
                                    </div>
                                    <div class="card-footer">
                                        <h5 class="velikiTekst">3. Kat</h5>
                                    </div>
                                </div>
                            </a>
                        </div>
                        <div className="kartica mx-auto">
                            <a href="/second" className='linkKartica'>
                                <div class="card text-bg-danger mb-5">
                                    <div class="card-body">
                                        <p class="tekst">Broj stolova:</p>
                                        <p class="tekst">Broj slobodnih stolova:</p>
                                        <p class="tekst">Broj zauzetih stolova:</p>
                                    </div>
                                    <div class="card-footer">
                                        <h5 class="velikiTekst">2. Kat</h5>
                                    </div>
                                </div>
                            </a>
                        </div>
                        <div className="kartica mx-auto">
                            <a href="/first" className='linkKartica'>
                                <div class="card text-bg-warning mb-5">
                                    <div class="card-body">
                                        <p class="tekstCrni">Broj stolova:</p>
                                        <p class="tekstCrni">Broj slobodnih stolova:</p>
                                        <p class="tekstCrni">Broj zauzetih stolova:</p>
                                    </div>
                                    <div class="card-footer">
                                        <h5 class="velikiTekstCrni">1. Kat</h5>
                                    </div>
                                </div>
                            </a>
                        </div>
                    </div>
                </div>
            </div>
            <Footer />
        </div>

    )
}

export default UserManagement;
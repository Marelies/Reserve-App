import {useRef, useState, useEffect, useContext} from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Footer from '../../../template-components/Footer.js';
import "../../../../App.css";
import Header from '../../../template-components/Header';
import "../../../user-management/katovi.css"
import React from 'react';
import Desk from '../../../../../lib/images/Desk.png';

export const FourthFloor = () => {

    return(
        

    <div className="page-container">
        <Header />
        <div className="content-wrap">
        
<button type="button" class="btn btn-primary" data-bs-toggle="modal" data-bs-target="exampleModal">
  Launch demo modal
</button>


<div class="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
  <div class="modal-dialog">
    <div class="modal-content">
      <div class="modal-header">
        <h5 class="modal-title" id="exampleModalLabel">Modal title</h5>
        <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
      </div>
      <div class="modal-body">
        ...
      </div>
      <div class="modal-footer">
        <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
        <button type="button" class="btn btn-primary">Save changes</button>
      </div>
    </div>
  </div>
</div>
        </div>
        <Footer />
    </div>

)
}
export default FourthFloor;
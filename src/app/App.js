
import './App.css';
import React, { Component } from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import {    BrowserRouter,  Routes, Route} from 'react-router-dom';
import Login from '../app/pages/Login';
import Home  from '../app/pages/Home';
import AdminChecklist from '../app/pages/admin-checklist/main/AdminChecklist';
import UserManagement from '../app/pages/user-management/main/UserManagement'
import FirstFloor from '../app/pages/user-management/main/Floor-list/First-floor';
import SecondFloor from '../app/pages/user-management/main/Floor-list/Second-floor';
import ThirdFloor from '../app/pages/user-management/main/Floor-list/Third-floor';
import FourthFloor from '../app/pages/user-management/main/Floor-list/Fourth-floor';
import Success from '../app/pages/Success';



export class App extends Component {

    render(){
  return (
             <BrowserRouter>
            <Routes>
            <Route path="/" element={<Login/>} exact />
            <Route path="/home" element={<Home/>}/>
            <Route path="/admin" element={<AdminChecklist/>}/>
            <Route path="/user" element={<UserManagement/>}/>
            <Route path="/first" element={<FirstFloor/>}/>
            <Route path="/second" element={<SecondFloor/>}/>
            <Route path="/third" element={<ThirdFloor/>}/>
            <Route path="/fourth" element={<FourthFloor/>}/>
            <Route path="/success" element={<Success/>}/>
          
            </Routes>
            </BrowserRouter>
  );
    }
}

export default App;

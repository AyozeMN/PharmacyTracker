import React, {Component} from 'react';
import {BrowserRouter, Routes, Route} from 'react-router-dom';
import { NavBar } from './NavBar';

import Routing from './Routing';

import PharmacyUserView from '../pharmacies/pharmacyUserView';

class RouterComponent extends Component {
  render() {
    return (
      <BrowserRouter>
        {/** MENU **/}
        <NavBar />
        
        <Routes>
            <Route path={Routing.pharmacies} element={<PharmacyUserView />}/>
        </Routes>
        
        {/** MODALS **/}
        </BrowserRouter>
    );
  }
}

export default RouterComponent;

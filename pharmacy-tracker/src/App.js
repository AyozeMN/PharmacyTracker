import './App.css';
import  { PharmaciesList } from './pharmacies/PharmaciesList';
import { dataProvider } from './firebase/firebaseConfig.js';
import { Login } from './login/Login';

import * as React from "react";
import { Admin, Resource } from 'react-admin';


const App = () => (
    <Admin dataProvider={dataProvider}>
        <Resource name="pharmacies" list={PharmaciesList} />

    </Admin>
);

export default App;
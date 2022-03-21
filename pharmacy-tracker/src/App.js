import './App.css';
import  { PharmaciesList } from './pharmacies/PharmaciesList';
import { Login } from './login/login'
import { dataProvider } from './firebase/firebaseConfig.js';

import * as React from "react";
import { Admin, Resource } from 'react-admin';


const App = () => (
    <Admin dataProvider={dataProvider}>
        <Resource name="pharmacies" list={PharmaciesList} />
        <Resource name="login" icon={Login}></Resource>
    </Admin>
);

export default App;
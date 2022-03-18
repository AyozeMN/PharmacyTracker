import './App.css';
import { dataProvider } from './firebase/firebaseConfig.js';
import * as React from "react";
import { Admin, Resource } from 'react-admin';


const App = () => (
    <Admin dataProvider={dataProvider}>
        <Resource name="pharmacies" list={PharmaciesList} />
    </Admin>
);

export default App;
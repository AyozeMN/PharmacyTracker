import './App.css';
import { dataProvider } from './firebase/firebaseConfig.js';
import * as React from "react";
import { Admin, Resource } from 'react-admin';
import { PharmacyListView } from './pharmacies/pharmacyList';
import { PharmacyCreateView } from './pharmacies/pharmacyCreate';
import { PharmacyEditView } from './pharmacies/pharmacyEdit';

const App = () => (    
    <Admin dataProvider={dataProvider}>
        <Resource name="pharmacies" create={PharmacyCreateView} edit={PharmacyEditView} list={PharmacyListView} />
    </Admin>
);

export default App;
import './App.css';
import  { PharmaciesList } from './pharmacies/PharmaciesList';
import { dataProvider , authProvider} from './firebase/firebaseConfig.js';
import CustomLoginPage from './login/customLoginPage';

import * as React from "react";
import { Admin, Resource} from 'react-admin';

// To get the currently logged in user run const user = await authProvider.checkAuth()

const App = () => (
    <Admin loginPage= {CustomLoginPage} dataProvider={dataProvider} authProvider={authProvider}>
        <Resource name="pharmacies" list={PharmaciesList} />
    </Admin>
);

export default App;
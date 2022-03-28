import './App.css';
import { PharmacyListView } from './pharmacies/pharmacyList';
import { PharmacyCreateView } from './pharmacies/pharmacyCreate';
import { PharmacyEditView } from './pharmacies/pharmacyEdit';
import { dataProvider , authProvider} from './firebase/firebaseConfig.js';
import CustomLoginPage from './login/customLoginPage';

import * as React from "react";
import { Admin, Resource} from 'react-admin';

// To get the currently logged in user run const user = await authProvider.checkAuth()

const App = () => (
    <Admin loginPage= {CustomLoginPage} dataProvider={dataProvider} authProvider={authProvider}>
      <Resource name="pharmacies" create={PharmacyCreateView} edit={PharmacyEditView} list={PharmacyListView} />
    </Admin>
);

export default App;
import './App.css';
import * as React from "react";

import { dataProvider , authProvider} from './firebase/firebaseConfig.js';
import CustomLoginPage from './login/customLoginPage';

import { PharmacyListView } from './pharmacies/pharmacyList';
import { PharmacyCreateView } from './pharmacies/pharmacyCreate';
import { PharmacyEditView } from './pharmacies/pharmacyEdit';

import { Admin, Resource} from 'react-admin';
import { ProductListView } from './products/productList';
import { ProductEditView } from './products/productEdit';
import { ProductCreateView } from './products/productCreate';

// To get the currently logged in user run const user = await authProvider.checkAuth()

const App = () => (
    <Admin loginPage= {CustomLoginPage} dataProvider={dataProvider} authProvider={authProvider}>
      <Resource name="pharmacies" create={PharmacyCreateView} edit={PharmacyEditView} list={PharmacyListView} />
      <Resource name="products" create={ProductCreateView} edit={ProductEditView} list={ProductListView} />
    </Admin>
);

export default App;
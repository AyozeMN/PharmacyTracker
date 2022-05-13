import './App.css';
import * as React from "react";

import { dataProvider, authProvider } from './firebase/firebaseConfig.js';
import CustomLoginPage from './login/customLoginPage';

import { PharmacyListView } from './pharmacies/pharmacyList';
import { PharmacyCreateView } from './pharmacies/pharmacyCreate';
import { PharmacyEditView } from './pharmacies/pharmacyEdit';

import { Admin, Resource } from 'react-admin';
import { ProductListView } from './products/productList';
import { ProductEditView } from './products/productEdit';
import { ProductCreateView } from './products/productCreate';

import { UserCreateView } from './users/usersCreate';
import { UserListView } from './users/usersList';
import { UserEditView } from './users/usersEdit';

import LocalPharmacyIcon from '@material-ui/icons/LocalPharmacy';
import AddShoppingCartIcon from '@material-ui/icons/AddShoppingCart';
import AccountBox from '@material-ui/icons/AccountBox';

// To get the currently logged in user run const user = await authProvider.checkAuth()

const App = () => (
  <Admin loginPage={CustomLoginPage} dataProvider={dataProvider} authProvider={authProvider}>
    <Resource name="pharmacies" icon={LocalPharmacyIcon} create={PharmacyCreateView} edit={PharmacyEditView} list={PharmacyListView} />
    <Resource name="products" icon={AddShoppingCartIcon} create={ProductCreateView} edit={ProductEditView} list={ProductListView} />
    <Resource name="users" icon={AccountBox} create={UserCreateView} edit={UserEditView} list={UserListView} />
    <Resource name="categories" />
  </Admin>
);

export default App;
import React from 'react';

import { List, Datagrid, TextField, EditButton, DeleteButton } from 'react-admin';


const CreateTitle = () => {
    return <span>Product list</span>;
};

export const ProductListView = (props) => {
    return (
        <List {...props}
        title={<CreateTitle/>}>
            <Datagrid>
                <TextField source="id" label="ID"/>
                <TextField source="name" label="Name" />
                <TextField source="description" label="Description" />
                <EditButton  label="" />
                <DeleteButton label=""/>
            </Datagrid>
        </List>
    );
};


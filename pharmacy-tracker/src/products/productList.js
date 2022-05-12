import React from 'react';
import { List, Datagrid, TextField, EditButton, DeleteButton, ReferenceField, ChipField } from 'react-admin';

const CreateTitle = () => {
    return <span>Product list</span>;
};

export const ProductListView = (props) => {
    return (
        <List {...props}
            title={<CreateTitle />}>
            <Datagrid>
                <TextField source="id" label="ID" />
                <TextField source="name" label="Name" />
                <TextField source="description" label="Description" />
                <TextField source="category" label="Description" />
                <ReferenceField label="Category" source="category" reference="categories" link="show">
                    <ChipField source="name" />
                </ReferenceField>
                <EditButton label="" />
                <DeleteButton label="" />
            </Datagrid>
        </List>
    );
};

export default ProductListView;
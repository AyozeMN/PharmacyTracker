import React from 'react';
import { List, Datagrid, TextField, EditButton, DeleteButton } from 'react-admin';

const CreateTitle = () => {
    return <span>Users list</span>;
};

export const UserListView = (props) => {
    return (
        <List {...props}
        title={<CreateTitle/>}>
            <Datagrid>
                <TextField source="name" label="Name"/>
                <TextField source="email" label="Email" />
                <TextField source="role" label="Role" />
                <EditButton  label="" />
                <DeleteButton label=""/>
            </Datagrid>
        </List>
    );
};

export default UserListView;
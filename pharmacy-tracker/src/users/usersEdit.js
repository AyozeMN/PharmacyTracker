import React from 'react';
import { Edit, SimpleForm, TextInput, required, SelectInput } from 'react-admin';

const CreateTitle = () => {
    return <span>Edit user</span>;
};

const roles = ['admin', 'pharmacy', 'normal_user'];
const toChoices = items => items.map(item => ({ id: item, name: item }));

export const UserEditView = (props) => {

    return (
        <Edit {...props}
        title={<CreateTitle/>}>
            <SimpleForm>
                <TextInput source="name" label="Name" validate={[required()]} />
                <TextInput source="email" label="Email" validate={[required()]} />
                <SelectInput source="role" choices={toChoices(roles)} label="Role" validate={[required()]}/>
                {/* <PasswordInput label="password" validate={[required()]} /> */}
            </SimpleForm>
        </Edit>
    );
};

export default UserEditView;
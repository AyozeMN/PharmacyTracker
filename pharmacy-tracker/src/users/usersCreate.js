import React from 'react';
import { SimpleForm, TextInput, PasswordInput, required, Create, SelectInput } from 'react-admin';

const CreateTitle = () => {
    return <span>Create user</span>;
};

const roles = ['admin', 'pharmacy', 'normal_user'];
const toChoices = items => items.map(item => ({ id: item, name: item }));

export const UserCreateView = (props) => {
    return (
        <Create {...props}
        title={<CreateTitle/>}>
            <SimpleForm>
                <TextInput source="name" label="Name" name="name" validate={[required()]} />
                <TextInput source="email" label="Email" name="email" validate={[required()]} />
                <SelectInput source="role" choices={toChoices(roles)} label="Role" name="role" validate={[required()]}/>
                <PasswordInput label="password" name="password" validate={[required()]} />
            </SimpleForm>
        </Create>
    );
};

export default UserCreateView;
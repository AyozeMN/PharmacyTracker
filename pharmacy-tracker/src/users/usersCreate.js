import React from 'react';

import { SimpleForm, TextInput, required, Create, SelectInput } from 'react-admin';

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
                <TextInput source="name" label="Name" validate={[required()]} />
                <TextInput source="email" label="Email" validate={[required()]} />
                <SelectInput source="role" choices={toChoices(roles)} label="Role" validate={[required()]}/>
                {/* <PasswordInput label="password" validate={[required()]} /> */}
            </SimpleForm>
        </Create>
    );
};
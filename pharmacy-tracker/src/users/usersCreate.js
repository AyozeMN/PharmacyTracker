import React, { useState } from 'react';
import { SimpleForm, TextInput, PasswordInput, required, Create, SelectInput } from 'react-admin';
import { registerUser } from '../firebase/createUserFirebase';

const CreateTitle = () => {
    return <span>Create user</span>;
};

const roles = ['admin', 'pharmacy', 'normal_user'];
const toChoices = items => items.map(item => ({ id: item, name: item }));

const { signUpUser } = registerUser();

const [user, setUser] = useState({
    name: '',
    email: '',
    password: '',
    role: ''
});

const handleChange = ({ target: { name, value } }) => {
    setUser({ ...user, [name]: value });
};

const handleSubmitUser = async (e) => {
    e.preventDefault()
    setError('');
    try {
        await signUpUser(user.name, user.email, user.password);
    } catch (error) {
        setError(error.message);
    }
};

export const UserCreateView = (props) => {
    return (
        <Create {...props}
        title={<CreateTitle/>}>
            <SimpleForm>
                <TextInput source="name" label="Name" name="name" onChange={handleChange} validate={[required()]} />
                <TextInput source="email" label="Email" name="email" onChange={handleChange} validate={[required()]} />
                <SelectInput source="role" choices={toChoices(roles)} label="Role" name="role" onChange={handleChange} validate={[required()]}/>
                <PasswordInput label="password" name="password" onChange={handleChange} validate={[required()]} />
            </SimpleForm>
        </Create>
    );
};
import React, { useState } from 'react';
import { Form, TextInput, PasswordInput, required, Create, SelectInput } from 'react-admin';
import { registerUser } from '../firebase/createUserFirebase';

const CreateTitle = () => {
    return <span>Create user</span>;
};

const roles = ['admin', 'pharmacy', 'normal_user'];
const toChoices = items => items.map(item => ({ id: item, name: item }));
const { signUpUser } = registerUser();

export const UserCreateView = (props) => {

    const [user, setUser] = useState({
        name: '',
        email: '',
        password: '',
        role: ''
    });
    
    const [error, setError] = useState({
        message: ''
    });
    
    const handleChange = ({ target: { name, value } }) => {
        setUser({ ...user, [name]: value });
    };
    
    const handleSubmitUser = async (e) => {
        console.log("ESTOY EN HANDLESUBMIT");
        e.preventDefault()
        setError('');
        try {
            await signUpUser(user.email, user.password);
        } catch (error) {
            setError(error.message);
        }
    };

    return (
        <Create {...props}
        title={<CreateTitle/>}>
            <Form onSubmit={handleSubmitUser}>
                <TextInput source="name" label="Name" name="name" onChange={handleChange} validate={[required()]} />
                <TextInput source="email" label="Email" name="email" onChange={handleChange} validate={[required()]} />
                <SelectInput source="role" choices={toChoices(roles)} label="Role" name="role" onChange={handleChange} validate={[required()]}/>
                <PasswordInput label="password" name="password" onChange={handleChange} validate={[required()]} />
            </Form>
        </Create>
    );
};

export default UserCreateView;
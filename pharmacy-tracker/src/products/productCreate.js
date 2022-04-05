import React from 'react';

import { SimpleForm, TextInput, required, Create } from 'react-admin';


const CreateTitle = () => {
    return <span>Create product</span>;
};


export const ProductCreateView = (props) => {
    return (
        <Create {...props}
        title={<CreateTitle/>}>
            <SimpleForm>
                <TextInput source="name" label="Name" validate={[required()]}/>
                <TextInput source="description" label="Description" validate={[required()]}/>
            </SimpleForm>
        </Create>
    );
};



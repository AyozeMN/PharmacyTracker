import React from 'react';

import { SimpleForm, TextInput, Edit, ImageField, ImageInput } from 'react-admin';



const CreateTitle = () => {
    return <span>Edit product</span>;
};

export const ProductEditView = (props) => {

    return (
        <Edit {...props}
        title={<CreateTitle/>}>
            <SimpleForm>
                <TextInput source="name" label="Name" required/>
                <TextInput source="description" label="Description" required/>
                <ImageInput source="image" label="Image" accept="image/*" mulitple={false}>
                    <ImageField source="src" title="title" />
                </ImageInput>
            </SimpleForm>
        </Edit>
    );
};



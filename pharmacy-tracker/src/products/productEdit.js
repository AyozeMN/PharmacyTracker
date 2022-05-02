import React from 'react';

import { SimpleForm, TextInput, Edit, ImageField, ImageInput, ReferenceInput, SelectInput } from 'react-admin';



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
                <ReferenceInput label="Category" source="category" reference="categories" >
                    <SelectInput label="Category" optionText="name" />
                </ReferenceInput>
                <ImageInput source="image" label="Image" accept="image/*" mulitple={false}>
                    <ImageField source="src" title="title" />
                </ImageInput>
            </SimpleForm>
        </Edit>
    );
};



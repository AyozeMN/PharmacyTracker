import React from 'react';

import { SimpleForm, TextInput, required, Create, ImageInput, ImageField } from 'react-admin';


const CreateTitle = () => {
    return <span>Create product</span>;
};


export const ProductCreateView = (props) => {
    return (
        <Create {...props}
        title={<CreateTitle/>}>
            <SimpleForm>
                <TextInput source="name" label="Name" validate={[required()]} />
                <TextInput source="description" label="Description" validate={[required()]} />
                <ImageInput source="image" label="Image" accept="image/*" mulitple={false}>
                    <ImageField source="src" title="title" />
                </ImageInput>
            </SimpleForm>
        </Create>
    );
};

export default ProductCreateView;
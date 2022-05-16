import React from 'react';
import { SimpleForm, TextInput, Edit, ReferenceInput, SelectInput } from 'react-admin';

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
                <ReferenceInput label="Category" source="category" reference="categories" required>
                    <SelectInput label="Category" optionText="name" />
                </ReferenceInput>
                <TextInput source="img" label="Link Image" required />
                {/* <ImageInput source="image" label="Image" accept="image/*" mulitple={false}>
                    <ImageField source="src" title="title" />
                </ImageInput> */}
            </SimpleForm>
        </Edit>
    );
};

export default ProductEditView;
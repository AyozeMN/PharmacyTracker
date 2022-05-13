import React from 'react';
import { SimpleForm, TextInput, required, Create, ReferenceInput, SelectInput } from 'react-admin';

const CreateTitle = () => {
    return <span>Create product</span>;
};

export const ProductCreateView = (props) => {
    return (
        <Create {...props}
        title={<CreateTitle/>}>
            <SimpleForm redirect="products">
                <TextInput source="name" label="Name" validate={[required()]} />
                <TextInput source="description" label="Description" validate={[required()]} />
                <ReferenceInput label="Category" source="category" reference="categories" required>
                    <SelectInput label="Category" optionText="name" />
                </ReferenceInput>
                <TextInput source="img" label="Link Image" validate={[required()]} />
                {/* <ImageInput source="image" label="Image" accept="image/*" mulitple={false}>
                    <ImageField source="src" title="title" />
                </ImageInput> */}
            </SimpleForm>
        </Create>
    );
};

export default ProductCreateView;
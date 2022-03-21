import React from 'react';

import { SimpleForm, TextInput, required, Create, NumberInput } from 'react-admin';


const CreateTitle = () => {
    return <span>Create pharmacy</span>;
};

export const PharmacyCreateView = (props) => {
    return (
        <Create {...props}
        title={<CreateTitle/>}>
            <SimpleForm>
                <TextInput source="Direcci n" label="Address" validate={[required()]}/>
                <TextInput source="Telefono" label="Phone" validate={[required()]}/>
                <TextInput source="Apertura Matutina" label="Morning Opening" validate={[required()]}/>
                <TextInput source="Cierre Matutino" label="Morning Closing" validate={[required()]}/>
                <TextInput source="Apertura Vespertina" label="Evening Opening" validate={[required()]}/>
                <TextInput source="Cierre Vespertino" label="Evening Closing" validate={[required()]}/>
                <TextInput source="Municipio" label="City" validate={[required()]}/>
                <NumberInput source="Localización.latitude" label="Latitude" validate={[required()]}/>
                <NumberInput source="Localización.longitude" label="Longitude" validate={[required()]}/>
            </SimpleForm>
        </Create>
    );
};



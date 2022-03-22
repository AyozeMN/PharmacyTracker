import React from 'react';

import { SimpleForm, TextInput, required, Create } from 'react-admin';
import { LatLngInput } from '../components/LatLngInput';

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
                <TextInput type="time" source="Apertura Matutina" label="Morning Opening" validate={[required()]}/>
                <TextInput type="time" source="Cierre Matutino" label="Morning Closing" validate={[required()]}/>
                <TextInput type="time" source="Apertura Vespertina" label="Evening Opening" validate={[required()]}/>
                <TextInput type="time" source="Cierre Vespertino" label="Evening Closing" validate={[required()]}/>
                <TextInput source="Municipio" label="City" validate={[required()]}/>
                <LatLngInput validate={[required()]} />
            </SimpleForm>
        </Create>
    );
};



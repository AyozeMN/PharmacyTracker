import React from 'react';

import { SimpleForm, TextInput, required, Create } from 'react-admin';


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
                <TextInput source="Comentarios" label="Coordinates" validate={[required()]}/>
            </SimpleForm>
        </Create>
    );
};



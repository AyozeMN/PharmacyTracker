import React from 'react';

import { SimpleForm, TextInput, Edit, required } from 'react-admin';


const CreateTitle = () => {
    return <span>Edit pharmacy</span>;
};

export const PharmacyEditView = (props) => {


    return (
        <Edit {...props}
        title={<CreateTitle/>}>
            <SimpleForm>
                <TextInput source="Direcci n" label="Address" validate={[required()]}/>
                <TextInput source="Telefono" label="Phone" />
                <TextInput source="Apertura Matutina" label="Morning Opening" />
                <TextInput source="Cierre Matutino" label="Morning Closing" />
                <TextInput source="Apertura Vespertina" label="Evening Opening" />
                <TextInput source="Cierre Vespertino" label="Evening Closing" />
                <TextInput source="Municipio" label="City" />
                <TextInput source="Comentarios" label="Coordinates" />
            </SimpleForm>
        </Edit>
    );
};



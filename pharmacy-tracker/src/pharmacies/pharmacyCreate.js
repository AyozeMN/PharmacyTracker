import React from 'react';

import { SimpleForm, TextInput, required, Create, NumberInput } from 'react-admin';


const CreateTitle = () => {
    return <span>Create pharmacy</span>;
};

const validateLatField = myLat => {
    const latRegEx = /^[-+]?([1-8]?\d(\.\d+)?|90(\.0+)?)/;
    if(latRegEx.test(myLat)) {

    }
};

const validateLngField = myLng => {
    const lngRegEx = /\s*[-+]?(180(\.0+)?|((1[0-7]\d)|([1-9]?\d))(\.\d+)?)$/;
    if(lngRegEx.test(myLng)) {

    }
};

export const LatLngInput = () => (
    <span>
        <NumberInput source="Localización.latitude" label="Latitude" />
        &nbsp;
        <NumberInput source="Localización.longitude" label="Longitude" />
    </span>
);

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



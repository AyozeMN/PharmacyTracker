import React from 'react';

import { List, Datagrid, TextField, EditButton, DeleteButton, NumberField } from 'react-admin';


const CreateTitle = () => {
    return <span>Pharmacies list</span>;
};

export const PharmacyListView = (props) => {
    return (
        <List {...props}
        title={<CreateTitle/>}>
            <Datagrid>
                <TextField source="Direcci n" label="Address"/>
                <TextField source="Telefono" label="Phone" />
                <TextField source="Apertura Matutina" label="Morning Opening" />
                <TextField source="Cierre Matutino" label="Morning Closing" />
                <TextField source="Apertura Vespertina" label="Evening Opening" />
                <TextField source="Cierre Vespertino" label="Evening Closing" />
                <TextField source="Municipio" label="City" />
                <TextField source="Comentarios" label="Coordinates" />
                <NumberField textAlign="left" source="Localización.latitude" options={{maximumFractionDigits: 7}} label="Latitude" />
                <NumberField textAlign="left" source="Localización.longitude" options={{maximumFractionDigits: 7}} label="Longitude" />
                <EditButton/>
                <DeleteButton/>
            </Datagrid>
        </List>
    );
};



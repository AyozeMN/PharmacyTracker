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
                <TextField source="Address" label="Address"/>
                <TextField source="Phone" label="Phone" />
                <TextField source="mOpening" label="Morning Opening" />
                <TextField source="mClosing" label="Morning Closing" />
                <TextField source="eOpening" label="Evening Opening" />
                <TextField source="eClosing" label="Evening Closing" />
                <TextField source="City" label="City" />
                <TextField source="Owner" label="Owner" />
                <NumberField textAlign="left" source="Location.latitude" options={{maximumFractionDigits: 7}} label="Latitude" />
                <NumberField textAlign="left" source="Location.longitude" options={{maximumFractionDigits: 7}} label="Longitude" />
                <EditButton  label="" />
                <DeleteButton label=""/>
            </Datagrid>
        </List>
    );
};


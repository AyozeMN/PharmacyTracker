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
                <TextInput source="Address" label="Address" validate={[required()]}/>
                <TextInput source="Phone" label="Phone" validate={[required()]}/>
                <TextInput type="time" source="mOpening" label="Morning Opening" validate={[required()]}/>
                <TextInput type="time" source="mClosing" label="Morning Closing" validate={[required()]}/>
                <TextInput type="time" source="eOpening" label="Evening Opening" validate={[required()]}/>
                <TextInput type="time" source="eClosing" label="Evening Closing" validate={[required()]}/>
                <TextInput source="City" label="City" validate={[required()]}/>
                <LatLngInput />
            </SimpleForm>
        </Create>
    );
};

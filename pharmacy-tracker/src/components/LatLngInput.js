import { NumberInput, required } from "react-admin";


/*const validateLatField = myLat => {
    const latRegEx = /^[-+]?([1-8]?\d(\.\d+)?|90(\.0+)?)/;
    if(latRegEx.test(myLat)) {

    }
};

const validateLngField = myLng => {
    const lngRegEx = /\s*[-+]?(180(\.0+)?|((1[0-7]\d)|([1-9]?\d))(\.\d+)?)$/;
    if(lngRegEx.test(myLng)) {

    }
};*/

export const LatLngInput = () => (
    <span>
        <NumberInput source="Location.latitude" label="Latitude" validate={[required()]}/>
        &nbsp;
        <NumberInput source="Location.longitude" label="Longitude" validate={[required()]}/>
    </span>
);
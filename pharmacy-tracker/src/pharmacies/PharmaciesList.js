import React from 'react';

import { List, Datagrid, TextField} from 'react-admin';

export const PharmaciesList = (props) => (
    <List {...props}>
        <Datagrid>
            <TextField source="Name" />
            <TextField source="City" />
        </Datagrid>
    </List>
);



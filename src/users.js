import React from 'react';
import { Create, Edit, List, Datagrid, TextField, EmailField, DisabledInput, SimpleForm, TextInput } from 'react-admin';
export const UserList = props => (
    <List {...props}>
        <Datagrid rowClick="edit">
            <TextField source="id" />
            <TextField source="name" />
            <TextField source="username" />
            <EmailField source="email" />
            <TextField source="address.street" label="Address" />
            <TextField source="phone" />
            <TextField source="clinic" label="Clinic Name" />
        </Datagrid>
    </List>
);

export const UserEdit = props => (
    <Edit {...props}>
      <SimpleForm>
        <DisabledInput source="id" />
        <TextInput source="name" />
        <TextInput source="username" />
        <TextInput source="email" />
        <TextInput source="address.street" label="Address" />
        <TextInput source="phone" />
        <TextInput source="clinic" label="Clinic Name" />
      </SimpleForm>
    </Edit>
  );

  export const UserCreate = props => (
    <Create {...props}>
      <SimpleForm>
        <DisabledInput source="id" />
        <TextInput source="name" />
        <TextInput source="username" />
        <TextInput source="email" />
        <TextInput source="address.street" label="Address" />
        <TextInput source="phone" />
        <TextInput source="clinic" label="Clinic Name" />
      </SimpleForm>
    </Create>
  );
import React from 'react';
import Form from 'react-bootstrap/Form';

const FormSelect = (props: any) => {

  return (
    <Form.Control {...props} as="select">{props.children}</Form.Control>
  );
};

export default FormSelect;
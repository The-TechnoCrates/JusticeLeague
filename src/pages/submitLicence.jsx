import React, { useState } from "react";
import { Container, Form } from "react-bootstrap";

function Licence() {
  return (
    <Container>
        <Form>
            <Form.Group>
                <Form.Label>Business Licence Number</Form.Label>
                <Form.Control type="text" placeholder="Enter Licence Number" />
            </Form.Group>
        </Form>
    </Container>
  );
}

export default Licence;

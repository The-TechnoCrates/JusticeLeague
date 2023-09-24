import React, { useState } from "react";
import { Button, Container, Dropdown, Form } from "react-bootstrap";
import styles from "../styles/editclient.module.css";
import StateDropdown from "../components/stateDropDown";
import StepsShower from "../components/stepsShower";
import RadioComponent from "../components/radioComponent";
import TypeOfCase from "../components/typeOfCase";

function ClientForm() {
  const [selectedOption, setSelectedOption] = useState("");
  const [selectedState, setSelectedState] = useState("Select State");
  const [selectedIssue, setSelectedIssue] = useState('');
  return (
    <>
      <StepsShower />
      <Container className={styles.formContainer}>
        <h1 className={styles.title}>Case Details</h1>
        <TypeOfCase selectedIssue={selectedIssue} setSelectedIssue={setSelectedIssue}/>
        <Form>
          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label>Where are you from</Form.Label>
            <StateDropdown
              selectedState={selectedState}
              setSelectedState={setSelectedState}
            />
          </Form.Group>
          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label>Email address</Form.Label>
            <Form.Control type="email" placeholder="Enter email" />
            <Form.Text className="text-muted">
              We'll never share your email with anyone else.
            </Form.Text>
          </Form.Group>

          <Form.Group className="mb-3" controlId="formBasicCheckbox">
            <Form.Check type="checkbox" label="Check me out" />
          </Form.Group>
          <Form.Group>
            <Form.Label>Background to the Issue</Form.Label>
            <Form.Control
              as="textarea"
              rows={5}
              placeholder="Write background information here"
            />
          </Form.Group>

          <RadioComponent
            selectedOption={selectedOption}
            setSelectedOption={setSelectedOption}
          />
          <Button variant="primary" type="submit" className="my-2">
            Continue
          </Button>
        </Form>
      </Container>
    </>
  );
}

export default ClientForm;

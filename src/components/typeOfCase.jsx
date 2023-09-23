import { Form } from "react-bootstrap";
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { useState } from "react";
const legalIssues = [
  "Divorce/Matrimonial Issue",
  "Property Issue",
  "Family & Inheritance Issue",
  "Cheque/Loan/Recovery Issue",
  "Employment Issue",
  "Criminal Issue",
  "Consumer Court Issue",
  "Accident & Insurance Issue",
  "Armed Force Tribunal Issue",
  "Business / Corporate / Startup Issue",
  "Civil Matter / Something Else",
  "Supreme Court Issue",
  "Muslim Law Issue",
  "Immigration Issue",
];

function TypeOfCase({selectedIssue, setSelectedIssue}) {

    

    const handleIssueChange = (event) => {
      setSelectedIssue(event.target.value);
    };
console.log(selectedIssue);
  return (
    <>
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Your legal issue relates to: </Form.Label>
        <Row>
          {legalIssues.map((issue, index) => (
            <Col key={index} md={6}>
              <Form.Check
                type="radio"
                label={issue}
                name="formHorizontalRadios"
                id={`formHorizontalRadios${index}`}
                value={issue}
                checked={selectedIssue === issue}
                onChange={handleIssueChange}
              />
            </Col>
          ))}
        </Row>
      </Form.Group>
    </>
  );
}

export default TypeOfCase;

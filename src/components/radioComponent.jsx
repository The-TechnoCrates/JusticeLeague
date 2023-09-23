import  { useState } from 'react';
import { Form } from 'react-bootstrap';

function RadioComponent({selectedOption, setSelectedOption}) {
   const handleRadioChange = (event) => {
    setSelectedOption(event.target.value);
  };
  return (
    <div>
    
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>I am filling this form on behalf of</Form.Label>
        <Form.Check
          type="radio"
          label="myself"
          name="radioGroup"
          id="myself"
          value="myself"
          checked={selectedOption === 'myself'}
          onChange={handleRadioChange}
        />
        <Form.Check
          type="radio"
          label="a business/company"
          name="radioGroup"
          id="a business/company"
          value="a business/company"
          checked={selectedOption === 'a business/company'}
          onChange={handleRadioChange}
        />
      </Form.Group>
   
    </div>
  );
}

export default RadioComponent;

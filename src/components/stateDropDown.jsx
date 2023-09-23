import { Dropdown } from "react-bootstrap";
import styles from "../styles/editclient.module.css";
const indianStates = [
  "Andhra Pradesh",
  "Arunachal Pradesh",
  "Assam",
  "Bihar",
  "Chhattisgarh",
  "Goa",
  "Gujarat",
  "Haryana",
  "Himachal Pradesh",
  "Jharkhand",
  "Karnataka",
  "Kerala",
  "Madhya Pradesh",
  "Maharashtra",
  "Manipur",
  "Meghalaya",
  "Mizoram",
  "Nagaland",
  "Odisha",
  "Punjab",
  "Rajasthan",
  "Sikkim",
  "Tamil Nadu",
  "Telangana",
  "Tripura",
  "Uttarakhand",
  "Uttar Pradesh",
  "West Bengal",
];
function StateDropdown({selectedState,setSelectedState}) {
 
  const handleStateSelection = (state) => {
    setSelectedState(state);
  };

  return (
    <Dropdown >
      <Dropdown.Toggle variant="Default" id="stateDropdown" className="btn-outline-secondary">
        {selectedState}
      </Dropdown.Toggle>
      <Dropdown.Menu className={styles.customDropDown}>
        {indianStates.map((state, index) => (
          <Dropdown.Item
            key={index}
            onClick={() => handleStateSelection(state)}
          >
            {state}
          </Dropdown.Item>
        ))}
      </Dropdown.Menu>
    </Dropdown>
  );
}

export default StateDropdown;

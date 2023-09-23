import styles from "./stepsShower.module.css";
const steps = [
  "Explain your legal issue",
  "Evaluate and Matching",
  "Get help from a lawyer",
];
function StepsShower() {
  return (
    <div className={styles.stepsContainer}>
      {steps.map((step, index) => {
        return (
            <p key={index}>
              {" "}
              <span>{index + 1}</span>
              {step}
            </p>
        );
      })}
    </div>
  );
}

export default StepsShower;

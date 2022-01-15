import React from "react";
import "./styles.css";

// Import helpers
import { FIELD_NAMES, SIGNS } from "../../helpers";

const {
  firstValue: firstValueName,
  secondValue: secondValueName,
  sign: signName,
} = FIELD_NAMES;

const Fields = ({ calcState, onChange, calculateResult }) => {
  const isSubmitDisabled =
    !calcState[firstValueName] || !calcState[secondValueName];
  return (
    <form onSubmit={calculateResult}>
      <div className="form">
        <div className="input">
          <label htmlFor="first-digit">First digit</label>
          <input
            style={{ fontSize: "20px", width: 50 }}
            id="first-digit"
            type={"number"}
            name={firstValueName}
            placeholder="first-value"
            value={calcState[firstValueName]}
            onChange={onChange}
          />
        </div>

        <div className="select-field input">
          <label htmlFor="calculation-select">sign</label>
          <select
            style={{ fontSize: "20px" }}
            name={signName}
            id="calculation-select"
            placeholder="sign"
            value={calcState[signName]}
            onChange={onChange}
          >
            {Object.values(SIGNS).map((sign) => (
              <option key={sign} value={sign}>
                {sign}
              </option>
            ))}
          </select>
        </div>
        <div className="input">
          <label htmlFor="second-digit">Second digit</label>
          <input
            style={{ fontSize: "20px", width: 50 }}
            id="second-digit"
            type={"number"}
            name={secondValueName}
            placeholder="second-value"
            value={calcState[secondValueName]}
            onChange={onChange}
          />
        </div>
      </div>
      <div style={{ width: "100%", textAlign: "center", marginTop: 30 }}>
        <input type="submit" value="Calculate" disabled={isSubmitDisabled} />
      </div>
    </form>
  );
};

export default Fields;

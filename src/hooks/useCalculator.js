import React from "react";

// Import helpers
import { FIELD_NAMES } from "../helpers";
import { calculateResult } from "./helpers";

const {
  firstValue: firstValueName,
  secondValue: secondValueName,
  sign: signName,
} = FIELD_NAMES;

const INITIAL_VALUES = {
  [firstValueName]: "",
  [secondValueName]: "",
  [signName]: "+",
  result: "",
};

export const useCalculator = () => {
  const [calcState, setCalcState] = React.useState(INITIAL_VALUES);

  const handleChangeValue = (e) => {
    setCalcState((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleCalculateResult = (e) => {
    const result = calculateResult(calcState);
    setCalcState((prev) => ({
      ...prev,
      result,
    }));
    e.preventDefault();
  };

  return {
    calcState,
    onChange: handleChangeValue,
    calculateResult: handleCalculateResult,
  };
};

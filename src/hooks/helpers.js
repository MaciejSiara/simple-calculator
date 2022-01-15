import { SIGNS } from "../helpers";

const { ADD, MINUS, MULTIPLY, DIVIDE } = SIGNS;

export const calculateResult = ({ firstValue, secondValue, sign }) => {
  const firstVal = Number(firstValue);
  const secondVal = Number(secondValue);
  switch (sign) {
    case ADD:
      return firstVal + secondVal;
    case MINUS:
      return firstVal - secondVal;
    case MULTIPLY:
      return firstVal * secondVal;
    case DIVIDE:
      return firstVal / secondVal;
    default:
      throw Error("Invalid calculation sign");
  }
};

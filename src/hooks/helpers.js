import { SIGNS } from "../helpers";

const { ADD, MINUS, MULTIPLY, DIVIDE } = SIGNS;

export const calculateResult = ({ firstValue, secondValue, sign }) => {
  switch (sign) {
    case ADD:
      return firstValue + secondValue;
    case MINUS:
      return firstValue - secondValue;
    case MULTIPLY:
      return firstValue * secondValue;
    case DIVIDE:
      return firstValue / secondValue;
    default:
      throw Error("Invalid calculation sign");
  }
};

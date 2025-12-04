import { body } from "express-validator";
import { validate } from "../middleware/validatorMiddleware.js";

export const taskValidator = () => {
  return validate([
    body("title").isString(),
    body("description").isString(),
    body("priority").isString(),
    body("status").isString(),
  ]);
};

export const updateStatusValidator = () => {
  return validate([body("taskId").isNumeric(), body("to").isString()]);
};

export const deleteTaskValidator=()=>{
    return validate([body("id").isNumeric()])
}

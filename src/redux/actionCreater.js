import { HANDLE_SUBMIT } from "./actionTypes";

export const handle_submit = (data) => {
  return {
    type: HANDLE_SUBMIT,
    payload: data,
  };
};

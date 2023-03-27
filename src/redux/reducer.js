import { HANDLE_SUBMIT } from "./actionTypes";

const initialState = {
  details: [
    { name: "john", email: "john@gmail.com", password: "123", auth: true },
    { name: "mike", email: "mike@gmail.com", password: "123", auth: false },
    { name: "peter", email: "peter@gmail.com", password: "123", auth: false },
    { name: "ken", email: "ken@gmail.com", password: "123", auth: false },
  ],
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case HANDLE_SUBMIT:
      return {
        ...state,
        payload: action.payload,
      };
    default:
      return state;
  }
};
export default reducer;

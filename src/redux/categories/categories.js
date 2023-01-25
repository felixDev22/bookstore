import { v4 as uuidv4 } from 'uuid';

// Define constants
const CHECK_STATUS = 'bookstore/categories/CHECK_STATUS';
const initialState = [];

// Define action
export const checkStatus = (status) => ({
  type: CHECK_STATUS,
  status,
});

// Define reducer
const categoryReducer = (state = initialState, action) => {
  switch (action.type) {
    case CHECK_STATUS:
      return [
        ...state,
        {
          id: uuidv4(),
          text: action.status.text,
        },
      ];
    default:
      return state;
  }
};

export default categoryReducer;

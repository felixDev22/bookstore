import { createReducer, createAction } from '@reduxjs/toolkit';

export const CHECKING_STATUS = createAction('categories/check_staus');

// set intial state to empty array
const initialState = {
  status: '',
};

// Action creator
const categoriesReducer = createReducer(initialState, (builder) => {
  builder.addCase(CHECKING_STATUS, (state) => {
    // Check action
    const currentState = { ...state, status: 'Under construction' };

    return currentState;
  });
  builder.addDefaultCase((state) => state);
});

export default categoriesReducer;

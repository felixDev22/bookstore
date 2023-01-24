import { createReducer } from '@reduxjs/toolkit';

// Define action type for addding & removing
const CHECK_STATUS = 'bookstore/categories/CHECK_STATUS';
const CREATE_CATEGORIES = 'bookstore/Categories/CREATE_CATEGORIES';

// set intial state to empty array
const initialState = [];

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

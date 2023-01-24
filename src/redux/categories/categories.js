import { createReducer, createAction } from '@reduxjs/toolkit';

export const CHECKING_STATUS = createAction('categories/check_staus');

// set intial state to empty array
const initialState = {
  status: '',
};

import { createReducer } from '@reduxjs/toolkit';
import Categories from '../../components/pages/Categories';

// Define action type for addding & removing
const CHECK_STATUS = 'bookstore/categories/CHECK_STATUS';
const CREATE_CATEGORIES = 'bookstore/Categories/CREATE_CATEGORIES';

// set intial state to empty array
const initialState = [];

export const checkStatus = () => ({
  type: CHECK_STATUS,
});

export const createCategories = () => ({
  type: CREATE_CATEGORIES,
  payload: Categories,
});

// Action creator
const categoriesReducer = createReducer(initialState, {
  [CHECK_STATUS]: () => 'Under construction',
  [CREATE_CATEGORIES]: (state, action) => {
    state.push(...action.payload);
  },
});

export default categoriesReducer;

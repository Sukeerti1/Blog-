import { configureStore } from '@reduxjs/toolkit';
import blogsReducer from '../features/blogs/blogsSlice'
import usersReducer from '../features/users/usersSlice'

export const store = configureStore({
  reducer: {
    blogs: blogsReducer,
    users: usersReducer
  },
});

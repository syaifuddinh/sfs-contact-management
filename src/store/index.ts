import { configureStore } from '@reduxjs/toolkit';
import contact from "./slices/contact";

export default configureStore({
  reducer: { contact },
})
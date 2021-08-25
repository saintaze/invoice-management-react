
import { configureStore } from '@reduxjs/toolkit';
import modalSlice from './slices/modalSlice';
import invoiceSlice from './slices/invoiceSlice';
import alertSlice from './slices/alertSlice';


export default configureStore({
  reducer: {
		invoice: invoiceSlice,
		modal: modalSlice,
		alert: alertSlice
	}
})
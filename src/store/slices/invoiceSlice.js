import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';
import newInvoiceView from '../../enums/newInvoiceView';


const BASE_URI = 'http://localhost:5000/api';

export const fetchInvoices = createAsyncThunk(
  'invoice/fetchInvoice',
  async (payload, thunkAPI) => {
		try{
			const { data } = await axios.get(`${BASE_URI}/invoices`);
			return data;
		}catch(err){
			return thunkAPI.rejectWithValue(err.response.data);
		}
  }
)

export const createInvoice = createAsyncThunk(
  'invoice/createInvoice',
  async (payload, thunkAPI) => {
		try{
			const { data } = await axios.post(`${BASE_URI}/invoices`, payload);
			return data;
		}catch(err){
			return thunkAPI.rejectWithValue(err.response.data);
		}
  }
)

const invoiceInitialState = {
	allInvoices: [],
	selectedInvoice: null,
	customerInfo: null,
	activeNewInvoiceView: newInvoiceView.CUSTOMER_DETAILS,
	error: null,
	loading: false
}

export const invoiceSlice = createSlice({
  name: 'invoice',
  initialState: invoiceInitialState,
  reducers: {
		setActiveNewInvoiceView(state, action){
			state.activeNewInvoiceView = action.payload.view;
		},
		setCustomerInfo(state, action) {
			state.customerInfo = action.payload;
		},
		setSelectedInvoice(state, action){
			state.selectedInvoice = action.payload;
		}
  },
	extraReducers: (builder) => {
		builder.addCase(fetchInvoices.pending, (state, action) => {
			state.loading = true;
		})
    builder.addCase(fetchInvoices.fulfilled, (state, action) => {
      state.allInvoices = action.payload;
			state.selectedInvoice = state.allInvoices[0];
			state.loading = false;
    })
    builder.addCase(fetchInvoices.rejected, (state, action) => {
			state.error = action.error.message;
			state.loading = false;
    })

		builder.addCase(createInvoice.pending, (state, action) => {
			state.loading = true;
		})
    builder.addCase(createInvoice.fulfilled, (state, action) => {
      state.allInvoices.push(action.payload);
			state.selectedInvoice = action.payload
			state.loading = false;
    })
    builder.addCase(createInvoice.rejected, (state, action) => {
			state.error = action.error.message;
			state.loading = false;
    })
  }
})

export const { 
	setActiveNewInvoiceView,
	setCustomerInfo,
	setSelectedInvoice
} = invoiceSlice.actions

export default invoiceSlice.reducer
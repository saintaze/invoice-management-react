import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';


export const showAlert = createAsyncThunk(
  'alert/showAlert',
  async (payload, thunkAPI) => {
		thunkAPI.dispatch(closeAlert());
		return payload;
  }
)

export const closeAlert = createAsyncThunk(
  'alert/closeAlert',
  async (payload, thunkAPI) => {
		payload = await new Promise(resolve => {
			const token = setTimeout(() => {
				clearTimeout(token);
				resolve({show: false});
			}, 2000)
		});
		return payload;
  }
)

export const alertSlice = createSlice({
  name: 'alert',
  initialState: {
		showAlert: false,
		message: ''
  },
  reducers: {
  },
	extraReducers: (builder) => {
    builder.addCase(showAlert.fulfilled, (state, action) => {
			state.showAlert = true;
			state.message = action.payload.message;
    })

    builder.addCase(closeAlert.fulfilled, (state, action) => {
			state.showAlert = false;
			state.message = '';
    })
  }
})

export default alertSlice.reducer
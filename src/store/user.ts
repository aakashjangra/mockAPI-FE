import { createSlice } from '@reduxjs/toolkit'

// ! -> non-null assertion operator
const persistedState = localStorage.getItem('token');

const userSlice = createSlice({
  name: 'token',
  initialState: {
    token: persistedState || null,
  },
  reducers: {
    setToken(state, action: {payload: {token: string}}) {
      const token = action.payload.token;

      console.log('in user store', token)

      localStorage.setItem('token', token);

      return {token}
    }
  }
})

export const { setToken } = userSlice.actions;
export default userSlice.reducer;
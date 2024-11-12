import { createSlice } from "@reduxjs/toolkit";

import { loginAdmin } from "../../actions/auth/authAction";

export interface UserState {
  userData: UserState | null;
  error: string | null;
  loading: boolean;
  role: null;
  status?: string | null;
  isLogged: boolean;
  _id?: string | null;
}


const initialState: UserState = {
  userData: localStorage.getItem("user")
    ? JSON.parse(localStorage.getItem("user")!)
    : null,
  error: null,
  loading: false,
  role: localStorage.getItem("role")
    ? JSON.parse(localStorage.getItem("role")!)
    : null,
  isLogged: localStorage.getItem("isLogged")
    ? JSON.parse(localStorage.getItem("isLogged")!)
    : false,
  status: localStorage.getItem("status")
    ? JSON.parse(localStorage.getItem("status")!)
    : null,
  _id: localStorage.getItem("_id")
    ? JSON.parse(localStorage.getItem("_id")!)
    : null,
};

export const authSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    updateError: (state, { payload }) => {
      state.error = payload;
    },
  },
  extraReducers: (builder) => {
    builder
    .addCase(loginAdmin.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(loginAdmin.fulfilled, (state, { payload }) => {
        state.loading = false;
        state.error = null;
        state.userData = payload;
        state.role = payload.role;
        console.log('my admin paylod role is ',payload.role);
        state.isLogged = true;
        localStorage.setItem("role", JSON.stringify(state.role));
        localStorage.setItem("isLogged", JSON.stringify(state.isLogged));
        localStorage.setItem("user", JSON.stringify(state.userData));
        localStorage.setItem("status",JSON.stringify(state.status))
        console.log(payload, "login state inside slice");
      })
      .addCase(loginAdmin.rejected, (state, { payload }) => {
        state.loading = false;
        state.userData = null;
        state.role = null;
        state.error = payload as string;
      })

  },
});


export const {updateError}= authSlice.actions
export default authSlice

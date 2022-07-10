import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  music: [],
  status: "idle"
};

export const musicSlice = createSlice({
  name: "music",
  initialState,
  reducers: {
    getMusicList: (state, action) => {

    },
    getMusicById: (state, action) => {

    }
  }
})

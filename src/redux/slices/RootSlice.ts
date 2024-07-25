import { createSlice } from "@reduxjs/toolkit";

const rootSlice = createSlice({
  name: "root",
  initialState: {
    title: "Title",
    author: "Author",
    ISBN: "ISBN",
    pages: 0,
    back_cover: true,
  },
  reducers: {
    chooseTitle: (state, action) => { state.title = action.payload },
    chooseAuthor: (state, action) => { state.author = action.payload },
    chooseISBN: (state, action) => { state.ISBN= action.payload },
    choosePages: (state, action) => { state.pages = action.payload },
    chooseBackCover: (state, action) => { state.back_cover = action.payload }
  }
});

export const reducer = rootSlice.reducer;
export const { chooseTitle, chooseAuthor, chooseISBN, choosePages, chooseBackCover } = rootSlice.actions;
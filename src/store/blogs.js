import { createSlice } from '@reduxjs/toolkit';
import { apiCallBegan } from './api';

const debug = true;
const baseURL = process.env.REACT_APP_BACKEND_PATH;
const removeURL = process.env.REACT_APP_STATIC_REMOVE;

// initial state
const initialState = {
  loading: false,
  blogs: [],
};

// create slice
export const slice = createSlice({
  name: 'blogs',
  initialState,
  reducers: {
    // onStart
    blogsRequested: (state) => {
      state.loading = true;
    },
    blogUpdateStart: (state) => {
      state.loading = true;
    },
    blogCreateStart: (state) => {
      state.loading = true;
    },
    blogDeleteStart: (state) => {
      state.loading = true;
    },
    // onSuccess
    blogsReceived: (state, action) => {
      if (debug) console.log('blogs/blogsReceived: ', action.payload);
      action.payload.sort((a, b) => {
        return new Date(b.date) - new Date(a.date);
      });

      state.blogs = action.payload;
      // replace parts from path
      state.blogs.map((item) => {
        item.picture = item.picture.replace(removeURL, '');
        item.file = item.file.replace(removeURL, '');
        return false;
      });
    },
    blogUpdated: (state, action) => {
      if (debug) console.log('blogs/blogsUpdated: ', action.payload);
      const index = state.blogs.findIndex((blog) => blog.id === action.payload.id);
      if (debug) console.log('blogs/blogsUpdated: ', index);
      state.blogs[index] = action.payload;
      const evArr = state.blogs;
      evArr.sort((a, b) => {
        return new Date(b.date) - new Date(a.date);
      });
      state.blogs = evArr;
      // replace parts from path
      state.blogs.map((item) => {
        if (!item.picture.includes(baseURL))
          item.picture = baseURL + item.picture.replace(removeURL, '');
        if (!item.file.includes(baseURL)) item.file = baseURL + item.file.replace(removeURL, '');
        return false;
      });

      state.loading = false;
    },
    blogCreated: (state, action) => {
      if (debug) console.log('blogs/blogCreated: ', action.payload);
      const evArr = state.blogs;
      evArr.push(action.payload);
      evArr.sort((a, b) => {
        return new Date(b.date) - new Date(a.date);
      });
      state.blogs = evArr;
      // replace parts from path
      state.blogs.map((item) => {
        if (!item.picture.includes(baseURL))
          item.picture = baseURL + item.picture.replace(removeURL, '');
        if (!item.file.includes(baseURL)) item.file = baseURL + item.file.replace(removeURL, '');
        return false;
      });

      state.loading = false;
    },
    blogDeleted: (state, action) => {
      if (debug) console.log('blogs/blogDeleted: ', action.payload);
      const newBlogs = state.blogs.filter((item) => item.id !== action.payload.id);
      state.blogs = newBlogs;
    },
    // onError
    blogsRequestFailed: (state) => {
      state.loading = false;
    },
    blogUpdateFailed: (state) => {
      state.loading = false;
    },
    blogCreateFailed: (state) => {
      state.loading = false;
    },
    blogDeleteFailed: (state) => {
      state.loading = false;
    },
  },
});

// export reducer
export default slice.reducer;

// export actions
export const {
  blogsReceived,
  blogsRequested,
  blogsRequestFailed,
  blogUpdateStart,
  blogUpdated,
  blogUpdateFailed,
  blogCreated,
  blogDeleted,
  blogCreateStart,
  blogDeleteStart,
  blogCreateFailed,
  blogDeleteFailed,
} = slice.actions;

// export action creators
const url = '/api/blogs/';

// READ
export const getBlogs = () => (dispatch) => {
  if (debug) console.log('blogs/getBlogs');
  dispatch(
    apiCallBegan({
      url,
      method: 'get',
      onStart: blogsRequested.type,
      onSuccess: blogsReceived.type,
      onError: blogsRequestFailed.type,
    })
  );
};

// UPDATE
export const updateBlog = (datas) => (dispatch) => {
  if (debug) console.log('blogs/updateBlog: ', datas);
  const urlUpdate = url + datas.id + '/update';

  var headers = {
    'content-type': 'multipart/form-data',
  };
  var data = new FormData();
  data.append('date', datas.date);
  data.append('smallHeading', datas.smallHeading);
  data.append('category', datas.category);
  data.append('title', datas.title);
  data.append('detail', datas.detail);
  data.append('picture', datas.picture, datas.picture.name);
  data.append('file', datas.file, datas.file.name);
  data.append('pictPos', datas.pictPos);

  dispatch(
    apiCallBegan({
      url: urlUpdate,
      method: 'put',
      data,
      headers,
      onStart: blogUpdateStart.type,
      onSuccess: blogUpdated.type,
      onError: blogUpdateFailed.type,
    })
  );
};

// CREATE
export const createBlog = (datas) => (dispatch) => {
  if (debug) console.log('blogs/createBlog: ', datas);

  var headers = {
    'content-type': 'multipart/form-data',
  };
  var data = new FormData();
  data.append('date', datas.date);
  data.append('smallHeading', datas.smallHeading);
  data.append('category', datas.category);
  data.append('title', datas.title);
  data.append('detail', datas.detail);
  data.append('picture', datas.picture, datas.picture.name);
  data.append('file', datas.file, datas.file.name);
  data.append('pictPos', datas.pictPos);

  dispatch(
    apiCallBegan({
      url,
      method: 'post',
      data,
      headers,
      onStart: blogCreateStart.type,
      onSuccess: blogCreated.type,
      onError: blogCreateFailed.type,
    })
  );
};

// DELETE
export const deleteBlog = (data) => (dispatch) => {
  if (debug) console.log('blogs/deleteBlog: ', data, url + data.id + '/delete');
  const urlUpdate = url + data.id + '/delete';
  dispatch(
    apiCallBegan({
      url: urlUpdate,
      method: 'delete',
      data,
      onStart: blogDeleteStart.type,
      onSuccess: blogDeleted.type,
      onError: blogDeleteFailed.type,
    })
  );
};

import axios from "axios";

const BASE_URL = import.meta.env.VITE_BACKEND_URL;

export const getVideos = () => {
  const controller = new AbortController();
  const { signal } = controller;
  return axios.get(`${BASE_URL}/videos`, { signal });
};

export const getFavoriteVideos = (userId) => {
  const controller = new AbortController();
  const { signal } = controller;
  return axios.get(`${BASE_URL}/user-video/${userId}`, { signal });
};

export const modifyVideoById = (body, id) =>
  axios.put(`${BASE_URL}/videos/${id}`, body);

export const addVideoThumbnail = (form) =>
  axios.post(`${BASE_URL}/upload/thumbnails/videos`, form);

export const addVideoMedia = (form) =>
  axios.post(`${BASE_URL}/upload/videos`, form);

export const addVideo = (body) => axios.post(`${BASE_URL}/videos/`, body);

export const deleteVideo = (id) => axios.delete(`${BASE_URL}/videos/${id}`);

export const addVideoCategory = (body) =>
  axios.post(`${BASE_URL}/video-category/`, body);

export const deleteVideoCategory = (id) =>
  axios.delete(`${BASE_URL}/video-category/${id}`);

export const deleteVideoThumbnail = (data) =>
  axios.delete(`${BASE_URL}/upload/thumbnails/videos`, data);

export const deleteVideoFile = (data) =>
  axios.delete(`${BASE_URL}/upload/videos`, data);

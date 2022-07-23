import axiosClient from "./axiosClient";

const categoriesApi = {
  getAll(params) {
    const url = "/categories";
    return axiosClient.get(url, { params });
  },
  get(id) {
    const url = `/categories/${id}`;
    return axiosClient.get(url);
  },
  update(data) {
    const url = "/categories";
    return axiosClient.patch(url, data);
  },
  add(data) {
    const url = "/categories";
    return axiosClient.post(url, data);
  },
  remove(id) {
    const url = `/categories/${id}`;
    return axiosClient.delete(url);
  },
};

export default categoriesApi;

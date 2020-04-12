import axios from 'axios';
export const handleFormData = (e) => {
  const formData = new FormData(e.target);
  const data = {};
  e.preventDefault();
  for (let entry of formData.entries()) {
    data[entry[0]] = entry[1];
  }
  e.target.reset();
  return data;
};

export const axiosPost = async (path, user) => {
  const URL = process.env.REACT_APP_API + path;
  const response = await axios.post(URL, user);
  return response;
};

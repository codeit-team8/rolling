import axios from 'axios';

const URL = 'https://rolling-api.vercel.app';

export const postData = async ({ path, data }) => {
  try {
    const response = await axios({
      method: 'post',
      url: `${URL}${path}`,
      data,
    });
    return response;
  } catch (error) {
    return error;
  }
};

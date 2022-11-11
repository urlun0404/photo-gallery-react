// Pixabay must add key as endpoint parameter and cannot use Authorization in headers
export const PIXABAY_ENDPOINT = `https://pixabay.com/api/?key=${process.env.REACT_APP_PEXABAY_API_KEY}&image_type=photo&pretty=true`;

export const OVERLOAD = {
  headers: {
    // Authorization: process.env.REACT_APP_PEXABAY_API_KEY,
    Accept: 'application/json',
  },
};

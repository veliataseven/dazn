const convertURL = (URL) => {
  return URL.replace(/^http:\/\//i, 'https://');
};

export default convertURL;

const apiConfig = {
  baseUrl: "https://api.themoviedb.org/3/",
  apiKey: "ef0655861ef3ff2706cbf0709fa9281e12",
  originalImage: (imgPath) => `https://image.tmdb.org/t/p/original/${imgPath}`,
  w500Image: (imgPath) => `https://image.tmdb.org/t/p/w500/${imgPath}`,
};

export default apiConfig;
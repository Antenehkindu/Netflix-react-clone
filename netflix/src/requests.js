const API_KEY = "7cf406f4824763074935cd74c15622ca";

const requests = {
    fetchTrending:`/trending/all/week?api_key=${API_KEY}&language=en-us`,
    fetchNetflixOriginals:`/discover/tv?api_key=${API_KEY}&with_networks=213`,
};
export default requests;
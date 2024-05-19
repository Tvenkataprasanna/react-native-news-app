import api from "./client";
const getNews =()=>{
    return api.get(
        "/top-headlines?country=in&apiKey=$(your_apiKey)"
    );
};
const searchedNews = (str) =>{
    return api.get(`everything?q=${str}&apiKey=${your_apiKey}`);

};
export default{
    getNews,
    searchedNews,
};
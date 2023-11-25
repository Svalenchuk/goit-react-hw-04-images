const API_KEY = '39430133-0aac772ca2711048648216d0e'; 

function fetchImages(query, page) {
  return fetch(
    `https://pixabay.com/api/?q=${query}&page=${page}&key=${API_KEY}&image_type=photo&orientation=horizontal&per_page=12`
  ).then((response) => {
    if (response.ok) {
      return response.json();  
    } 

    return Promise.reject(new Error("Oops, something went wrong!"));
  });
}

const api = {fetchImages}; 

export default api; 
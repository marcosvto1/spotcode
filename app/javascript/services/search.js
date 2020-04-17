import Api from './api';

const SearchService = {
  show: (query) => Api.get(`/search?query=${query}`)
}

export default SearchService;
import Api from './api';
import Categories from '../components/common/categories';

const CategoriesService = {
  show: (id) => Api.get(`/categories/${id}`)
}

export default CategoriesService;
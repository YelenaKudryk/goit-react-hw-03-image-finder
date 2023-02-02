import axios from 'axios';

const instance = axios.create({
  baseURL: 'https://pixabay.com/api',
  params: {
    key: '31961663-64463d95415f4115936bb653e',
    per_page: 12,
  },
});

const fetchApiImages = async (search, page) => {
  const { data } = await instance.get('/', {
    params: {
      q: search,
      page: page,
    },
  });

  return data;
};

export default fetchApiImages;

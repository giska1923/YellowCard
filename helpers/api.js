import api from '../api.js';

const getAllPages = async url => {
  const allData = [];
  let page = 1;
  let hasMore = true;

  while (hasMore) {
    const response = await api.get(`${url}&page=${page}`);
    const data = response.data;

    allData.push(data.data);

    hasMore = data.pagination.has_more;
    page = page + 1;
  }

  return allData;
};

export default getAllPages;

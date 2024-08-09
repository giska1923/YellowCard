import api from '../api.js';
import allTypes from '../core/all_types.js';

// Create a map from typeData for easy lookup
const typeMap = {};
allTypes.forEach(type => {
  typeMap[type.id] = type.name;
});

const mapTypeIdsToNames = obj => {
  if (Array.isArray(obj)) {
    obj.forEach(item => mapTypeIdsToNames(item, typeMap));
  } else if (typeof obj === 'object' && obj !== null) {
    for (let key in obj) {
      if (key === 'type_id' && obj[key] in typeMap) {
        obj[key] = typeMap[obj[key]];
      } else {
        mapTypeIdsToNames(obj[key], typeMap);
      }
    }
  }
};

const flattenNestedArray = nestedArray => {
  // Use the reduce method to concatenate all inner arrays into one array
  return nestedArray.reduce((accumulator, currentArray) => {
    return accumulator.concat(currentArray);
  }, []);
};

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

export { getAllPages, mapTypeIdsToNames, flattenNestedArray };

import api from '../api.js';
import allTypes from '../core/allTypes.js';

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

/**
 * Used only for fixtures array which has events and participants included
 */
const removeNonEssentials = data => {
  data.forEach(fixture => {
    if ('aggregate_id' in fixture) {
      delete fixture.aggregate_id;
    }
    if ('group_id' in fixture) {
      delete fixture.group_id;
    }
    if ('name' in fixture) {
      delete fixture.name;
    }
    if ('sport_id' in fixture) {
      delete fixture.sport_id;
    }
    if ('starting_at_timestamp' in fixture) {
      delete fixture.starting_at_timestamp;
    }
    if ('state_id' in fixture) {
      delete fixture.state_id;
    }
    if ('venue_id' in fixture) {
      delete fixture.venue_id;
    }
    fixture.events.forEach(event => {
      if ('addition' in event) {
        delete event.addition;
      }
      if ('coach_id' in event) {
        delete event.coach_id;
      }
      if ('extra_minute' in event) {
        delete event.extra_minute;
      }
      if ('injured' in event) {
        delete event.injured;
      }
      if ('on_bench' in event) {
        delete event.on_bench;
      }
      if ('section' in event) {
        delete event.section;
      }
    });
    fixture.participants.forEach(participant => {
      if ('country_id' in participant) {
        delete participant.country_id;
      }
      if ('sport_id' in participant) {
        delete participant.sport_id;
      }
      if ('venue_id' in participant) {
        delete participant.venue_id;
      }
      if (participant.meta && 'position' in participant.meta) {
        delete participant.meta.position;
      }
    });
  });
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

export {
  getAllPages,
  mapTypeIdsToNames,
  flattenNestedArray,
  removeNonEssentials,
};

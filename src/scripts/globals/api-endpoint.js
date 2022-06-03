import CONFIG from './config';

const api_endpoint = (query) => {
  const search = `${CONFIG.BASE_URL}?q=${query}&key=${CONFIG.KEY}`;
  return search;
};

const api_endpoint_detail = (id) => {
  const detail = `${CONFIG.BASE_URL}/${id}?key=${CONFIG.KEY}`;
  return detail;
};

export default { api_endpoint, api_endpoint_detail };


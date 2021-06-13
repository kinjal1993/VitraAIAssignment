const base_url = (process.env.NODE_ENV === 'development')?'http://localhost:5000/':'http://localhost:5000/';

module.exports.PEOPLE_SEARCH_URL = base_url+'people/'
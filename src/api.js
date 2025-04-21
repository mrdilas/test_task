import axios from 'axios';

const api = axios.create({
  baseURL: 'http://localhost:3000/api'
});

export default {
  // Новости
  getNews(limit = 3) {
    return api.get('/news', { params: { limit } });
  },
  addNews(news) {
    return api.post('/news', news);
  },

  // Обратная связь
  getFeedback() {
    return api.get('/feedback');
  },
  submitFeedback(feedback) {
    return api.post('/feedback', feedback);
  }
}
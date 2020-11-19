import axios from 'axios';

const url = 'http://localhost:2058/posts';

export const fetchPosts = () => axios.get(url);
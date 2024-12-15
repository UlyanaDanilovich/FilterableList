export const API_URL = 'https://jsonplaceholder.typicode.com/posts';
export const POSTS_PER_PAGE = 10;
export const DELAY = 500;

export const store = {
  isLoading: true,
  isPostsOver: false,
  page: 1,
  filterString: '',
  allPosts: [],
  timeout: null,
};

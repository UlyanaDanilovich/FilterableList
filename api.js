import { API_URL, POSTS_PER_PAGE, store } from './constants.js';

export async function fetchPosts() {
  try {
    const { filterString, page } = store;
    const queryFilter = filterString.length ? `&title_like=${filterString}` : '';
    const url = `${API_URL}?_page=${page}&_limit=${POSTS_PER_PAGE}${queryFilter}`;
    const response = await fetch(url);
    const data = await response.json();
    if (!data.length) {
      store.isPostsOver = true;
    } 
    store.allPosts.push(...data);
  } catch (error) {
    console.log('Error fetching posts:', error);
  }
}

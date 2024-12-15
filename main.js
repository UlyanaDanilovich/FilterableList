import { fetchPosts } from './api.js';
import { renderPosts } from './render.js';
import { store, DELAY } from './constants.js';

const loading = document.getElementById('loading-indicator');
const filterInput = document.getElementById('filter-input');
const postsContainer = document.getElementById('posts-container');

async function downloadPosts() {
  store.isLoading = true;
  loading.classList.remove('hide');
  await fetchPosts();
  renderPosts(postsContainer, store.allPosts);
  loading.classList.add('hide');
  store.isLoading = false;
  store.page++;
}

function handleScroll() {
  const { scrollTop, scrollHeight, clientHeight } = document.documentElement;
  if (!store.isPostsOver && !store.isLoading && scrollTop + clientHeight >= scrollHeight - 100) {
    downloadPosts();
  }
}

function handleInput({ target }) {
  store.page = 1;
  store.allPosts = [];
  store.isPostsOver = false;
  store.filterString = target.value;

  clearTimeout(store.timeout);
  store.timeout = setTimeout(() => {
    downloadPosts();
    clearTimeout(store.timeout);
  }, DELAY);
}

window.addEventListener('load', () => downloadPosts());

window.addEventListener('scroll', handleScroll);

filterInput.addEventListener('input', handleInput);

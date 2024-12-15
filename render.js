export function renderPosts(target, posts) {
  target.innerHTML = posts
    .map(post => `
      <div class="post">
        <h3>${post?.id}. ${post?.title}</h3>
        <p>${post?.body}</p>
      </div>
    `)
    .join('');
}

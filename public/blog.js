async function getPosts() {
  const { data: posts } = await axios.get('/api/posts')
  return posts
}

async function renderPosts() {
  const posts = await getPosts()
  posts.forEach(post =>{
    console.log(post)
    
    let div = document.getElementById('displayPost')
    let postElem = document.createElement('div')
    postElem.classList.add('col-md-6')

    postElem.innerHTML = `
    <div class="row g-0 border rounded overflow-hidden flex-md-row mb-4 shadow-sm h-md-250 position-relative">
      <div class="col p-4 d-flex flex-column position-static">
      <div class"d-inline justify-content-end">
        <strong class="d-inline mb-2 text-primary">${post.user.username}</strong>
        <div class="d-inline  mb-1 text-muted">${post.createdAt.substring(0,10)}</div>
      </div>
      <hr>
      <h3 class="mb-0">${post.title}</h3>
      <p class="card-text mb-auto">${post.body}</p>
      </div>
    </div>`

    div.append(postElem)

  })
}

renderPosts()
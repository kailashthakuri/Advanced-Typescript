const posts = [
  { title: "First Post", body: "This is First Post" },
  { title: "Second Post", body: "This is Second Post" }
];

function getPost() {
  setTimeout(() => {
    let output = "";
    posts.forEach(post => {
      output += `<li>${post.title}</li>`;
    });
    document.body.innerHTML = output;
  }, 1000);
}

function createPost(post, callback) {
  setTimeout(() => {
    posts.push(post);
    callback();
  }, 2000);
}

createPost({ title: "Third  Post", body: "This is Third  Post" }, getPost);

export {};

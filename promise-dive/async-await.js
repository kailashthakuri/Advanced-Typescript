/**
 * Async/Await is the more elegant way to handle promise.
 */

const posts = [
  { title: "First Post", body: "This is First Post" },
  { title: "Second Post", body: "This is Second Post" }
];
function getPosts() {
  setTimeout(() => {
    let output = "";
    posts.forEach(post => {
      output += `<li>${post.title}</li>`;
    });
    document.body.innerHTML = output;
  }, 1000);
}
function createPost(post) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      posts.push(post);
      const error = false;
      if (!error) {
        resolve();
      } else {
        reject("Something went wrong!");
      }
    }, 2000);
  });
}

async function init() {
  await createPost({ title: "Await Post", body: "This is await post" });
  getPosts();
}

// init();

async function fetchUser() {
  const response = await fetch("https://jsonplaceholder.typicode.com/users");
  const result = await response.json();
  console.log(result);
}

fetchUser();

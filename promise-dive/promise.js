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

/** Proimse Example */

createPost({
  title: "Promis Post",
  boyd: "This is Promise  Post"
})
  .then(result => getPosts())
  .catch(error => {
    console.log(error);
  });

/** Promise.all Example */

const promise1 = Promise.resolve("Promise 1");
const promise2 = 10;
const promise3 = new Promise((resolve, reject) => {
  setTimeout(resolve, 1000, "Promise 3");
});
const promise4 = fetch(
  "https://jsonplaceholder.typicode.com/users"
).then(response => response.json());
Promise.all([promise1, promise2, promise3, promise4]).then(values => {
  console.log(values);
});
export {};

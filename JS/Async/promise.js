// 5sec
let users = [
  { username: "Mukul", postId: 1 },
  { username: "Naveen", postId: 14 },
  { username: "Piyush", postId: 21 },
  { username: "Nitya", postId: 15 },
  { username: "Tanya", postId: 420 },
];

// 2s
let posts = [
  { username: "Mukul", content: "Web d", id: 101 },
  { username: "Naveen", content: "Break up", id: 102 },
  { username: "Piyush", content: "Friendship", id: 103 },
  { username: "Nitya", content: "Party", id: 104 },
  { username: "Tanya", content: "Blocked", id: 105 },
];

// 3sec
let comments = [
  { comment: ["Nyc", "Pic", "deer"], id: 105 },
  { comment: ["Good", "Dress"], id: 101 },
  { comment: ["You", " deserve someone better"], id: 104 },
  { comment: ["Abba nahi manenge"], id: 103 },
  { comment: ["Mayank se shaadi kroge"], id: 102 },
];

const getUsername = new Promise((resolve, reject) => {
  let username;
  setTimeout(() => {
    users.map((user) => {
      if (user.postId === 420) {
        username = user.username;
      }
    });
    console.log(username);

    if (NetworkInformation) resolve("Success " + username);
    else reject("ERR");
  }, 2000);
});

const getContent = new Promise((resolve, reject) => {
  let content;
  setTimeout(() => {
    posts.map((post) => {
      if (post.username === "Nitya") {
        content = post.content;
        id = post.id;
      }
    });

    console.log(content);
    resolve("Success " + content);
  }, 5000);
});

console.log(getContent);
// resolved , rejected , pending - promise 3 states

getUsername
  .then((data) => {
    console.log(data);
    return getContent;
  })
  .then((data) => {
    console.log(data);
    return getComment;
  })
  .then((data) => {})
  .catch((err) => {
    console.log(err);
  });

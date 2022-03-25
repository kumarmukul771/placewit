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

// postId -> username , content , comment
const getDetails = (postId, callback1) => {
  callback1(postId, getPosts);
};

getDetails(15, (postId, callback3) => {
  let username, content, comment, id;
  setTimeout(() => {
    users.map((user) => {
      if (user.postId === postId) {
        username = user.username;
      }
    });
    console.log(username);
    callback3(username,getComments);
  }, 5000);
});

const getPosts = (username, callback4) => {
  setTimeout(() => {
    posts.map((post) => {
      if (post.username === username) {
        content = post.content;
        id = post.id;
      }
    });

    console.log(content);
    callback4(id);
  }, 2000);
};

const getComments = (id) => {
  setTimeout(() => {
    comments.map((c) => {
      console.log(c.id, id);
      if (c.id === id) {
        comment = c.comment;
      }
    });
    console.log(comment);
  }, 3000);
};

// users.map((xyz) => {
//   console.log(xyz.postId);
// });


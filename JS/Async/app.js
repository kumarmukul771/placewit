// function myFun1(callback) {
//   console.log("HI ");
//   callback();
// }

// function myFun2() {
//   console.log("People");
// }

// setTimeout(() => {
//   myFun1(myFun2);
// }, 3000);

// myFun2();

// function myDisplayer(some) {
//   console.log(some);
// }

// function myCalculator(num1, num2, myDisplayer) {
//   let sum = num1 + num2;

//   myDisplayer(sum);
// }

// myCalculator(5, 5, myDisplayer);
// const display = (a) => {
//   console.log(a);
// };

// const insert = (a, x, callback) => {
//   setTimeout(() => {
//     a.push(x);
//     callback(a);
//   }, 3000);
// };

// const a = [1, 2, 3];

// insert(a, 4, display);

const obj = {
  name: "Mukul",
  roll: 11,
};

function update(obj, callback1, callback2) {
  setTimeout(() => {
    obj.roll = 12;
    console.log(obj);
    // callback1(obj, callback2);

    setTimeout(() => {
      obj.name = "Rohit";
      console.log(obj);
      setTimeout(() => {
        obj.name = "Rohit";
        console.log(obj);
        setTimeout(() => console.log(obj), 3000);
      }, 5000);
    }, 5000);
  }, 3000);
}

function update2(obj, callback1) {
  setTimeout(() => {
    obj.name = "Rohit";
    console.log(obj);
    callback1(obj);
  }, 5000);
}

function print(obj) {
  setTimeout(() => console.log(obj), 3000);
}

update(obj, update2, () => {
  setTimeout(() => console.log(obj), 3000);
});
// task1 -> task2 -> task3 ->task4 -> task5 task6
// Callback hell (Unmangeable code)
// campGround.create(req.body, function (err, data) {
//   if (err) console.log("Error Try later!");
//   else {
//     campGround.create(req.body, function (err, data) {
//       if (err) console.log("Error Try later!");
//       else {
//         campGround.create(req.body, function (err, data) {
//           if (err) console.log("Error Try later!");
//           else {
//             campGround.create(req.body, function (err, data) {
//               if (err) console.log("Error Try later!");
//               else {
//                 campGround.create(req.body, function (err, data) {
//                   if (err) console.log("Error Try later!");
//                   else {
//                     data.author.id = req.user._id;
//                     data.author.username = req.user.username;
//                     data.save();
//                     console.log(data);
//                     res.redirect("/campgrounds");
//                   }
//                 });
//               }
//             });
//           }
//         });
//       }
//     });
//   }
// });

// Asynchronous , Synchronous , blocking , non-blocking
// event , event loop
// Chef -[Order1,Order2,Order3] [500]
// Waiter1 Waiter2
// AJAX

// C1 - Order1 blocking
// C3 - Order2
// c2 - Order3
// c4 - 500 non-blocking

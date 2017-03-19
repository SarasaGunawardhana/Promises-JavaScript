
let promiseToPassExam = new Promise(function(resolve, reject){

  let isExamPass = false;

  if (isExamPass) {
    resolve('Passed');
  }
  else {
    reject('Failed');
  }
});

promiseToPassExam.then(function(fromResolve) {
  console.log('The Exam is '+fromResolve);
}).catch(function(fromReject) {
  console.log('The Exam is '+fromReject);
});

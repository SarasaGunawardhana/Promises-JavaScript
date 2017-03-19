
let promiseToPassExam = new Promise(function(resolve, reject){

  let isExamPass = true;

  if (isExamPass) {
    resolve('Passed');
  }
  else {
    reject();
  }
});

promiseToPassExam.then();


promiseToPassExam.then(function(fromResolve) {
  console.log('The Exam is '+fromResolve);
});



let studyWell = function() {
  return new Promise(function(resolve, reject) {
      resolve('Studied Well ');
  });
};

let passExam = function(message) {
  return new Promise(function(resolve, reject) {
      resolve(message +' Exam Passed ');
  });
};

let winReward = function(message) {
  return new Promise(function(resolve, reject) {
      resolve(message+' Won a Reward');
  });
};


Promise.race([studyWell(),passExam(),winReward()]).then(function() {
  console.log('One of them is Finished');
});

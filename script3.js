

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


  studyWell().then(function(result) {
    return passExam(result);
  }).then(function(result) {
    return winReward(result);
  }).then(function(result) {
    console.log('Finished '+result);
  });

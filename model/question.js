const Topics = require("./topics");

class Questions {
  constructor(question, answer, answer1, answer2) {
    this.question = question;
    this.answer = answer;
    this.answer1 = answer1;
    this.answer2 = answer2;
  }

  examination(usersAnswer) {
    const x = this.question.answer === usersAnswer;
    return x;
  }
}

module.exports = {
  Questions,
};

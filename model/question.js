class Questions {
  constructor(question, answer) {
    this.question = question;
    this.answer = answer;
  }

  examination(usersAnswer) {
    const x = this.question.answer === usersAnswer;
    return x;
  }
}

module.exports = {
  Questions,
};

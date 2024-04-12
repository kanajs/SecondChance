class Topics {
  constructor(name, questions = []) {
    this.name = name;
    this.questions = questions;
  }

  addQuestions(question) {
    this.questions.push(question);
  }
}

module.exports = {
  Topics,
};

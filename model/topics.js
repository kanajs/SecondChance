class Topics {
  questions;

  constructor(name) {
    this.name = name;
  }

  addQuestions(question) {
    this.questions.push(question);
  }
}

module.exports = {
  Topics
};

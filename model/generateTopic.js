const fs = require('fs');
const Topics = require('./topics');
const Question = require('./question');
const { EOL } = require('os')

class GenerateTopic {
  content;

  topics;

  constructor(nameOfTopic, path) {
    this.nameOfTopic = nameOfTopic;
    this.path = path;
  }

  read() {
    this.content = fs.readFileSync(this.path, 'utf-8');
  }

  initTopics() {
    this.topic = new Topics(this.nameOfTopic);
  }

  fill() {
    const arr = this.content.split(EOL);

    for (let i = 0; i < arr.length; i += 2) {
      const question = arr[i];
      const answer = arr[i + 1];
      const quest = new Question(question, answer);
      this.topic.addQuestion(quest);
    }
  }

  generate() {
    this.read();
    this.initTopics();
    this.fill();
    return this.topics;
  }
}

module.exports = {
  GenerateTopic
};

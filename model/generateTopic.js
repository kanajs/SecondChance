/* eslint-disable no-await-in-loop */
const fs = require("fs");
const { EOL, type } = require("os");
const inquirer = require("inquirer");
const { Topics } = require("./topics");
const { Questions } = require("./question");

class GenerateTopic {
  content;

  topic;

  constructor(nameOfTopic, path) {
    this.nameOfTopic = nameOfTopic;
    this.path = path;
  }

  read() {
    this.content = fs.readFileSync(this.path, "utf-8");
  }

  initTopics() {
    this.topic = new Topics(this.nameOfTopic);
  }

  async fill() {
    const arr = this.content.split(EOL);

    const result1 = await inquirer.prompt([
      {
        type: "list",
        name: "topic",
        message: "Vibere temu",
        choices: [
          { name: 1, value: 1 },
          { name: 2, value: 2 },
        ],
      },
    ]);
    console.log(result1);
    
    for (let i = 0; i < arr.length; i += 2) {
      const question = arr[i];
      const answer = arr[i + 1];
      const quest = new Questions(question, answer);
      const result = await inquirer.prompt([
        {
          type: "list",
          name: "bonuses",
          message: quest.question,
          choices: [
            { name: "Не опаздывал", value: 0 },
            { name: "На 2-3 минутки", value: 2 },
            { name: quest.answer, value: 5 },
          ],
        },
      ]);
      // console.clear();
      // console.log("ok");
      // setTimeout(() => console.clear(), 2000);
      // this.topic.addQuestions(quest);
    }
  }

  generate() {
    this.read();
    this.initTopics();
    this.fill();
    return this.topic;
  }
}

const ff = new GenerateTopic(
  "Racoon",
  "/home/olga/dev/Bootcamp/Phase 1/week 2/day 5/SecondChance/topics/raccoon_flashcard_data.txt"
);
console.log(ff.generate());

module.exports = GenerateTopic;

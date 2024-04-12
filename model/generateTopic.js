/* eslint-disable no-unused-vars */
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
        message: "Выбери тему",
        choices: [
          { name: "Горы", value: 1 },
          { name: "Фильмы", value: 2 },
          { name: "Санкт-Петербург", value: 3 },
        ],
      },
    ]);
    // console.log(result1);

    for (let i = 0; i < arr.length; i += 5) {
      const question = arr[i];
      console.log(i);
      const answer = arr[i + 1];
      const answer1 = arr[i + 2];
      const answer2 = arr[i + 3];
      const quest = new Questions(question, answer, answer1, answer2);
      const result = await inquirer.prompt([
        {
          type: "list",
          name: "bonuses",
          message: quest.question,
          choices: [
            { name: quest.answer, value: 5 },
            { name: quest.answer1, value: 5 },
            { name: quest.answer2, value: 5 },
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
    // this.initTopics();
    this.fill();
    return this.topic;
  }
}
// let ff1,ff2,ff3
// if (result1.topic == 3) {
//    ff3 = new GenerateTopic(
//     'Racoon',
//     '/home/olga/dev/Bootcamp/Phase 1/week 2/day 5/SecondChance/topics/raccoon_flashcard_data.txt'
//   );
// } else if (result1.topic == 2) {
//    ff2 = new GenerateTopic(
//     'Racoon',
//     '/home/olga/dev/Bootcamp/Phase 1/week 2/day 5/SecondChance/topics/otter_flashcard_data.txt'
//   );
// } else if (result1.topic == 1) {
//    ff1 = new GenerateTopic(
//     'Racoon',
//     '/home/olga/dev/Bootcamp/Phase 1/week 2/day 5/SecondChance/topics/nighthawk_flashcard_data.txt'
//   );
// }

// console.log(ff1.generate());
// console.log(ff2.generate());
// console.log(ff3.generate());

const ff = new GenerateTopic(
  "Racoon1",
  "/home/olga/dev/Bootcamp/Phase 1/week 2/day 5/SecondChance/topics/raccoon_flashcard_data.txt"
);

console.log(ff.generate());

module.exports = GenerateTopic;

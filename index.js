const inquirer = require("inquirer");
const { EOL } = require("os");
const fs = require("fs");
// const GenerateTopic = require("./model/generateTopic");
// const ChoseTopic = require("./view/choseTopic");

// const listOfTopics = [];
// const racoon = new GenerateTopic("Racoon", "topics/raccoon_flashcard_data.txt");
// const topicRacoon = racoon.generate();
// listOfTopics.push(topicRacoon);
// const asker = new ChoseTopic(listOfTopics);
// asker.askTopic();
// asker.askQuestion();

inquirer
  .prompt([
    { type: "input", name: "username", message: "Введи имя:" },
    {
      type: "list",
      name: "bonuses",
      message: fs
        .readFileSync("topics/otter_flashcard_data.txt", "utf-8")
        .split(EOL)
        .map((el) => el),
      choices: [
        { name: "Не опаздывал", value: 0 },
        { name: "На 2-3 минутки", value: 2 },
        { name: "Опоздал и не сообщил", value: 5 },
      ],
    },
  ])
  .then((answers) => console.log(answers));

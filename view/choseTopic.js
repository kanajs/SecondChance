class ChoseTopic {
  countQuest = 0;

  countRight = 0;

  chosenTopic;

  constructor(listOfTopic) {
    this.listOfTopic = listOfTopic;
  }

  askTopic() {
    console.log(this.listOfTopic.join(""));
    const result = Number(process.argv[2]) - 1;
    this.chosenTopic = this.listOfTopics[result];
  }

  askQuestion() {
    const quests = this.chosenTopic.questions;
    for (let i = 0; i < quests.length; i += 1) {
      console.log(quests[i].question);
      const reply = process.argv[2];
      quests[i].compare(reply);
      this.countQuest += 1;
      if (quests[i](reply)) {
        console.log((this.countRight += 1));
      } else {
        console.log("You lose!");
        break;
      }
    }
  }
}

module.exports = ChoseTopic;

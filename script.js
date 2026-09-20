//Random generator for a number function
const randomNumbergenerator = (num) => {
  return Math.floor(Math.random() * num);
};

//Array with all messages create data
const arrayOfAllData = {
  signs: [
    "Capricorn",
    "Aquarius",
    "Pisces",
    "Aries",
    "Taurus",
    "Gemini",
    "Cancer",
    "Leo",
    "Virgo",
    "Libra",
    "Scorpio",
    "Sagittarius",
  ],
  daysOfTheWeek: [
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
    "Sunday",
  ],
  MoonInScorpio: [
    "asks you to do something for someone close to you today as a small gesture can bring you even closer.",
    "asks you to keep your emotions in check and not let them take over.",
    "asks you to keep yourself grounded through ups and downs today.",
    "asks you to give yourself time to process and handle your emotions.",
    "encourages you to pay attention to your emotions of pushing them aside.",
    "asks you to keep your temper under control especially when things get hectic.",
    "asks you to listen to your friends and give them the space to express how they feel.",
    "suggests that emotions you have been holding back may finally come to the surface so give yourself time to deal with them.",
    "reminds you to maintain a balance in your friendships and not let emotions affect your relationships.",
    "says today think about the people and things that genuinely make you happy and bring you peace.",
  ],
};

//Function to create a message
const createMessage = () => {
  const message = [];
  message.push(
    "Your sign is " +
      arrayOfAllData.signs[randomNumbergenerator(arrayOfAllData.signs.length)],
  );
  message.push(
    "Today is " +
      arrayOfAllData.daysOfTheWeek[
        randomNumbergenerator(arrayOfAllData.daysOfTheWeek.length)
      ],
  );
  message.push(
    "Moon in Scorpio " +
      arrayOfAllData.MoonInScorpio[
        randomNumbergenerator(arrayOfAllData.MoonInScorpio.length)
      ],
  );
  return message;
};

//Function to display the message
const displayMessage = () => {
  for (let line of createMessage()) {
    console.log(line);
  }
};

displayMessage();

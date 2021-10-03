const faker = require('faker');

const db = require('../config/connection');
const { User } = require('../models');

db.once('open', async () => {
  await User.deleteMany({});

  // create user data
  const userData = [];

  for (let i = 0; i < 50; i += 1) {
    const username = faker.internet.userName();
    const email = faker.internet.email(username);
    const password = faker.internet.password();

    //console.log("Email: ", email, " Password: ", password);

    userData.push({ username, email, password });
  }
  const username = "Timbo";
  const email = "timprimmer@gmail.com";
  const password = "Test1234";

  User.create({ username, email, password });

  userData.push({ username, email, password });
  const createdUsers = await User.collection.insertMany(userData);

  console.log('all done!');
  process.exit(0);
});

"use strict";

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert("Products", [
      {
        name: "Darth Vader Shirt",
        description: "100% cotton Darth Vader shirt",
        price: 10.0,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: "Baby Yoda mu",
        description: "Baby yoda print glass mug",
        price: 15.0,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: "Harry Potter Funko Pop",
        description: "Harry Potter Funko Pop",
        price: 30.0,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: "Avengers T-Shirt",
        description: "Avengers T-Shirt",
        price: 7.0,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
    ]);
  },
  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete("Products", null, {});
  },
};

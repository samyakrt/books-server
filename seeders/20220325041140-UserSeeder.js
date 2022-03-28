'use strict';
const { faker } = require('@faker-js/faker');
const { generateHash } = require('~utility/password')
module.exports = {
  async up (queryInterface, Sequelize) {

    const users = []
    
    for (let index = 0; index < 10; index++) {
      const user = {
        name: faker.name.findName(),
        email: faker.internet.email(),
        emailVerifiedAt: new Date(),
        password: generateHash('password'),
        userType: 1,
        createdAt: faker.date.recent(),
        updatedAt: faker.date.recent()
      }
      users.push(user)
    }

    await queryInterface.bulkInsert('Users',users)
    /**
     * Add seed commands here.
     *
     * Example:
     * await queryInterface.bulkInsert('People', [{
     *   name: 'John Doe',
     *   isBetaMember: false
     * }], {});
    */
  },

  async down (queryInterface, Sequelize) {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
  }
};

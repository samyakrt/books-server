'use strict';
const { faker } = require('@faker-js/faker');
module.exports = {
  async up (queryInterface, Sequelize) {

    const authors = []

    for (let index = 0; index < 10; index++) {
      
      const author = {
        name: faker.name.findName(),
        createdAt: faker.date.recent(),
        updatedAt: faker.date.recent(),
      }
      authors.push(author)
    }
    await queryInterface.bulkInsert('Authors',authors)
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

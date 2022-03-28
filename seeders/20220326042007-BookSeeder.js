'use strict';
const { Author } = require('~models')
const { faker } = require('@faker-js/faker')
module.exports = {
  async up (queryInterface, Sequelize) {
    const authors = await Author.findAll({ limit: 5 });

    const books = [];
    authors.map( author => {

      for (let index = 0; index < 3; index++) {    
        const book = {
          name: faker.company.catchPhrase(),
          isbn: faker.phone.phoneNumber(),
          price: faker.finance.amount(),
          addedBy: 1,
          authorId: author.id,
          createdAt: faker.date.recent(),
          updatedAt: faker.date.recent()
        }
        
        books.push(book);
      }
    })
    
    await queryInterface.bulkInsert('Books',books)

    
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

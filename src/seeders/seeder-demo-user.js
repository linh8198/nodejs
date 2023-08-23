'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    return queryInterface.bulkInsert('users', [{
 
     
      email: 'example@example.com',
      password: '123456',
      firstName: 'Linh',
      lastName: 'nguyen',
      address: 'Hai Duong',
      phonenumber: '123456789',
      gender: 1,
      roleId: 'R1',
      positionId: 'abc',
      image: 'bcd',
      createdAt: new Date(),
      updatedAt: new Date()

    }]);
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

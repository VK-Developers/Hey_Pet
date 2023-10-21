'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, _Sequelize) {
    await queryInterface.bulkInsert('adoptions', [
      {
        animal: 'Cachorro',
        name: 'Simba',
        description: 'lorem lorem lorem lorem lorem lorem',
        neutered: false,
        sex: true,
        user: 'vincenzo@adm.com',
        contact: '+55 13 55555-5555',
        region: 'Neverland',
        picture: 'https://www.atespets.com.br/adoptions/1_Simba.png',
        accepted: true,
        created: new Date(),
      },
      {
        name: 'Scar',
        animal: 'Cachorro',
        description: 'lorem lorem lorem lorem lorem lorem',
        neutered: true,
        sex: true,
        user: 'vincenzo@adm.com',
        contact: '+55 13 55555-5555',
        region: 'Neverland',
        picture: 'https://www.atespets.com.br/adoptions/2_Scar.png',
        accepted: true,
        created: new Date(),
      },
      {
        name: 'Mufasa',
        animal: 'Cachorro',
        description: 'lorem lorem lorem lorem lorem lorem',
        neutered: false,
        sex: false,
        user: 'vincenzo@adm.com',
        contact: '+55 13 55555-5555',
        region: 'Neverland',
        picture: 'https://www.atespets.com.br/adoptions/3_Mufasa.webp',
        accepted: true,
        created: new Date(),
      },
      {
        name: 'Nala',
        animal: 'Cachorro',
        description: 'lorem lorem lorem lorem lorem lorem',
        neutered: false,
        sex: true,
        user: 'vincenzo@adm.com',
        contact: '+55 13 55555-5555',
        region: 'Neverland',
        picture: 'https://www.atespets.com.br/adoptions/4_Nala.webp',
        accepted: true,
        created: new Date(),
      },
      {
        name: 'Sarabi',
        animal: 'Cachorro',
        description: 'lorem lorem lorem lorem lorem lorem',
        neutered: false,
        sex: true,
        user: 'vincenzo@adm.com',
        contact: '+55 13 55555-5555',
        region: 'Neverland',
        picture: 'https://www.atespets.com.br/adoptions/5_Sarabi.jpg',
        accepted: true,
        created: new Date(),
      },
      {
        name: 'Timao',
        animal: 'Gato',
        description: 'lorem lorem lorem lorem lorem lorem',
        neutered: true,
        sex: true,
        user: 'vincenzo@adm.com',
        contact: '+55 13 55555-5555',
        region: 'Neverland',
        picture: 'https://www.atespets.com.br/adoptions/6_Timao.jpg',
        accepted: true,
        created: new Date(),
      },
      {
        name: 'Zazu',
        animal: 'Gato',
        description: 'lorem lorem lorem lorem lorem lorem',
        neutered: false,
        sex: false,
        user: 'vincenzo@adm.com',
        contact: '+55 13 55555-5555',
        region: 'Neverland',
        picture: 'https://www.atespets.com.br/adoptions/7_Zazu.jpg',
        accepted: true,
        created: new Date(),
      },
      {
        name: 'Pumba',
        animal: 'Gato',
        description: 'lorem lorem lorem lorem lorem lorem',
        neutered: true,
        sex: false,
        user: 'vincenzo@adm.com',
        contact: '+55 13 55555-5555',
        region: 'Neverland',
        picture: 'https://www.atespets.com.br/adoptions/8_Pumba.jpeg',
        accepted: true,
        created: new Date(),
      },
      {
        name: 'Rafiki',
        animal: 'Gato',
        description: 'lorem lorem lorem lorem lorem lorem',
        neutered: true,
        sex: false,
        user: 'vincenzo@adm.com',
        contact: '+55 13 55555-5555',
        region: 'Neverland',
        picture: 'https://www.atespets.com.br/adoptions/9_Rafiki.jpg',
        created: new Date(),
      },
    ], {});
  },

  async down (queryInterface, _Sequelize) {
    await queryInterface.bulkDelete('adoptions', null, {});
  }
};

'use strict';

const phonebook = [
    { name: 'Marcus Aurelius', phone: '+380469575433' },
    { name: 'Timur', phone: '+380601873628' }
];

const findPhoneByName = (name) => {
    for (const obj of phonebook) {
      if (obj.name === name) return obj.phone;
    };

    return 'Name not found';
};

module.exports = { phonebook, findPhoneByName };
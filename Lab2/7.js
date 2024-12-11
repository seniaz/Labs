'use strict'

'use strict';

const fn = () => {
    const obj1 = { name: 'Kletsenko' };
    let obj2 = { name: 'Kletsenko' };

    obj1.name = 'Oksana';
    obj2.name = 'Oksana';
    
    obj2 = { name: 'Kletsenko Oksana' };

};

module.exports = { fn };
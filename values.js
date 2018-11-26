const db = require('better-sqlite3')('restaurant.db');

var table = 'menu (itemID, Name, Price, Ingredients)';
var values = [
    '(001, ‘Cheeseburger’, 11.99, ‘Bun, Beef Patty, Ketchup’)',
    '(002, ‘Chicken Burger’, 11.99, ‘Bun, Chicken Strips, Ketchup’)',
    '(003, ‘Chicken Strips and Fries’, 14.99, ‘Chicken Strips, Fries’)',
    '(004, ‘Fries’, 5.99, ‘Fries’)',
    '(005, ‘Extra Ketchup’, 0.50, ‘Ketchup’)'
];

values.map((v) => {
    db.run('insert into ' + table + ' values ' + v + ';');
});

db.close();
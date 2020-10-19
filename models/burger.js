//Requirements
const orm = require("../config/orm");

//Input burger information into ORM functions
const burger = {

    selectAll: function(cb) {
        orm.selectAll("burgers", function(res) {
            cb(res);
        });
    },

    insertOne: function(val, cb) {
        orm.insertOne("burgers", "burger_name", val, function(res) {
            cb(res);
        });
    },

    updateOne: function(boolean, condition, cb) {
        orm.updateOne("burgers", "devoured", boolean, condition, function(res) {
            cb(res);
        });
    },
}


module.exports = burger;
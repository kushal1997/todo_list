const List = require("../models/list");

module.exports.home = (req, res) => {
    List.find({})
        .then(lists => {
            res.render('home', {
                title: 'Home Page',
                todo_list: lists,
            });
        })
        .catch(err => {
            console.log('Error getting contacts from mongo db', err);
            return res.status(500).send('Internal Server Error');
        })
}
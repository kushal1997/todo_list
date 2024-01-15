const List = require('../models/list')

module.exports.list = (req, res) => {
    List.create({
        descr: req.body.descr,
        category: req.body.category,
        date: req.body.date
    })
        .then(newList => {
            console.log('*******', newList)
            res.redirect('back');
        })
        .catch(err => {
            console.error('Error creating contact:', err);
            res.status(500).send('Error creating contact');
        })
}
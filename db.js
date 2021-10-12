const mongoose = require('mongoose');

mongoose.connect('mongodb+srv://admin:admin@cluster0.qubsi.mongodb.net/raza', { useNewUrlParser: true }, (err) => {
    if (!err) { console.log('MongoDB Connection Succeeded.') }
    else { console.log('Error in DB connection : ' + err) }
});

require('./employee.model');
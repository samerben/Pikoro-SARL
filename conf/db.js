const mongoose = require('mongoose');
            
mongoose.connect('mongodb+srv://Task:Task123456@cluster0.l51rb.mongodb.net/Task?retryWrites=true&w=majority',
{ useNewUrlParser : true, useUnifiedTopology : true})
            .then(()=> console.log('Mongo is UP.'))
            .catch( err => console.log('Mongo is Down. Raison :', err));
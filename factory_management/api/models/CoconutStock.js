const mongoose = require('mongoose');

const ToDoSchema = mongoose.Schema;

const coconutstockSchema = new ToDoSchema({
    locationCode: {
        type: String,
        require: true
        
    },
    supplierName: {
        type: String,
        require: true
        
    },
    quantity: {
        type: Number,
        require: true
    
    },
    date: {
        type: String,
        require: true
    
    },
})

module.exports = mongoose.model('coconutstock',coconutstockSchema);
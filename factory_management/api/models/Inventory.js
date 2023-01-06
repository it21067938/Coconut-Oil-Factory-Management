const mongoose = require('mongoose');

const ToDoSchema = mongoose.Schema;

const inventorySchema = new ToDoSchema({
    productId: {
        type: String,
        require: true
        
    },
    productName: {
        type: String,
        require: true
        
    },
    quantity: {
        type: Number,
        require: true
    
    },
    costPrice: {
        type: Number,
        require: true
    
    },
})

module.exports = mongoose.model('inventory',inventorySchema);

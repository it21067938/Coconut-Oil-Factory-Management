const express =  require("express");
const mongoose =  require("mongoose");
const bodyParser =  require("body-parser");
const cors =  require("cors");
const cookieParser = require('cookie-parser');
const dotenv =  require("dotenv");
const app = express();
require("dotenv").config();


//port number
const PORT = 8889;

app.use(cors());
app.use(bodyParser.json());
app.use(cookieParser());
app.use(express.json());

//DB connection
const URL = process.env.MONGODB_URL;

mongoose.connect(URL, {
    //useCreateIndex: true,
    useNewUrlParser: true,
    useUnifiedTopology: true,
    //useFindAndModify: false
});

const connection = mongoose.connection;
connection.once("open", () =>{
    console.log("Mongodb Connection Success !!!");
})

app.listen(PORT, () => {
    console.log(`Server is up and running at port ${PORT}`)
})




//Buyer 
const buyer = require("./routes/Buyer-routes");
app.use('/Buyer', buyer);

//Send Email
const email = require("./routes/AcceptedOrder-routes");
app.use('/Buyer', email);

//Order 
const pending_order = require("./routes/PendingOrder-routes");
app.use('/order', pending_order);

//Accepted Orders (for accept in pending order side)
const accepted = require("./routes/PendingOrder-routes");
app.use('/order', accepted);

//Accepted Orders
const accepted_order = require("./routes/AcceptedOrder-routes");
app.use('/Accept_order', accepted_order);



//Manager login 
const managers = require("./routes/Manager-Login-routes");
app.use('/Manager', managers);

//Inventory add
const inventory = require("./routes/Inventory-routes");
app.use("/Inventory" ,inventory);


//Driver add
const driver = require("./routes/Driver-routes.js");
app.use("/Driver",driver)

//Vehicle add
const vehicle = require("./routes/Vehicle-routes");
app.use("/Vehicle",vehicle)


//Delivery add
const delivery = require("./routes/Delivery-route");
app.use("/Delivery",delivery)


//Manage Income
const Income = require("./routes/ManageIncome-routes.js");
app.use("/ManageIncome",Income)

//Manage Expenses
const Expenses = require("./routes/ManageExpenses-routes.js");
app.use("/ManageExpenses",Expenses)

//CoconutStock add
const coconutstock = require("./routes/CoconutStock-routes.js");
app.use("/CoconutStock" ,coconutstock);

//manufacture
const postRoutes = require('./routes/posts');
app.use("/post",postRoutes);
//calculate Salary
const CalSalary = require("./routes/CalculateSalary-routes.js");
app.use("/CalculateSalary",CalSalary)

//bank ledger credit side
const bankcredit = require("./routes/BankLedger_C-routes.js");
app.use("/CreditBankLedger",bankcredit)

//bank ledger debit side
const bankdebit = require("./routes/BankLedger_D-routes.js");
app.use("/DebitBankLedger",bankdebit)

//purchase ledger credit side
const purchasecredit = require("./routes/PurchaseLedger_C-routes.js");
app.use("/CreditPurchaseLedger",purchasecredit)

//purchase ledger debit side
const purchasedebit = require("./routes/PurchaseLedger_D-routes.js");
app.use("/DebitPurchaseLedger",purchasedebit)


//sales ledger credit side
const salescredit = require("./routes/SalesLedger_C-routes.js");
app.use("/CreditSalesLedger",salescredit)

//sales ledger debit side
const salesdebit = require("./routes/SalesLedger_D-routes.js");
app.use("/DebitSalesLedger",salesdebit)

//payble ledger credit side
const payblecredit = require("./routes/PaybleLedger_C-routes.js");
app.use("/Payblecredit",payblecredit)

//payble ledger debit side
const paybledebit = require("./routes/PaybleLedger_D-routes.js");
app.use("/Paybledebit",paybledebit)

//Receivable ledger credit side
const Receivablecredit = require("./routes/ReceivableLedger_C-routes.js");
app.use("/ReceivableCredit",Receivablecredit)

//Receivable ledger debit side
const Receivabledebit = require("./routes/ReceivableLedger_D-routes.js");
app.use("/ReceivableDebit",Receivabledebit)

//Employee Registration side
const employeeRoutes = require('./routes/Employee')
app.use("/employeeRoutes",employeeRoutes);

//Employee Attendance side
const attendanceRoutes = require('./routes/Attendance')
app.use("/attendance",attendanceRoutes);

//invoice details 
const invoice = require('./routes/invoice-router');
app.use ("/invoiceDetails",invoice);

//invoice items 
const items = require('./routes/itemInvoice-router');
app.use ("/itemsDetails",items);


//Supplier 
const supplier = require('./routes/supplier_route');
app.use ("/supplier",supplier);

//Admin 
const admin = require('./routes/managerRoutes');
app.use ("/admin",admin);

//Employees
const employees = require('./routes/employees');
app.use("/employees",employees);

//Showroom
const showroom = require('./routes/showrooms');
app.use("/showroom",showroom);
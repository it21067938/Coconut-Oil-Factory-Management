const invoice = require('../models/createInvoice-models');


//insert income

const AddInvoice = async(req,res)=> {

    const InvoiceNo = req.body.invoiceNo;
    const Date = req.body.date;
    const CompanyName = req.body.companyName;
    const Address = req.body.address;
    const ContactNo = req.body.contactNo;
    

    
    const NewInvoice = new invoice ({
        InvoiceNo ,
        Date,
        CompanyName,
        Address,
        ContactNo
        



    });

    NewInvoice.save().then(()=>{
        res.json("invoice created!")
    }).catch((err)=>{
        console.log(err.message);
    })



    


}

// veiw income

const viewInvoice = async(req, res) => {
    invoice.find().then((invoice)=>{
        res.json(invoice)
    }).catch((err)=>{
        console.log(err.message)
    })
}

//update income

const updateInvoice = async(req, res) => {

    const InvoiceNo = req.body.invoiceNo;
    const Date = req.body.date;
    const CompanyName = req.body.companyName;
    const Address = req.body.address;
    const ContactNo = req.body.contactNo;

    const updateInvoice = {
        InvoiceNo ,
        Date,
        CompanyName,
        Address,
        ContactNo

    }

    const update = await invoice.updateMany(updateInvoice)
      .then(()=> {
        res.status(200).send({status: "Invoice updated!"})
        console.log(updateInvoice)
    }).catch((err) => {
        console.log(err.message);
        res.status(500).send({status: "Error with updating Invoice!", error:err.message});   
    })   

   
}

//delete Income
const deleteInvoice = async(req, res) => {
    

    await invoice.deleteMany().then(() => {
        res.status(200).send({status: "invoice details deleted!"});
    }).catch((err) => {
        console.log(err.message);
        res.status(500).send({status: "Error with delete Expenses!"});
    })


}



  // income by id
  const getInvoiceId = async (req, res) => {
    let id = req.params.id;
    await invoice.findById(id)
      .then((response) => {
        res.status(200).json(response);
        console.log(res);
      })
      .catch((err) => {
        res
          .status(500)
          .send({ status: "Error with invoice details", error: err.message });
      });
  };

exports.AddInvoice = AddInvoice;
exports.viewInvoice = viewInvoice;
exports.updateInvoice = updateInvoice;
exports.deleteInvoice = deleteInvoice;
exports.getInvoiceId = getInvoiceId;
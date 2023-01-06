const CalculateSalary = require('../models/CalculateSalary-models');


//insert details

const AddDetails = async(req,res)=> {

    const EmpID = req.body.EmpID;
    const Month = req.body.month;
    const Name = req.body.name;
    const BasicSalary = parseFloat(req.body.basicsalary);
    const FixedAllowance = parseFloat(req.body.fixedallowance);
    const OtRate = parseFloat(req.body.otrate);
    const OtHours = parseFloat(req.body.othours);
    const SalaryAdvanced = parseFloat(req.body.salaryadvanced);
    const Deductions = parseFloat(req.body.deduction);
    const otIncome = OtRate * OtHours;
    const GrossSalary = BasicSalary + FixedAllowance + otIncome - (SalaryAdvanced + Deductions ) ;
    const EPF = BasicSalary * 8 / 100 ;
    const NetSalary = GrossSalary -EPF ;


    const NewSalary = new CalculateSalary({
        EmpID,
        Month,
        Name,
        BasicSalary,
        FixedAllowance,
        OtRate,
        OtHours,
        SalaryAdvanced,
        Deductions,
        GrossSalary,
        EPF,
        NetSalary

    });

    NewSalary.save().then(()=>{
        res.json("Salary calculated!")
    }).catch((err)=>{
        console.log(err.message);
    })


}

// veiw details

const ViewDetails = async(req, res) => {
    CalculateSalary.find().then((CalculateSalary)=>{
        res.json(CalculateSalary)
    }).catch((err)=>{
        console.log(err.message)
    })
}

// update details

const UpdateDetails = async(req, res, next) => {
    let userId = req.params.id;
 
    
   
    const empID = req.body.EmpID;
    const month = req.body.Month;
    const name = req.body.Name;
    const basicSalary = req.body.BasicSalary;
    const fixedAllowance = parseFloat(req.body.FixedAllowance);
    const otRate = parseFloat(req.body.OtRate);
    const otHours = parseFloat(req.body.OtHours);
    const salaryAdvanced = parseFloat(req.body.SalaryAdvanced);
    const deductions = parseFloat(req.body.Deductions);
    const otIncome = otRate * otHours;
    const deduc = (salaryAdvanced + deductions);
    const grossSalary = (basicSalary + fixedAllowance + otIncome) - deduc ;
    const epf = basicSalary * 8 / 100 ;
    const netSalary = grossSalary - epf ;

  

    

    
    const UpdateDetails = {
      
        EmpID : empID,
        Month : month,
        Name : name,
        BasicSalary : basicSalary,
        FixedAllowance : fixedAllowance,
        OtRate : otRate,
        OtHours : otHours,
        SalaryAdvanced : salaryAdvanced,
        Deductions : deductions,
        GrossSalary : grossSalary,
        EPF : epf,
        NetSalary : netSalary
      

    
 }

 console.log(UpdateDetails)

    const update = await CalculateSalary.findByIdAndUpdate(userId, UpdateDetails)
    .then(()=> {
        res.status(200).send({status: "Salary updated!"})
    }).catch((err) => {
        // console.log(err.message);
        res.status(500).send({status: "Error with updating Salary!", error:err.message});   
    })   

   
}


//delete salary
const deleteDetails = async(req, res) => {
    let userId = req.params.EmpID;

    await CalculateSalary.findOneAndDelete(userId).then(() => {
        res.status(200).send({status: "Salary details deleted!"});
    }).catch((err) => {
        console.log(err.message);
        res.status(500).send({status: "Error with delete Salary details!"});
    })

}

//by id
const getSalaryID = async (req, res) => {
    let id = req.params.id;
    await CalculateSalary.findById(id)
      .then((response) => {
        res.status(200).json(response);
        console.log(res);
      })
      .catch((err) => {
        res
          .status(500)
          .send({ status: "Error with salary details", error: err.message });
      });
  };


exports.AddDetails = AddDetails;
exports.ViewDetails = ViewDetails;
exports.UpdateDetails = UpdateDetails;
exports.deleteDetails = deleteDetails;
exports.getSalaryID = getSalaryID;

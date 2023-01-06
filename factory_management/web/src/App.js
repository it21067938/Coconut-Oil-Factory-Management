import React from "react";
import { BrowserRouter, Route } from "react-router-dom";


//manufacture
import addPost from './components/manufacture/addpost';
import postDetails from './components/manufacture/postDetails';
import updatePost from './components/manufacture/updatePost';
import manufactureDashboard from './components/manufacture/dashboardmanu'

//Inventory
import InventoryAdd from './components/Inventory/InventroyAdd';
import InventoryList from './components/Inventory/InventoryList';
import InventoryUpdate from './components/Inventory/InventoryUpdate';
import InventoryManufactureView from './components/Inventory/InventoryManufactureView';
import InventoryDashboard from './components/Inventory/InventoryDashboard'

//Coconut Stock
import CoconutStockList from './components/CoconutStock/CoconutStockList';
import CoconutStockAdd from './components/CoconutStock/CoconutStockAdd';
import CoconutStockUpdate from './components/CoconutStock/CoconutStockUpdate';

// finance manager
import Dashboard from './components/Finance/Dashboard'
import addIncome from './components/Finance/AddIncome'
import AddExpenses from './components/Finance/AddExpenses';
import displayIncome from './components/Finance/DisplayIncome';
import displayExpenses from './components/Finance/displayExpenses';
import calSalary from './components/Finance/calSalary';
import displaySalary from './components/Finance/displaySalary';
import Ledgers from './components/Finance/ledgers';
import PurchaseD from './components/Finance/purchaseDebit';
import PurchaseC from './components/Finance/purchaseCredit';
import DisplayPurchase from './components/Finance/displayPurchase';
import SalesD from './components/Finance/salesDebit';
import SalesC from './components/Finance/salesCredit';
import DisplaySales from './components/Finance/displaySales';
import DisplayBank from './components/Finance/displayBank';
import BankD from './components/Finance/bankDebit';
import BankC from './components/Finance/bankCredit';
import DisplayPayble from './components/Finance/displayPayble';
import PaybleC from './components/Finance/paybleC';
import PaybleD from './components/Finance/paybleD';
import DisplayReceive from './components/Finance/displayReceivable';
import ReceiveD from './components/Finance/receivableD';
import ReceiveC from './components/Finance/receivableC';
import UpdateIncome from './components/Finance/updateIncome';
import UpdateExpenses from './components/Finance/updateExpenses';
import UpdatePurchaseC from './components/Finance/updatePurchaseC';
import UpdatePurchaseD from "./components/Finance/updatePurchaseD";
import UpdateReceivableC from "./components/Finance/updateReceivableC";
import UpdateReceivableD from "./components/Finance/updateReceivableD";
import UpdateSalesC from "./components/Finance/updateSalesC";
import UpdateSalesD from "./components/Finance/updateSalesD";
import UpdateBankC from "./components/Finance/updateBankC";
import UpdateBankD from "./components/Finance/updateBankD";
import UpdatePaybleD from "./components/Finance/updatePaybleD";
import UpdatePaybleC from "./components/Finance/updatePaybleC";
import UpdateSalary from "./components/Finance/updateSalary";
import AddDetails from "./components/Finance/invoiceDetails";
import DisplayPreview from "./components/Finance/invoicePreview";
import PrintInvoice from "./components/Finance/printInvoice";
import Accepted_Order from "./components/Finance/displayAcceptOrders";
import attendance from "./components/Finance/attendance";
import profile from "./components/Finance/myprofile";

//Sales Manager
import Accepted_Orders from './components/Order/Accepted_Orders';
import Pending_Orders from './components/Order/Pending_Orders';
import CheckInventory from './components/Order/CheckInventory';
import Change_Date from './components/Order/Change_Date';
import SaledsM_Home from './components/Order/SaledsM_Home';


//Buyer
import BuyerProfile from "./components/Buyer/BuyerProfile";
import Place_Order from "./components/Buyer/Place_Order";
import Buyer_Home from "./components/Buyer/Buyer_Home";
import profile_update from "./components/Buyer/profile_update";
import Buyer_Login from './components/Buyer/buyerLogin';
import Buyer_Signup from './components/Buyer/Buyer_Signup';
import BuyerNavbar from './components/Buyer/BuyerNavbar';

//NavBar Tabs
import Contact_Us from "./components/NavbarTabs/Contact_Us";
import Overview from "./components/NavbarTabs/Overview";
import Products from "./components/NavbarTabs/Products";
import Services from "./components/NavbarTabs/Services";
import Login from "./components/NavbarTabs/Login";
import Signup from "./components/NavbarTabs/Signup";



//driver
import AddDriver from "./components/Transport/AddDriver";
import AddVehicle from "./components/Transport/AddVehicle";
import AddDelivery from "./components/Transport/AddDelivery";
import ViewDrivers from "./components/Transport/ViewDrivers";
import ViewVehicles from "./components/Transport/ViewVehicles";
import ViewDelivery from "./components/Transport/ViewDelivery";
import GetOrderDetails from "./components/Transport/GetOrderDetails";
import UpdateDriver from "./components/Transport/UpdateDriver";
import UpdateDelivery from "./components/Transport/UpdateDelivery";
import UpdateVehicle from "./components/Transport/UpdateVehicle";
import Report from "./components/Transport/Report";
import Home from "./components/Transport/Home";

<<<<<<< HEAD

import mannagerLogin from './components/Supplier/mannagerLogin';


// import mannagerLogin from "./components/Supplier/mannagerLogin";


=======
//Manager login
import mannagerLogin from './components/Supplier/mannagerLogin';

>>>>>>> 88365df6e8d8a5431a3a2ef7803eb50626e6afe5
//supplier
//import SupHeader from './components/Supplier/Header';
import AddCocoForm from './components/Supplier/AddCocoForm';
import SupLogin from './components/Supplier/SuplierLogin'
import ShowNeededCoco from './components/Supplier/ShowNeededCoco';
import PendingSup from './components/Supplier/ViewPending';
import SupUpdate from './components/Supplier/SupUpdate'
import SuplierSignUp from './components/Supplier/SuplierSignUp';
import SupplierProfile from './components/Supplier/supplierProfile';
import SupProfileUpdate from './components/Supplier/supProfileUpdate';
import supChangepass from './components/Supplier/supplierChangePassword';
import ManagerLogin from './components/Supplier/mannagerLogin';
import ManagerRegisterForm from "./components/Supplier/managerRegister";
import AllSuppliers from './components/Supplier/ManagersSupplierView';
import ManagersView from './components/Supplier/ManagersSupplyView';
import RequestCoco from "./components/Supplier/RequestCoco";
import Logintest from "./components/Supplier/testlogin";

<<<<<<< HEAD




=======
>>>>>>> 88365df6e8d8a5431a3a2ef7803eb50626e6afe5
//Staff Management 
import OwnerDash from './components/Staff/DashBoard/OwnerDash';
import AddEmployee from './components/Staff/OwnerManagement/AddEmployee';
import EmployeeDash from './components/Staff/OwnerManagement/EmployeeDash';
import OwnerReport from './components/Staff/OwnerManagement/OwnerReport';
import EditEmployee from './components/Staff/OwnerManagement/EditEmployee';
import EmployeeDetails from './components/Staff/OwnerManagement/EmployeeDetails';
import StaffDash from './components/Staff/DashBoard/StaffDash';

//Staff Attendance
import ShowRoomDash from './components/Staff/DashBoard/ShowRoomDash';
import ShowRoomHome from './components/Staff/AttendanceManagement/ShowRoomHome';
import showRreportgen from './components/Staff/AttendanceManagement/AttendaceDash';
import AttendancePost from './components/Staff/AttendanceManagement/AttendancePost';
import AttendanceEdit from './components/Staff/AttendanceManagement/AttendanceEdit';
import ShowRoomPostDetails from './components/Staff/AttendanceManagement/ShowRoomPostDetails';

<<<<<<< HEAD
=======

>>>>>>> 88365df6e8d8a5431a3a2ef7803eb50626e6afe5
function App() {
  return (

    <BrowserRouter>

      <Route path="/mannagerLogin" component={mannagerLogin}></Route>

      {/* NavBar Tabs */}
      <Route path="/contactUs" component={Contact_Us}></Route>
      <Route path="/overview" component={Overview}></Route>
      <Route path="/products" component={Products}></Route>
      <Route path="/services" component={Services}></Route>
      <Route path="/login" component={Login}></Route>
      <Route path="/Signup" component={Signup}></Route>

      {/* Order */}
      <Route path="/pending_orders" component={Pending_Orders}></Route>
      <Route path="/accepted_orders" component={Accepted_Orders}></Route>
      <Route path="/checkInventory" component={CheckInventory}></Route>
      <Route path="/change_date/:id" component={Change_Date}></Route>
      <Route path="/sm_home" component={SaledsM_Home}></Route>

      {/* Buyer */}
      <Route path="/profile" component={BuyerProfile}></Route>
      <Route path="/placeOrder" component={Place_Order}></Route>
      <Route path="/buyer_home" component={Buyer_Home}></Route>
      <Route path="/profile_update" component={profile_update}></Route>
      <Route path="/Buyer_Login" component={Buyer_Login}></Route>
      <Route path="/Buyer_Signup" component={Buyer_Signup}></Route>
      <Route path="/BuyerNavbar" component={BuyerNavbar}></Route>


      {/* supplier management */}
      <Route path="/supplierlogin" component={SupLogin} />
      <Route path="/addcoco" component={AddCocoForm} />
      <Route path="/formupdate/:id" component={SupUpdate} />
      <Route path="/viewpending" component={PendingSup} />
      <Route path="/home" component={ShowNeededCoco} />
      <Route path="/supplierregistaration" component={SuplierSignUp} />
      <Route path="/supplierprofile" component={SupplierProfile} />
      <Route path="/supplierprofileupdate" component={SupProfileUpdate} />
      <Route path="/supChangepass" component={supChangepass} />
      <Route path="/managerlogin" component={ManagerLogin} />
      <Route path='/managerregister' component={ManagerRegisterForm} />
      <Route path="/allsupply" component={ManagersView} />
      <Route path="/allsuppliers" component={AllSuppliers} />
      <Route path="/reqcoco" component={RequestCoco} />
      <Route path="/test" component={Logintest} />


      {/* finance manager     */}
      <Route path="/dash" exact component={Dashboard} />
      <Route path="/disI" exact component={displayIncome} />
      <Route path="/addI" exact component={addIncome} />
      <Route path="/updateI" exact component={UpdateIncome} />
      <Route path="/addE" exact component={AddExpenses} />
      <Route path="/disE" exact component={displayExpenses} />
      <Route path="/updateE" exact component={UpdateExpenses} />
      <Route path="/salD" exact component={displaySalary} />
      <Route path="/calcSal" exact component={calSalary} />
      <Route path="/ledger" exact component={Ledgers} />
      <Route path="/purchaseD" exact component={PurchaseD} />
      <Route path="/purchaseC" exact component={PurchaseC} />
      <Route path="/displayPurchase" exact component={DisplayPurchase} />
      <Route path="/salesD" exact component={SalesD} />
      <Route path="/salesC" exact component={SalesC} />
      <Route path="/displaySales" exact component={DisplaySales} />
      <Route path="/displayBank" exact component={DisplayBank} />
      <Route path="/bankD" exact component={BankD} />
      <Route path="/bankC" exact component={BankC} />
      <Route path="/displayPayble" exact component={DisplayPayble} />
      <Route path="/paybleD" exact component={PaybleD} />
      <Route path="/paybleC" exact component={PaybleC} />
      <Route path="/displayReceive" exact component={DisplayReceive} />
      <Route path="/receiveD" exact component={ReceiveD} />
      <Route path="/receiveC" exact component={ReceiveC} />
      <Route path="/updateIncome/:id" exact component={UpdateIncome} />
      <Route path="/updateExpenses/:id" exact component={UpdateExpenses} />
      <Route path="/updatePurchaseC/:id" exact component={UpdatePurchaseC} />
      <Route path="/UpdatePurchaseD/:id" exact component={UpdatePurchaseD} />
      <Route path="/updateReceivableC/:id" exact component={UpdateReceivableC} />
      <Route path="/updateReceivableD/:id" exact component={UpdateReceivableD} />
      <Route path="/updateSalesC/:id" exact component={UpdateSalesC} />
      <Route path="/updateSalesD/:id" exact component={UpdateSalesD} />
      <Route path="/updateBankC/:id" exact component={UpdateBankC} />
      <Route path="/updateBankD/:id" exact component={UpdateBankD} />
      <Route path="/UpdatePaybleD/:id" exact component={UpdatePaybleD} />
      <Route path="/UpdatePaybleC/:id" exact component={UpdatePaybleC} />
      <Route path="/UpdateSalary/:id" exact component={UpdateSalary} />
      <Route path="/addDetails" exact component={AddDetails} />
      <Route path="/preview" exact component={DisplayPreview} />
      <Route path="/print" exact component={PrintInvoice} />
      <Route path="/orders" exact component={Accepted_Order} />
      <Route path="/attendance" exact component={attendance} />
      <Route path="/myprofile" exact component={profile} />


      {/* Transport */}
      <Route path="/AddDriver" component={AddDriver}></Route>
      <Route path="/AddVehicle" component={AddVehicle}></Route>
      <Route path="/AddDelivery" component={AddDelivery}></Route>
      <Route path="/ViewDrivers" component={ViewDrivers}></Route>
      <Route path="/ViewVehicles" component={ViewVehicles}></Route>
      <Route path="/ViewDelivery" component={ViewDelivery}></Route>
      <Route path="/GetOrderDetails" component={GetOrderDetails}></Route>
      <Route path="/UpdateDriver/:id" component={UpdateDriver}></Route>
      <Route path="/UpdateDelivery/:id" component={UpdateDelivery}></Route>
      <Route path="/UpdateVehicle/:id" component={UpdateVehicle}></Route>
      <Route path="/GetOrderDetails" component={GetOrderDetails}></Route>
      <Route path={"/Report"} component={Report}></Route>
      <Route path="/TransportHome" component={Home}></Route>


      {/*manufacture*/}
      <Route path="/post" exact component={addPost}></Route>
      <Route path="/postDetails" component={postDetails}></Route>
      <Route path="/update/:id" component={updatePost}></Route>
      <Route path="/manuDash" component={manufactureDashboard}></Route>

      {/* Inventory */}
      <Route path="/inventoryadd" component={InventoryAdd}></Route>
      <Route path="/inventory" component={InventoryList}></Route>
      <Route path="/inventoryupdate/:id" component={InventoryUpdate}></Route>
      <Route path="/inventorymanufactureview" component={InventoryManufactureView}></Route>
      <Route path="/inventorydash" component={InventoryDashboard}></Route>

      {/* CoconutStock */}
      <Route path="/coconutstockadd" component={CoconutStockAdd}></Route>
      <Route path="/coconutstock" component={CoconutStockList}></Route>
      <Route path="/coocnutstockupdate/:id" component={CoconutStockUpdate}></Route>

<<<<<<< HEAD
      {/* Manufacture */}
      <Route path="/post" exact component={addPost}></Route>
      <Route path="/postDetails" component={postDetails}></Route>
      <Route path="/update/:id" component={updatePost}></Route>
      <Route path="/manuDash" component={manufactureDashboard}></Route>

=======
>>>>>>> 88365df6e8d8a5431a3a2ef7803eb50626e6afe5

      {/* Staff Management */}
      <Route path="/staff_dash" component={OwnerDash}></Route>
      <Route path="/EMD" component={EmployeeDash}></Route>
      <Route path="/addEmployee" component={AddEmployee}></Route>
      <Route path="/OwnerReport" component={OwnerReport}></Route>
      <Route path="/editEmployee/:id" component={EditEmployee}></Route>
      <Route path="/employeeDet/:id" component={EmployeeDetails}></Route>
      <Route path="/staff_home" component={StaffDash}></Route>

      <Route path="/dashshow" component={ShowRoomDash}></Route>
      <Route path="/SRH" component={ShowRoomHome}></Route>
      <Route path="/SRrg" component={showRreportgen}></Route>
      <Route path="/showroomadd" component={AttendancePost}></Route>
      <Route path="/showroomedit/:id" component={AttendanceEdit}></Route>
      <Route path="/showroompost/:id" component={ShowRoomPostDetails}></Route>


    </BrowserRouter>

  );

}

export default App;


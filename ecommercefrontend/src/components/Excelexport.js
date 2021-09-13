// import React from 'react'
// import {Users} from "./Users"
// import {ExportReactCSV} from "./ExportReactCSV"

// class  Excelexport extends React.Component {

//  users = () => {
//     let users = []
//     for (let i = 0; i <= 25; i++) {
//       users.push({firstName: `first${i}`, lastName: `last${i}`,
//       email: `abc${i}@gmail.com`, address: `000${i} street city, ST`, zipcode: `0000${i}`});
//     }
//     return users;
//   }
//  state = {
//    users: this.users(),
//     fileName: 'users'
//   }
  
// render(){
//     return (
//         <div>
//             <div>
//             <ExportReactCSV csvData={this.state.users} fileName={this.state.fileName} />
//             </div>

//             <div>
//                 <Users users={this.users()}/>
//             </div>
//         </div>
//     )
//     }
// }

// export default Excelexport

import React,{useState} from 'react'
import * as FileSaver from "file-saver";
import * as XLSX from "xlsx";



const Excelexport = () => {

     const fileType =
    "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet;charset=UTF-8";
  const fileExtension = ".xlsx";

    const[name,setname] = useState("")
    const[address,setaddress] = useState("")
    const[email,setemail] = useState("")
    const[phonenumber,setphonenumber] = useState("")

// const exportToCSV = () => {
//     const fileName = "abc";
//     const apiData = ([{"name":"raman","age":"26","surname":"tripathi"},{"name":"deepali","age":"21","surname":"katara"}]);
// console.log(apiData);
//     const ws = XLSX.utils.json_to_sheet(apiData);
//     const wb = { Sheets: { data: ws }, SheetNames: ["data"] };
//     const excelBuffer = XLSX.write(wb, { bookType: "xlsx", type: "array" });
//     const data = new Blob([excelBuffer], { type: fileType });
//     FileSaver.saveAs(data, fileName + fileExtension);
//   };

  const exportexcel = () =>{
     
       const fileName = "abcd";
      let inputData = [{name,address,email,phonenumber}]
      const ws = XLSX.utils.json_to_sheet(inputData)
      const wb = { Sheets: { data: ws }, SheetNames: ["data"] };
      console.log(inputData)
    const excelBuffer = XLSX.write(wb, { bookType: "xlsx", type: "array" });
    const data = new Blob([excelBuffer], { type: fileType });
    FileSaver.saveAs(data, fileName + fileExtension);
  }

    return (
        <div>
            <h1>Excel Export</h1>
             <table>
            <thead>
                <tr>
                <th>Name</th>
                <th>Address</th>
                <th>Email</th>
                <th>Phone number</th>
             
            </tr></thead>
            <tbody>
            <tr>
                <td><input type="text" value={name} onChange={(event)=>setname(event.target.value)}/></td>
                <td><input type="text" value={address} onChange={(event)=>setaddress(event.target.value)}/></td>
                <td><input type="text" value={email} onChange={(event)=>setemail(event.target.value)}/></td>
                <td><input type="text" value={phonenumber} onChange={(event)=>setphonenumber(event.target.value)}/></td> 
            </tr>

            </tbody>
            </table>
           

            <button className="btn btn-primary" style={{marginLeft:"1000px"}} onClick={(e) =>{ e.preventDefault();exportexcel()}}>Export Excel</button>
         </div>
    )
}
export default Excelexport

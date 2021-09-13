import React,{useState} from 'react'
import {ExcelRenderer} from 'react-excel-renderer';

export const Excelimport = () => {

  const[firstname,setfirstname] = useState("")
  const[lastname,setlastname] = useState("")
  const[email,setemail] = useState("")
  const[password,setpassword] = useState("")
  const[address,setaddress] = useState("")
  const[phonenumber,setphonenumber] = useState("")

  let handlechange = (event)=>{
      let fileObj = event.target.files[0]
      ExcelRenderer(fileObj,(err,resp)=>{
          if(err){
              console.log(err)
          }
          else{
              console.log(resp.rows)
              setfirstname(resp.rows[1][0])
              setlastname(resp.rows[1][1])
              setemail(resp.rows[1][2])
              setpassword(resp.rows[1][3])
              setaddress(resp.rows[1][4])
              setphonenumber(resp.rows[1][5])
               
          }
      })
  }
    return (
        <div>
            <h1>Excel Import</h1>
            <label style={{marginLeft:"20px"}} className="btn btn-primary">Excelimport<input type="file" accept="application/vnd.openxmlformats-officedocument.spreadsheetml.sheet, application/vnd.ms-excel" onChange={handlechange} style={{ display: "none" }} /></label>
           <form>
               <label>firstname<input type="text" value={firstname} onChange={(event)=>setfirstname(event.target.value)}/></label>
               <label>lastname<input type="text" value={lastname} onChange={(event)=>setlastname(event.target.value)}/></label>
               <label>email<input type="text" value={email} onChange={(event)=>setemail(event.target.value)}/></label>
               <label>password<input type="text" value={password} onChange={(event)=>setpassword(event.target.value)}/></label>
               <label>address<input type="text" value={address} onChange={(event)=>setaddress(event.target.value)}/></label>
               <label>phonenumber<input type="text" value={phonenumber} onChange={(event)=>setphonenumber(event.target.value)}/></label>
               </form> 
        </div>
    )
}

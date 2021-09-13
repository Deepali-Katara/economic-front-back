import React,{useRef} from 'react'
import "@progress/kendo-theme-material/dist/all.css"
import { PDFExport, savePDF } from "@progress/kendo-react-pdf";
import { Button } from "@progress/kendo-react-buttons";


 const Exportpdf = () => {
     const pdfExportComponent = useRef(null)
     const contentArea = useRef(null)

    const exportpdfwithcomponent = (event) =>{
        pdfExportComponent.current.save();
        // console.log("clicked")
    }       
const exportpdfwithmethod = (event) =>{
    savePDF(contentArea.current,{paperSize:"A2"});
        // console.log("clicked")
    }
    return (
        <div>
            <PDFExport ref={pdfExportComponent} paperSize="A2">
                <div ref={contentArea}>
                <h1>Export PDF</h1>
                <div align="center" style={{marginTop:"20px"}}>
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
                <td><input type="text" /></td>
                <td><input type="text" /></td>
                <td><input type="text" /></td>
                <td><input type="text"/></td> 
            </tr>

            </tbody>
            </table>
           

            <button className="btn btn-primary" style={{marginLeft:"1000px"}} >Export Excel</button>
         </div>
                <Button primary={true} onClick={exportpdfwithcomponent}>Primary Button</Button>
               <Button onClick={exportpdfwithmethod}>Export with method</Button>
            </div>
            
            </div>
           
            </PDFExport>
        </div>
    )
}

export default Exportpdf
import React from 'react'
import html2canvas from 'html2canvas'
import { jsPDF } from "jspdf";
    
class Screencapture extends React.Component {
           constructor(props) {
             super(props)
           } 
    
        export =(type, name)=>{
    
        html2canvas(document.querySelector(`#capture`)).then(canvas => {
          let dataURL = canvas.toDataURL('image/png');
    
          if (type === 'pdf') {
            const pdf = new jsPDF({
              orientation: "landscape",
              unit: "in",
              format: [14, 10]
            });
    
            pdf.addImage(dataURL, 'PNG', .6, .6);
            pdf.save(`${name}.pdf`);
    
          } else if (type === 'png') {
            var link = document.createElement('a');
            link.download = `${name}.png`;
            link.href = dataURL;
            link.click();
          }
        });
     }
     render() { 
        return (
          <div>
            <button className = "btn btn-primary" onClick={()=>this.export("pdf", "my-content")}>Screenshot</button>
            <div id={`capture`} >
              Content to export as pdf/png
              {this.props.children} //any child Component render here will be exported as pdf/png
            </div>
          </div>
        )
      }
    }

export default Screencapture
import { Injectable   } from "@angular/core";
import { Observable   } from "rxjs";
import html2canvas      from "html2canvas";
import jsPDF            from "jspdf";
//
@Injectable({
    providedIn: 'root',
})
export class PdfEngine
{
    //
    public _GetPDF(pageTitle: string, c_canvas : any, divCanvas_Pdf : any, fileName: string): Observable<void> {
        //            
        return new Observable<void>((observer) => {
        //
        console.log(pageTitle + ": [GENERANDO PDF]" );
        //
        const areaToPrint   = c_canvas.nativeElement;
        const borderToPrint = divCanvas_Pdf.nativeElement;
        //
        html2canvas(areaToPrint).then((_canvas) => {
            //
            let w       : number  = borderToPrint.offsetWidth;
            let h       : number  = borderToPrint.offsetHeight;
            //
            let imgData : string  = _canvas.toDataURL('image/jpeg');
            //
            let pdfDoc  : jsPDF   = new jsPDF("landscape", "px", [w, h]);
            //
            pdfDoc.addImage(imgData, 0, 0, w, h);
            //
            pdfDoc.save(fileName);
            //
            observer.next();
            observer.complete();
        });
    //    
    })};
}
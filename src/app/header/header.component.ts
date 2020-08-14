import { Component, OnInit, EventEmitter, Output, TemplateRef} from '@angular/core';
import { AngularCsv } from 'angular7-csv/dist/Angular-csv'
import { RadService } from '../services/rad.service';
import { saveAs } from 'file-saver';
import { BsModalService, BsModalRef } from 'ngx-bootstrap/modal';
import { THIS_EXPR } from '@angular/compiler/src/output/output_ast';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  @Output() featureSelected = new EventEmitter<string>();
  constructor(private radService: RadService, private modalService: BsModalService) { }
 
  dtRegistro :any;

  csvOptions = {
    fieldSeparator: ',',
    quoteStrings: '"',
    decimalseparator: '.',
    showLabels: true,
    showTitle: true,
    title: 'Registrosimulación :',
    useBom: true,
    noDownload: false,
    headers: ["ID", "Latitud", "Longitud", "Área", "Área útil","Adultos","Niños","Ancianos","Adultos trabajo","Ancianos trabajo","Cocina de inducción","Lavadora","Secadora eléctrica","Ducha","Generación anual","Consumo mensual","Inversión","LCOE","TIR"]
  };

  exportPdf() {
    this.radService.export().subscribe(data => saveAs(data, `Manual técnico .pdf`));
}

  ngOnInit() {
    this.radService.getRegistro()
      .subscribe(
        res => {
          this.dtRegistro = res;
        },
        err => console.error(err)
      );
  }

  Descargar(){
    new  AngularCsv(this.dtRegistro, "Registro", this.csvOptions);
    console.log('funciona')
  }

  onSelect(feature:string){
    this.featureSelected.emit(feature);
  }

  modalRef: BsModalRef;
  
 
  openModal(template: TemplateRef<any>) {
    this.modalRef = this.modalService.show(template);
  }

  pass;
  errorme;
  
  Descargas(){
    // console.log(this.pass);
  
    
    if(this.pass==='FIMEPN2019'){
      // console.log('Se descarga');
      this.Descargar();
      this.errorme='';
      
    }else{
      // console.log('no se descarga');
      this.errorme='Contraseña incorrecta'
    }
  }

}

import { Component, OnInit,ViewChild, Output, EventEmitter } from '@angular/core';
import { ChartDataSets, ChartOptions } from 'chart.js';
import { Color, BaseChartDirective, Label } from 'ng2-charts';

@Component({
  selector: 'app-cc',
  templateUrl: './cc.component.html',
  styleUrls: ['./cc.component.css']
})
export class CCComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }
  @ViewChild(BaseChartDirective, { static: true }) chart: BaseChartDirective;

  @Output() Consumoenv = new EventEmitter<{Consumo}>();
  @Output() Ninosenv = new EventEmitter<{Ninos}>();
  @Output() Adultosenv = new EventEmitter<{Adultos}>();
  @Output() Ancianosenv = new EventEmitter<{Ancianos}>();
  @Output() AdultosTenv = new EventEmitter<{AdultosT}>();
  @Output() AncianosTenv = new EventEmitter<{AncianosT}>();
  @Output() P1env = new EventEmitter<{P1}>();
  @Output() P2env = new EventEmitter<{P2}>();
  @Output() P3env = new EventEmitter<{P3}>();
  @Output() P4env = new EventEmitter<{P4}>();
  @Output() Vectorenv = new EventEmitter<{vector}>();

   // Coneccion template
   Consumo;
   Cocina;
   TLavadora;
   Secadora;
   Calefon;
   Nninos=0;
   Adultos=0;
   TerEdad=0;
   AdultosM=0;
   TerEdadM=0;
   False=false;
 
   //Mensaje error
   AdultosMM;
   AdultosC;
   TerEdadMM;
   TerEdadC;
 
   //Variables 
   PorcentajeRefrigerador=0.208;
 
   //Resultado
   Vectorf=[];
   BT=0;
   
   Dibujar(){
//Consumo de refrigerador por hora
var CRefrigerador=(this.Consumo*1000*this.PorcentajeRefrigerador)/(30*24);
//Consumo de electrodomesticos comunes
var CElectrodomesticoscom=(this.Consumo*1000*(1-this.PorcentajeRefrigerador))/(30);


//Comportamiento clasificacion

  //Uso Común
  var FcocinaC=[0,0,0,0,0,0,0.1,0,0,0,0,0,0,0,0,0,1.5,3,3,3,3,3,1.5,0];
  var MicroondasC=[0,0,0,0,0,0,0.1,0,0,0,0,0.2,0.2,0.1,0.1,0.2,0.15,0.05,0,0.2,0,0,0,0];
  var PlancharopaC=[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0.5,0.5,0,0,0,0,0,0,0.1,0];
  var PlanchapeloC=[0,0,0,0,0,0.2,0,0,0,0,0,0.1,0.1,0,0.1,0.1,0,0,0,0,0,0,0,0];
  var FcomedorC=[0,0,0,0,0,0,0.5,0,0,0,0,0,0,0,0,0,0.5,1,1,1,1,1,0.5,0];
  var FsalaC=[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0.5,1,1,1,1,1,0.5,0];

  //Niños

  var TelevisionN=[0,0,0,0,0,0,0,0.7,0.3,0.4,0.7,0,0,0,0,0,0,0.5,1,1,1,1,0.5,0];
  var FcuratoN=[0,0,0,0,0,0.5,0,0,0,0,0,0,0,0,0,0,0,0.05,0.6,0.95,1,0.95,0.1,0];
  var ComputadoraN=[0,0,0,0,0,0,0,0,0,0,0,0,0,1,1,1,1,1,1,1,1,1,0.5,0];
  var CalefonelecN=[0,0,0,0,0,0.4,1,0.8,0.7,0.2,0.1,0,0,0,0,0,0,0,0,0,0,0,0,0];
  var FbañosN=[0,0,0,0,0,0.25,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0.17,0,0,0];
  var DuchaelecN=[0,0,0,0,0,0.25,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0];

  //Adulto+Trabajo

  var TelevisionAT=[0,0,0,0,0,0,0.5,0.4,0.3,0.2,0.4,0,0,0,0,0,0,0.5,1,1,1,1,0.5,0];
  var FcuartoAT=[0,0,0,0,0,0,0.5,0,0,0,0,0,0,0,0,0,0,0.05,0.6,0.95,1,0.95,0.1,0];
  var LicuadoraAT=[0,0,0,0,0,0,0.08,0,0,0,0,0,0,0,0,0,0,0,0.1,0,0,0,0,0];
  var SandwicheraAT=[0,0,0,0,0,0,0.08,0,0,0,0,0,0,0,0,0,0,0,0.1,0,0,0,0,0];
  var FcuartolavadoAT=[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0.5,0,0,0,0,0];
  var LavadoraAT=[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0.75,0,0,0,0,0];
  var SecadoraropaAT=[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0.25,0,0,0,0,0];
  var CocinaelecAT=[0,0,0,0,0,0,0.17,0,0,0,0,0,0,0,0,0,0,0,0.17,0,0,0,0,0];
  var ComputadoraAT=[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,1,1,1,1,1,0.5,0];
  var CalefonelecAT=[0,0,0,0,0,0.4,1,0.8,0.7,0.2,0.1,0,0,0,0,0,0,0,0,0,0,0,0,0];
  var FbañosAT=[0,0,0,0,0,0.25,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0.17,0,0,0];
  var DuchaelecAT=[0,0,0,0,0,0.25,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0];

  //Tercera edad+Trabajo

  var TelevisionTET=[0,0,0,0,0,0,1,0.7,0.3,0.2,0.5,0,0,1,0,0,0,0.5,1,1,0,0,0,0];
  var FcuartoTET=[0,0,0,0,0,0,0.5,0,0,0,0,0,0,0,0,0,0,0.05,0.6,0.95,1,0.95,0.1,0];
  var LicuadoraTET=[0,0,0,0,0,0,0.17,0,0,0,0,0,0.17,0,0,0,0,0.1,0.5,0,0,0,0,0];
  var SandwicheraTET=[0,0,0,0,0,0,0.17,0,0,0,0,0,0,0,0,0,0,0.1,0.5,0,0,0,0,0];
  var FcuartolavadoTET=[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0];
  var LavadoraTET=[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0];
  var SecadoraropaTET=[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0];
  var CocinaelecTET=[0,0,0,0,0,0,0.17,0,0,0,0,0,0.5,0,0,0,0,0,0.17,0,0,0,0,0];
  var CalefonelecTET=[0,0,0,0,0,0.4,1,0.8,0.7,0.2,0.1,0,0,0,0,0,0,0,0,0,0,0,0,0];
  var FbañosTET=[0,0,0,0,0,0.25,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0.17,0,0,0];
  var DuchaelecTET=[0,0,0,0,0,0.25,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0];

  //Adultos+Casa

  var TelevisionAC=[0,0,0,0,0,0,0.5,0,0.2,0.3,0.7,1,1,1,1,1,0,0,0,1,1,1,0.5,0];
  var FcuartoAC=[0,0,0,0,0,0,0.5,0,0,0,0,0,0,0,0,0,0,0.05,0.6,0.95,1,0.95,0.1,0];
  var LicuadoraAC=[0,0,0,0,0,0,0.08,0.1,0,0,0,0,0.1,0,0,0,0,0,0,0,0,0,0,0];
  var SandwicheraAC=[0,0,0,0,0,0,0.08,0.1,0,0,0,0,0.2,0,0,0,0,0,0,0,0,0,0,0];
  var FcuartolavadoAC=[0,0,0,0,0,0,0,0,0.4,0.5,0.5,0,0,0,0,0,0,0,1,1,1,0,0,0];
  var LavadoraAC=[0,0,0,0,0,0,0,0,0.5,1,0.5,0,0,0,0,0,0,0,1,1,1,0,0,0];
  var SecadoraropaAC=[0,0,0,0,0,0,0,0,0,0,0.2,0,0,0,0,0,0,0,1,1,1,0,0,0];
  var CocinaelecAC=[0,0,0,0,0,0,0.17,0,0,0,0,0.15,0.15,0.15,0,0,0,0,0.17,0,0,0,0,0];
  var ComputadoraAC=[0,0,0,0,0,0,0,0,1,1,1,1,1,1,1,1,1,1,1,1,0,1,0.5,0];
  var CalefonelecAC=[0,0,0,0,0,0.4,1,0.8,0.7,0.2,0.1,0,0,0,0,0,0,0,0,0,0,0,0,0];
  var FbañosAC=[0,0,0,0,0,0.25,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0.17,0,0,0];
  var DuchaelecAC=[0,0,0,0,0,0.25,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0];
  var RadioAC=[0,0,0,0,0,0,0,1,1,1,1,0,0,0,0,0,0,0,0,0,0,0,0,0];
  
  //Tercera edad+Casa

  var TelevisionTEC=[0,0,0,0,0,0,1,0.7,0.3,0.2,0.7,1,1,1,1,1,0,0,1,1,0,0,0,0];
  var FcuartoTEC=[0,0,0,0,0,0,0.5,0,0,0,0,0,0,0,0,0,0,0.05,0.6,0.95,1,0.95,0.1,0];
  var LicuadoraTEC=[0,0,0,0,0,0,0.17,0,0,0,0,0.2,0.17,0,0,0,0,0,0,0,0,0,0,0];
  var SandwicheraTEC=[0,0,0,0,0,0,0.17,0,0,0,0,0.2,0,0,0,0,0,0,0,0,0,0,0,0];
  var FcuartolavadoTEC=[0,0,0,0,0,0,0,1,0.4,0.5,0.5,0,0,0,0,0,0,0,1,1,1,0,0,0];
  var LavadoraTEC=[0,0,0,0,0,0,0,1,0.5,1,0.5,0,0,0,0,0,0,0,1,1,1,0,0,0];
  var SecadoraropaTEC=[0,0,0,0,0,0,0,0,0,0,0.2,0,0,0,0,0,0,0,1,1,1,0,0,0];
  var CocinaelecTEC=[0,0,0,0,0,0,0.17,0,0,0,0,0.15,0.15,0.15,0,0,0,0,0.17,0,0,0,0,0];
  var CalefonelecTEC=[0,0,0,0,0,0.4,1,0.8,0.7,0.2,0.1,0,0,0,0,0,0,0,0,0,0,0,0,0];
  var FbañosTEC=[0,0,0,0,0,0.25,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0.17,0,0,0];
  var DuchaelecTEC=[0,0,0,0,0,0.25,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0];
  var RadioTEC=[0,0,0,0,0,0,0,1,0.5,0.2,1,0,0,0,0,0,0,0,0,0,0,0,0,0];

//Potencias

 var PFcocina=20;
 var PMicroondas=1200;
 var PPlancharopa=1000;
 var PPlanchapelo=40;
 var PFcomedor=480;
 var PFsala=480;
 var PLicuadora=400;
 var PSandwichera=950;
 var PLavadora=400;
 var PSecadoraropa=3000;
 var PTelevision=120;
 var PCocinaelec=4500;
 var PComputadora=300;
 var PDuchaelec=1500;
 var PCalefonelec=2000;
 var PRadio=30;
 var PFcuarto=480;
 var PFbaños=480;
 var PFcuartolavado=480;




// Comportamiento*Potencia*#Personas

  //Uso Común
  var MFcocinaC=[];
  var MMicroondasC=[];
  var MPlancharopaC=[];
  var MPlanchapeloC=[];
  var MFcomedorC=[];
  var MFsalaC=[];

  for (let i = 0; i < 24; i++) {
  MFcocinaC[i]=FcocinaC[i]*PFcocina;
  MMicroondasC[i]=MicroondasC[i]*PMicroondas;
  MPlancharopaC[i]=PlancharopaC[i]*PPlancharopa;
  MPlanchapeloC[i]=PlanchapeloC[i]*PPlanchapelo;
  MFcomedorC[i]=FcomedorC[i]*PFcomedor;
  MFsalaC[i]=FsalaC[i]*PFsala;
  }

  
  //Niños

  var MTelevisionN=[];
  var MFcuratoN=[];
  var MComputadoraN=[];
  var MCalefonelecN=[];
  var MFbañosN=[];
  var MDuchaelecN=[];

  for (let i = 0; i < 24; i++) {
    MTelevisionN[i]=TelevisionN[i]*PTelevision*this.Nninos;
    MFcuratoN[i]=FcuratoN[i]*PFcuarto*this.Nninos;
    MComputadoraN[i]=ComputadoraN[i]*PComputadora*this.Nninos;
    MCalefonelecN[i]=CalefonelecN[i]*PCalefonelec*this.Nninos;
    MFbañosN[i]=FbañosN[i]*PFbaños*this.Nninos;
    MDuchaelecN[i]=DuchaelecN[i]*PDuchaelec*this.Nninos;
  }
  
  //Adulto+Trabajo

  var MTelevisionAT=[];
  var MFcuartoAT=[];
  var MLicuadoraAT=[];
  var MSandwicheraAT=[];
  var MFcuartolavadoAT=[];
  var MLavadoraAT=[];
  var MSecadoraropaAT=[];
  var MCocinaelecAT=[];
  var MComputadoraAT=[];
  var MCalefonelecAT=[];
  var MFbañosAT=[];
  var MDuchaelecAT=[];

  for (let i = 0; i < 24; i++) {
    MTelevisionAT[i]=TelevisionAT[i]*PTelevision*this.AdultosM;
    MFcuartoAT[i]=FcuartoAT[i]*PFcuarto*this.AdultosM;
    MLicuadoraAT[i]=LicuadoraAT[i]*PLicuadora*this.AdultosM;
    MSandwicheraAT[i]=SandwicheraAT[i]*PSandwichera*this.AdultosM;
    MFcuartolavadoAT[i]=FcuartolavadoAT[i]*PFcuartolavado*this.AdultosM;
    MLavadoraAT[i]=LavadoraAT[i]*PLavadora*this.AdultosM;
    MSecadoraropaAT[i]=SecadoraropaAT[i]*PSecadoraropa*this.AdultosM;
    MCocinaelecAT[i]=CocinaelecAT[i]*PCocinaelec*this.AdultosM;
    MComputadoraAT[i]=ComputadoraAT[i]*PComputadora*this.AdultosM;
    MCalefonelecAT[i]=CalefonelecAT[i]*PCalefonelec*this.AdultosM;
    MFbañosAT[i]=FbañosAT[i]*PFbaños*this.AdultosM;
    MDuchaelecAT[i]=DuchaelecAT[i]*PDuchaelec*this.AdultosM;
  }

  //Tercera edad+Trabajo

  var MTelevisionTET=[];
  var MFcuartoTET=[];
  var MLicuadoraTET=[];
  var MSandwicheraTET=[];
  var MFcuartolavadoTET=[];
  var MLavadoraTET=[];
  var MSecadoraropaTET=[];
  var MCocinaelecTET=[];
  var MCalefonelecTET=[];
  var MFbañosTET=[];
  var MDuchaelecTET=[];

  for (let i = 0; i < 24; i++) {
    MTelevisionTET[i]=TelevisionTET[i]*PTelevision*this.TerEdadM;
    MFcuartoTET[i]=FcuartoTET[i]*PFcuarto*this.TerEdadM;
    MLicuadoraTET[i]=LicuadoraTET[i]*PLicuadora*this.TerEdadM;
    MSandwicheraTET[i]=SandwicheraTET[i]*PSandwichera*this.TerEdadM;
    MFcuartolavadoTET[i]=FcuartolavadoTET[i]*PFcuartolavado*this.TerEdadM;
    MLavadoraTET[i]=LavadoraTET[i]*PLavadora*this.TerEdadM;
    MSecadoraropaTET[i]=SecadoraropaTET[i]*PSecadoraropa*this.TerEdadM;
    MCocinaelecTET[i]=CocinaelecTET[i]*PCocinaelec*this.TerEdadM;
    MCalefonelecTET[i]=CalefonelecTET[i]*PCalefonelec*this.TerEdadM;
    MFbañosTET[i]=FbañosTET[i]*PFbaños*this.TerEdadM;
    MDuchaelecTET[i]=DuchaelecTET[i]*PDuchaelec*this.TerEdadM;
  }


  //Adultos+Casa

  var MTelevisionAC=[];
  var MFcuartoAC=[];
  var MLicuadoraAC=[];
  var MSandwicheraAC=[];
  var MFcuartolavadoAC=[];
  var MLavadoraAC=[];
  var MSecadoraropaAC=[];
  var MCocinaelecAC=[];
  var MComputadoraAC=[];
  var MCalefonelecAC=[];
  var MFbañosAC=[];
  var MDuchaelecAC=[];
  var MRadioAC=[];

  for (let i = 0; i < 24; i++) {
    MTelevisionAC[i]=TelevisionAC[i]*PTelevision*(this.Adultos-this.AdultosM);
    MFcuartoAC[i]=FcuartoAC[i]*PFcuarto*(this.Adultos-this.AdultosM);
    MLicuadoraAC[i]=LicuadoraAC[i]*PLicuadora*(this.Adultos-this.AdultosM);
    MSandwicheraAC[i]=SandwicheraAC[i]*PSandwichera*(this.Adultos-this.AdultosM);
    MFcuartolavadoAC[i]=FcuartolavadoAC[i]*PFcuartolavado*(this.Adultos-this.AdultosM);
    MLavadoraAC[i]=LavadoraAC[i]*PLavadora*(this.Adultos-this.AdultosM);
    MSecadoraropaAC[i]=SecadoraropaAC[i]*PSecadoraropa*(this.Adultos-this.AdultosM);
    MCocinaelecAC[i]=CocinaelecAC[i]*PCocinaelec*(this.Adultos-this.AdultosM);
    MComputadoraAC[i]=ComputadoraAC[i]*PComputadora*(this.Adultos-this.AdultosM);
    MCalefonelecAC[i]=CalefonelecAC[i]*PCalefonelec*(this.Adultos-this.AdultosM);
    MFbañosAC[i]=FbañosAC[i]*PFbaños*(this.Adultos-this.AdultosM);
    MDuchaelecAC[i]=DuchaelecAC[i]*PDuchaelec*(this.Adultos-this.AdultosM);
    MRadioAC[i]=RadioAC[i]*PRadio*(this.Adultos-this.AdultosM);
  }

  //Tercera edad+Casa

  var MTelevisionTEC=[];
  var MFcuartoTEC=[];
  var MLicuadoraTEC=[];
  var MSandwicheraTEC=[];
  var MFcuartolavadoTEC=[];
  var MLavadoraTEC=[];
  var MSecadoraropaTEC=[];
  var MCocinaelecTEC=[];
  var MCalefonelecTEC=[];
  var MFbañosTEC=[];
  var MDuchaelecTEC=[];
  var MRadioTEC=[];

  for (let i = 0; i < 24; i++) {
    MTelevisionTEC[i]=TelevisionTEC[i]*PTelevision*(this.TerEdad-this.TerEdadM);
    MFcuartoTEC[i]=FcuartoTEC[i]*PFcuarto*(this.TerEdad-this.TerEdadM);
    MLicuadoraTEC[i]=LicuadoraTEC[i]*PLicuadora*(this.TerEdad-this.TerEdadM);
    MSandwicheraTEC[i]=SandwicheraTEC[i]*PSandwichera*(this.TerEdad-this.TerEdadM);
    MFcuartolavadoTEC[i]=FcuartolavadoTEC[i]*PFcuartolavado*(this.TerEdad-this.TerEdadM);
    MLavadoraTEC[i]=LavadoraTEC[i]*PLavadora*(this.TerEdad-this.TerEdadM);
    MSecadoraropaTEC[i]=SecadoraropaTEC[i]*PSecadoraropa*(this.TerEdad-this.TerEdadM);
    MCocinaelecTEC[i]=CocinaelecTEC[i]*PCocinaelec*(this.TerEdad-this.TerEdadM);
    MCalefonelecTEC[i]=CalefonelecTEC[i]*PCalefonelec*(this.TerEdad-this.TerEdadM);
    MFbañosTEC[i]=FbañosTEC[i]*PFbaños*(this.TerEdad-this.TerEdadM);
    MDuchaelecTEC[i]=DuchaelecTEC[i]*PDuchaelec*(this.TerEdad-this.TerEdadM);
    MRadioTEC[i]=RadioTEC[i]*PRadio*(this.TerEdad-this.TerEdadM);
  }

// Preguntas de electrodomesticos

var NumCocina

if(this.Cocina==='Si'){
  NumCocina=1;
} 
if(this.Cocina==="No"){
  NumCocina=0;
}

var NumLavadora

if(this.TLavadora==='Si'){
  NumLavadora=1;
} 
if(this.TLavadora==="No"){
  NumLavadora=0;
}

var NumSecadoraropa

if(this.Secadora==='Si'){
  NumSecadoraropa=1;
} 
if(this.Secadora==="No"){
  NumSecadoraropa=0;
}

var NumFcuartolavado

if(this.Secadora==="Si" || this.TLavadora==='Si'){
  NumFcuartolavado=1;
}else{
  NumFcuartolavado=0;
}

var NumCalefonelec
var NumDuchaelec

if(this.Calefon==='Calefonelec'){
  NumCalefonelec=1;
  NumDuchaelec=0;
} 
if(this.Calefon==="Duchaelec"){
  NumDuchaelec=1;
  NumCalefonelec=0;
}
if(this.Calefon==="Ninguna"){
  NumDuchaelec=0;
  NumCalefonelec=0;
}

//Sumatoria por electrodomestico*Preguntas de electrodomesticos

  var SLicuadora=[];
  var SSandwichera=[];
  var SLavadora=[];
  var SSecadoraropa=[];
  var STelevision=[];
  var SCocinaelec=[];
  var SComputadora=[];
  var SCalefonelec=[];
  var SFcuartolavado=[];
  var SFbaños=[];
  var SDuchaelec=[];
  var SRadio=[];

  for (let i = 0; i < 24; i++) {
    SLicuadora[i]=MLicuadoraAT[i]+MLicuadoraTET[i]+MLicuadoraAC[i]+MLicuadoraTEC[i];
    SSandwichera[i]=MSandwicheraAT[i]+MSandwicheraTET[i]+MSandwicheraAC[i]+MSandwicheraTEC[i];
    SLavadora[i]=(MLavadoraAT[i]+MLavadoraTET[i]+MLavadoraAC[i]+MLavadoraTEC[i])*NumLavadora;
    SSecadoraropa[i]=(MSecadoraropaAT[i]+MSecadoraropaTET[i]+MSecadoraropaAC[i]+MSecadoraropaTEC[i])*NumSecadoraropa;
    STelevision[i]=MTelevisionN[i]+MTelevisionAT[i]+MTelevisionTET[i]+MTelevisionAC[i]+MTelevisionTEC[i];
    SCocinaelec[i]=(MCocinaelecAT[i]+MCocinaelecTET[i]+MCocinaelecAC[i]+MCocinaelecTEC[i])*NumCocina;
    SComputadora[i]=MComputadoraN[i]+MComputadoraAT[i]+MComputadoraAC[i];
    SCalefonelec[i]=(MCalefonelecN[i]+MCalefonelecAT[i]+MCalefonelecTET[i]+MCalefonelecAC[i]+MCalefonelecTEC[i])*NumCalefonelec;
    SFcuartolavado[i]=(MFcuartolavadoAT[i]+MFcuartolavadoTET[i]+MFcuartolavadoAC[i]+MFcuartolavadoTEC[i])*NumFcuartolavado;
    SFbaños[i]=MFbañosN[i]+MFbañosAT[i]+MFbañosTET[i]+MFbañosAC[i]+MFbañosTEC[i];
    SDuchaelec[i]=(MDuchaelecN[i]+MDuchaelecAT[i]+MDuchaelecTET[i]+MDuchaelecAC[i]+MDuchaelecTEC[i])*NumDuchaelec;
    SRadio[i]=MRadioAC[i]+MRadioTEC[i];
  }

  // console.log(SLicuadora);
  // console.log(SSandwichera);
  // console.log(SLavadora);
  // console.log(SSecadoraropa);
  // console.log(STelevision);
  // console.log(SCocinaelec);
  // console.log(SComputadora);
  // console.log(SCalefonelec);
  // console.log(SFcuartolavado);
  // console.log(SFbaños);
  // console.log(SDuchaelec);
  // console.log(SRadio);
  
  
  

// Sumatoria por hora*Energía Parásita

  var Sumatoriah=[];
  var EnergiaPara=1.1;

  for (let i = 0; i < 24; i++) {
    Sumatoriah[i]=(MFcocinaC[i]+MMicroondasC[i]+MPlancharopaC[i]+MPlanchapeloC[i]+MFcomedorC[i]+MFsalaC[i]+SLicuadora[i]+SSandwichera[i]+SLavadora[i]+SSecadoraropa[i]+STelevision[i]+SCocinaelec[i]+SComputadora[i]+SCalefonelec[i]+SFcuartolavado[i]+SFbaños[i]+SDuchaelec[i]+SRadio[i])*EnergiaPara;
  }
  
  // console.log(Sumatoriah);
  
//Sumatoria Total

  var Sumatoriat;
  var sumf=0;
  for (let i = 0; i < 24; i++) {
    sumf=sumf+Sumatoriah[i];
    Sumatoriat=sumf;
  }
  sumf=0;
  // console.log(Sumatoriat);
// Calculo Fraccion

  var Fraccion=[];

  for (let i = 0; i < 24; i++) {
    Fraccion[i]=Sumatoriah[i]/Sumatoriat;
  }

// Calculo Vector

  var Vector=[];

  for (let i = 0; i < 24; i++) {
    Vector[i]=CRefrigerador+(Fraccion[i]*CElectrodomesticoscom);
  }
  for (let i = 0; i < 24; i++) {
  this.Vectorf[i]=Vector[i];

  }

// Verificacion de datos

  // No #personas negativos

    //Adultos

    if (this.Adultos-this.AdultosM < 0){
      this.AdultosMM= 'Error: El número de adultos trabajando es mayor al número de adultos totales';
      this.AdultosC=0;
      for (let i = 0; i < 24; i++) {
        this.Vectorf[i]=0;
        }
    }else{
      this.AdultosC=1;
      this.AdultosMM='';
    }
    

    //Tercera Edad

    if (this.TerEdad-this.TerEdadM < 0){
      this.TerEdadMM= 'Error: El número de personas de tercera edad trabajando es mayor al número de personas de tercera edad totales';
      this.TerEdadC=0;
      for (let i = 0; i < 24; i++) {
        this.Vectorf[i]=0;
        }
    }else{
      this.TerEdadC=1;
      this.TerEdadMM='';
    }
    
    
    //  Actualizar grafico

      this.chart.update();

    // Pruebas

    //Guardado en base de datos- exportacion
    var Consumo1=this.Consumo
    this.Consumoenv.emit(Consumo1);

    this.Ninos1=this.Nninos
    this.Ninosenv.emit(this.Ninos1);

    this.Adultos1=this.Adultos
    this.Adultosenv.emit(this.Adultos1);

    this.Ancianos1=this.TerEdad
    this.Ancianosenv.emit(this.Ancianos1);

    this.AdultosT1=this.AdultosM
    this.AdultosTenv.emit(this.AdultosT1);

    this.AncianosT1=this.TerEdadM
    this.AncianosTenv.emit(this.AncianosT1);

    var P11=this.Cocina
    this.P1env.emit(P11);

    var P21=this.TLavadora
    this.P2env.emit(P21);

    var P31=this.Secadora
    this.P3env.emit(P31);

    var P41=this.Calefon
    this.P4env.emit(P41);

    this.Vector1 = this.Vectorf
    this.Vectorenv.emit(this.Vector1);

    //Bloquqo boton siguiente
     
     this.BT=1;
   }

   
   //Variable sexternas base de datos
   Ninos1;
   Adultos1;
   Ancianos1;
   AdultosT1;
   AncianosT1;
   Vector1;
  
 
   Label=['1','2','3','4','5','6','7','8','9','10','11','12','13','14','15','16','17','18','19','20','21','22','23','24'];
 
   // Grafico
    lineChartData: ChartDataSets[] = [
     { data: this.Vectorf, label: 'Curva de carga [Wh]' },
   ];
 
   lineChartLabels: Label[] = this.Label;
 
   lineChartOptions = {
     responsive: true,
   };
 
   public lineChartColors: Color[] = [
     { // grey
       backgroundColor: 'rgba(148,159,177,0.2)',
       borderColor: 'rgba(148,159,177,1)',
       pointBackgroundColor: 'rgba(148,159,177,1)',
       pointBorderColor: '#fff',
       pointHoverBackgroundColor: '#fff',
       pointHoverBorderColor: 'rgba(148,159,177,0.8)'
     },
     { // dark grey
       backgroundColor: 'rgba(77,83,96,0.2)',
       borderColor: 'rgba(77,83,96,1)',
       pointBackgroundColor: 'rgba(77,83,96,1)',
       pointBorderColor: '#fff',
       pointHoverBackgroundColor: '#fff',
       pointHoverBorderColor: 'rgba(77,83,96,1)'
     },
     { // red
       backgroundColor: 'rgba(255,0,0,0.3)',
       borderColor: 'red',
       pointBackgroundColor: 'rgba(148,159,177,1)',
       pointBorderColor: '#fff',
       pointHoverBackgroundColor: '#fff',
       pointHoverBorderColor: 'rgba(148,159,177,0.8)'
     }
   ];
   
 
   lineChartLegend = true;
   lineChartPlugins = [];
   lineChartType = 'line';
   
   // Cambiar pagina a calculos
   @Output() featureSelected = new EventEmitter<string>();
   onSelect(feature:string){
     this.featureSelected.emit(feature);
   }
  }
 

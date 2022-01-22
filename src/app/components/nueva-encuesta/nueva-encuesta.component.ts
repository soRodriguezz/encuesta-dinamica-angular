import { Component, OnInit } from '@angular/core';
import { FormArray, FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-nueva-encuesta',
  templateUrl: './nueva-encuesta.component.html',
  styleUrls: ['./nueva-encuesta.component.css']
})
export class NuevaEncuestaComponent implements OnInit {

  public formPreguntas = new FormGroup({
    nombrePregunta : new FormControl(null, Validators.required),
    preguntas: new FormArray([])
  });

  public preguntas = this.formPreguntas.get('preguntas') as FormArray;
  public opciones : any;
  public hiddenBtn: boolean = false;
  
  constructor() {}

  ngOnInit(): void {}

  nuevaPregunta(){
    this.preguntas.push( new FormGroup({
      pregunta: new FormControl(null, Validators.required),
      tipo: new FormControl(null, Validators.required),
      opciones: new FormArray([])
    }));
  }

  borrarPreguntaNueva( arg: any ): void { 
    this.preguntas.removeAt(arg); 
  }

  cambio( arg: any, arg2: any): void {
    this.opciones = this.preguntas.controls[arg2].get('opciones') as FormArray;
    this.opciones.clear();
    
    if ( arg === 'multiple' ) {
      
      this.preguntas.controls[arg2].get('tipo').setValue('multiple');
      this.hiddenBtn = true;
    } else if ( arg === 'unica' ) {
      this.preguntas.controls[arg2].get('tipo').setValue('unica');
      this.hiddenBtn = true;
    } else if ( arg === 'textarea' ) {
      this.preguntas.controls[arg2].get('tipo').setValue('textarea');
      this.hiddenBtn = false;
    } else {
      console.log('Es textarea');
    }
    
  }

  agregarOpcion( arg: any): void {
    this.opciones = this.preguntas.controls[arg].get('opciones') as FormArray;
    this.opciones.push( new FormGroup({
      opcion: new FormControl(null, Validators.required)
    }));
  }

}

// let a = this.preguntas.controls[0].get('opciones') as FormArray;
// this.opciones = this.preguntas.controls[0].get('opciones') as FormArray

// a.clear();
// a.push( new FormGroup({
//  opcion: new FormControl(null, Validators.required)
// }));


// this.preguntas.controls[arg2].get('opciones').setValidators(Validators.required);
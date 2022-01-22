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
      opciones: new FormArray([])
    }));
  }

  borrarPreguntaNueva( arg: any ): void { 
    this.preguntas.removeAt(arg); 
  }

  cambio( arg: any): void {
    this.opciones = this.preguntas.controls[this.preguntas.length - 1].get('opciones') as FormArray;
    this.opciones.clear();
    
    if ( arg === 'multiple' || arg === 'unica' ) {
      this.hiddenBtn = true;
    } else {
      console.log('Es textarea');
    }
    
  }

  agregarOpcion(): void {
    this.opciones = this.preguntas.controls[this.preguntas.length - 1].get('opciones') as FormArray;
    this.opciones.push( new FormControl(null, Validators.required));
  }

}

// let a = this.preguntas.controls[0].get('opciones') as FormArray;
// this.opciones = this.preguntas.controls[0].get('opciones') as FormArray

// a.clear();
// a.push( new FormGroup({
//  opcion: new FormControl(null, Validators.required)
// }));

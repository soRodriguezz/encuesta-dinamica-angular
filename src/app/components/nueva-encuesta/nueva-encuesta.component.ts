import { Component, OnInit } from '@angular/core';
import { FormArray, FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-nueva-encuesta',
  templateUrl: './nueva-encuesta.component.html',
  styleUrls: ['./nueva-encuesta.component.css']
})
export class NuevaEncuestaComponent implements OnInit {

  public formPreguntas = new FormGroup({
    nameAnswer : new FormControl(null, Validators.required),
    preguntas : new FormArray([])
  });

  public preguntas = this.formPreguntas.get('preguntas') as FormArray;

  constructor() {}

  ngOnInit(): void {}

  nuevaPregunta(){
    this.preguntas.push(new FormGroup({
      pregunta: new FormControl(null, Validators.required),
      tipo: new FormControl(null, Validators.required)
    }));

    console.log(this.formPreguntas.value);
  }

  borrarPreguntaNueva( arg: any ): void { 
    this.preguntas.removeAt(arg); 
  }

}

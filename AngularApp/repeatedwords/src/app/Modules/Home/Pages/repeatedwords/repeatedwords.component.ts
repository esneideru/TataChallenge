import { CursorError } from '@angular/compiler/src/ml_parser/lexer';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ErrorHandlerService } from 'src/app/Api/errorhandler.api';
import Swal from 'sweetalert2';
import { Palabras } from '../../Models/palabras.model';
import { TextoDTO } from '../../Models/textoDTO.model';
import { ProcesarService } from '../../Services/procesar.service';

@Component({
  selector: 'app-repeatedwords',
  templateUrl: './repeatedwords.component.html',
  styles: [
  ]
})
export class RepeatedWordsComponent implements OnInit {

  public form!: FormGroup;
  public formSearch!: FormGroup;
  public load: boolean = false;
  public hasData: boolean = false;
  public palabras: Palabras[] = [];
  public palabrasTemp: Palabras[] = [];


  constructor(private router: Router,
    private fb: FormBuilder,
    private serviceProcesar: ProcesarService,
    private errorHandler: ErrorHandlerService) { }

  ngOnInit(): void {
    this.form = this.fb.group({
      texto: ['', Validators.required]
    });

    this.formSearch = this.fb.group({
      palabra: ['', Validators.required]
    });
  }

  procesarTexto() {

    let validarTexto = new TextoDTO(
      this.form!.value.texto,
    );

    this.load = true;
    this.hasData = false;
    this.serviceProcesar.procesar(validarTexto).subscribe((resp: any) => {

      if (resp != null && resp.palabras) {
        Swal.fire('Procesado', `Procesado Correctamente`, 'success');
        this.palabras = resp.palabras!;
        this.load = false;
        this.hasData = true;
      } else {
        this.load = false;
        this.hasData = false;
      }

    }, error => {
      this.load = false;
      this.hasData = false;
      this.errorHandler.handleError(error);
      Swal.fire({
        icon: 'error',
        title: this.errorHandler.errorTitle.toString(),
        text: this.errorHandler.errorMessage.toString(),
        footer: this.errorHandler.footerError
      })
    });


  }

  isValidInput(fieldName: string | number): boolean {
    return this.form!.controls[fieldName].invalid && (this.form!.controls[fieldName].dirty || this.form!.controls[fieldName].touched);
  }

  isValidInputSearch(fieldName: string | number): boolean {
    return this.formSearch!.controls[fieldName].invalid && (this.formSearch!.controls[fieldName].dirty || this.formSearch!.controls[fieldName].touched);
  }

  buscar() {
    this.palabrasTemp = this.palabras;
    let palabra = this.formSearch!.value.palabra;
    let value = this.palabras.find(x => x.palabra == palabra)!;

    if (value) {
      let currentPalabras: Palabras[] = [];
      currentPalabras.push(value);
      this.palabras = currentPalabras;
      this.formSearch.reset;
    }else{
      Swal.fire({
        icon: 'error',
        title: "Resultado",
        text: "No encontramos ninguna coincidencia",
      })

      if (this.palabrasTemp.length > 0) {
        this.palabras = this.palabrasTemp;
      }
    }
  }

  reload() {
    if (this.palabrasTemp.length > 0) {
      this.palabras = this.palabrasTemp;
    }
  }

  limpiar() {
    this.hasData = false;
    this.palabras = [];
    this.palabrasTemp = [];
  }



}

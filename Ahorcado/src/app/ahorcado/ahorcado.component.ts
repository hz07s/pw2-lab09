import { Component, OnInit } from '@angular/core';
import { AhorcadoService } from '../ahorcado.service';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-ahorcado',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './ahorcado.component.html',
  styleUrl: './ahorcado.component.css'
})
export class AhorcadoComponent implements OnInit{
  ganar: boolean;
  palabra_random: string = '';
  palabra_vacia: string[];
  valor_ingresado: string = '';
  figures: string[];
  figure: string;
  message: string = '';
  auxiliar: string = '';
  letrasUsadas: string[] = [];
  mensaje = '';
  i: number = 1;
  
  constructor(private ahorcadoService: AhorcadoService) { 
    this.ganar = false;
    this.palabra_random = this.ahorcadoService.palabraRandom;
    this.palabra_vacia = this.ahorcadoService.rellenarPalabra();
    this.figures = this.ahorcadoService.figuras;
    this.figure = this.figures[0];
    this.message = this.palabra_vacia.join(' ');
  }
  ngOnInit(): void{
  }
  onSubmit(): void{
    this.mensaje = ' ';
    if (this.letrasUsadas.includes(this.valor_ingresado.toLowerCase())) {
      this.mensaje = 'Letra Repetida';
    } else if(this.palabra_random.toLowerCase().includes(this.valor_ingresado.toLowerCase())){
      for (let c = 0; c < this.palabra_random.length; c++){
        if (this.palabra_random[c].toLowerCase() == this.valor_ingresado.toLowerCase()){
          this.palabra_vacia[c] = this.palabra_random[c];
        }
      }
      this.message = this.palabra_vacia.join(' ');
      this.auxiliar = this.palabra_vacia.join('');
    } else {
      this.figure = this.figures[this.i];
      this.i += 1;
      if (this.i == 8){
        this.ganar = true;
      }
    }
    if (!(this.letrasUsadas.includes(this.valor_ingresado.toLowerCase()))){
      this.letrasUsadas.push(this.valor_ingresado.toLowerCase());
    }
    this.valor_ingresado = '';
  }
  
  volverJugar(): void{
    window.location.reload();
  }
}

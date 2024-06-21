import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-ahorcado',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './ahorcado.component.html',
  styleUrl: './ahorcado.component.css'
})
export class AhorcadoComponent {
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
    if(this.palabra_random.toLowerCase().includes(this.valor_ingresado.toLowerCase())){
      for (let c = 0; c < this.palabra_random.length; c++){
        if (this.palabra_random[c].toLowerCase() == this.valor_ingresado.toLowerCase()){
          this.palabra_vacia[c] = this.palabra_random[c];
        }
      }
      this.message = this.palabra_vacia.join(' ');
      this.auxiliar = this.palabra_vacia.join('');
    }
    this.valor_ingresado = '';
  }
}

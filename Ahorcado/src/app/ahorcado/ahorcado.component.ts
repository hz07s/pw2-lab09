import { Component } from '@angular/core';

@Component({
  selector: 'app-ahorcado',
  standalone: true,
  imports: [],
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
}

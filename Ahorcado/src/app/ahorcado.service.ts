import { Injectable } from '@angular/core';

@Injectable({
    providedIn: 'root'
})
export class AhorcadoService {
    palabras: string[] = ['Dota', 'Left', 'Invoker', 'Hernan', 'Andy'];
    palabraRandom: string;
    
    figure0: string = " +---+     \n" +
                    "     |     \n" +
                    "     |     \n" +
                    "     |     \n" +
                    "     |     \n" +
                    "     |     \n" +
                    "========= "
                    
  figure1: string = " +---+     \n" +
                    " |   |     \n" +
                    "     |     \n" +
                    "     |     \n" +
                    "     |     \n" +
                    "     |     \n" +
                    "========= "
          
  figure2: string = " +---+     \n" +
                    " |   |     \n" +
                    " O   |     \n" +
                    "     |     \n" +
                    "     |     \n" +
                    "     |     \n" +
                    "========= "
            
  figure3: string = " +---+     \n" +
                    " |   |     \n" +
                    " O   |     \n" +
                    " |   |     \n" +
                    "     |     \n" +
                    "     |     \n" +
                    "========= "
            
  figure4: string = " +---+     \n" +
                    " |   |     \n" +
                    " O   |     \n" +
                    "/|   |     \n" +
                    "     |     \n" +
                    "     |     \n" +
                    "========= "
            
  figure5: string = " +---+     \n" +
                    " |   |     \n" +
                    " O   |     \n" +
                    "/|\\  |     \n" +
                    "     |     \n" +
                    "     |     \n" +
                    "========= "
            
  figure6: string = " +---+     \n" +
                    " |   |     \n" +
                    " O   |     \n" +
                    "/|\\  |     \n" +
                    "/    |     \n" +
                    "     |     \n" +
                    "========= "
            
  figure7: string = " +---+     \n" +
                    " |   |     \n" +
                    " O   |     \n" +
                    "/|\\  |     \n" +
                    "/ \\  |     \n" +
                    "     |     \n" +
                    "========= "

    
    figuras: string[] = [this.figure0, this.figure1, this.figure2, this.figure3, this.figure4, this.figure5, this.figure6, this.figure7];
    

    constructor() {
        this.palabraRandom = this.palabrAleatoria();
    }

    palabrAleatoria(): string {
        const indice = Math.floor(Math.random() * this.palabras.length);
        return this.palabras[indice];
    }

    rellenarPalabra(): string[] {
    let palabra_vacia: string[] = [];
    for (let i = 0; i < this.palabraRandom.length; i++){
      if (this.palabraRandom[i] == ' '){
        palabra_vacia[i] = " ";
      } else {
        palabra_vacia[i] = "_";
      }
    }
    return palabra_vacia;
  }
}

import { Injectable } from '@angular/core';

@Injectable({
    providedIn: 'root'
})
export class AhorcadoService {
    palabras: string[] = ['Dota', 'Left', 'Invoker', 'Hernan', 'Andy'];
    palabraRandom: string;
    constructor() { }
}

import { Injectable } from '@nestjs/common';

@Injectable()
export class Practice1Service {
  palindrome(phrase: string): string {
    try {
      const accents: any = {
        á: 'a',
        é: 'e',
        í: 'i',
        ó: 'o',
        ú: 'u',
        ü: 'u',
        ñ: 'n',
      };

      let newPhrase: string = phrase.toLowerCase().trim();
      // Eliminar: acentos - espacios,caracteres - letras solas - espacios
      newPhrase = newPhrase.replace(/[áéíóúüñ]/g, (e) => accents[e]);
      newPhrase = newPhrase.replace(/[^a-zA-Z ]/g, '');
      newPhrase = newPhrase.replace(/\b[a-zA-Z]\b/g, '');
      newPhrase = newPhrase.replace(/\s+/g, ' ');

      const words: string[] = newPhrase.split(' ');

      let counter: number = 0;
      for (const word of words) {
        const backOffWord: string = word.split('').reverse().join('');
        word === backOffWord ? (counter += 1) : counter;
      }

      return `En el texto dado, hay ${counter} palabras palíndromas.`;
    } catch (error) {
      throw new Error('Ocurrió un error al procesar la frase.');
    }
  }
}

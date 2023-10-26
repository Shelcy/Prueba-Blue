import { Injectable } from '@nestjs/common';

@Injectable()
export class Practice2Service {
  combined(body: number[]) {
    try {
      if (body.length <= 1) return [body];
      const set = {};

      for (let i = 0; i < body.length; i++) {
        const element = body[i];
        const array = [...body.slice(0, i), ...body.slice(i + 1)];
        const restOfArray = this.combined(array);
        for (let j = 0; j < restOfArray.length; j++) {
          const combination = [element, ...(restOfArray[j] as number[])];
          set[combination.join('')] = combination;
        }
      }
      return Object.values(set);
    } catch (error) {
      throw new Error('!Ops¡ Ocurrió un error al procesar la información, intente nuevamente.');
    }
  }
}

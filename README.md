<table align="center">
  <tr>
    <td align="center" width="50%">
      <a href="http://nestjs.com/" target="blank"><img src="https://nestjs.com/img/logo-small.svg" width="200" alt="Nest Logo" /></a>
</td>
    <td align="center" width="50%">
      <a href="https://www.blue.cl/"  target="blank"><img src="https://bx-dev-website.s3.us-west-2.amazonaws.com/XagJ6A1y-Blue-Express-Copec.svg" width="200"></a>
    </td>
  </tr>
</table>

<p align="center">
<a href="https://www.npmjs.com/~nestjscore" target="_blank"><img src="https://img.shields.io/npm/v/@nestjs/core.svg" alt="NPM Version" /></a>
<a href="https://www.npmjs.com/~nestjscore" target="_blank"><img src="https://img.shields.io/npm/l/@nestjs/core.svg" alt="Package License" /></a>
</p>
 
  <!--[![Backers on Open Collective](https://opencollective.com/nest/backers/badge.svg)](https://opencollective.com/nest#backer)
  [![Sponsors on Open Collective](https://opencollective.com/nest/sponsors/badge.svg)](https://opencollective.com/nest#sponsor)-->

# Prueba Técnica BlueExpress

Este repositorio contiene el desarrollo de los ejercicios 1 y 2 para la prueba técnica de BlueExpress.

### Ejercicio 1 - Validación de Palabras Palíndromas
Es una función la cual cuenta todas las palabras palíndromas en una cadena de texto. Un palíndromo es una palabra o frase que se lee igual al revés que al derecho. 
    
    POST : http://localhost:3000/blueExpress/practice1/palindrome
    
Su entrada esta dada por una cadena de texto, ejemplo:

- Input
```bash
    {
        "phrase":"ana ama a mama"
    }
```
- Output
```bash
    {
        "count": "En el texto dado, hay 2 palabras palíndromas."
    }
```

### Ejercicio 2 - Combinaciones de Elementos en un Array
Es una función que encuentra todas las combinaciones únicas de elementos en un array de números.

    POST : http://localhost:3000/blueExpress/practice2/set

Su entrada esta dada por un array de números, ejemplo:

- Input
```bash
    {
        "combined":[4,2,4]        
    }
```
- Output
```bash
    {
    "count": [ [2,4,4], [4,2,4] [4,4,2] ]
    }
```



# Instalación

```bash
$ npm install
```

## Ejecución

```bash
# development
$ npm run start

# watch mode
$ npm run start:dev

# production mode
$ npm run start:prod
```
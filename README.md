## El Juego de la Vida

![BrightCoders Logo](img/logo.png)

## Table of contents

- [El Juego de la Vida](#el-juego-de-la-vida)
- [Table of contents](#table-of-contents)
- [Description](#description)
- [How to install and run the project](#how-to-install-and-run-the-project)
  - [Instalar dependencias:](#instalar-dependencias)
  - [Ejecutar programa (2 formas de hacerlo):](#ejecutar-programa-2-formas-de-hacerlo)
  - [Ejecutar pruebas:](#ejecutar-pruebas)
- [How to Use the Project](#how-to-use-the-project)
- [Credits](#credits)
- [Badges](#badges)

## Description

The Game of Life is not your typical computer game. It is a 'cellular automaton', and was invented by Cambridge mathematician John Conway.

This game became widely known when it was mentioned in an article published by Scientific American in 1970. It consists of a collection of cells which, based on a few mathematical rules, can live, die or multiply. Depending on the initial conditions, the cells form various patterns throughout the course of the game.

This Coding Challenge is about calculating the next generation of Conway’s game of life, given any starting position.

You start with a two dimensional grid of cells, where each cell is either alive or dead. In this version of the problem, the grid is finite, and no life can exist off the edges. When calculating the next generation of the grid, follow these rules:

1. Any live cell with fewer than two live neighbours dies, as if caused by underpopulation.
2. Any live cell with more than three live neighbours dies, as if by overcrowding.
3. Any live cell with two or three live neighbours lives on to the next generation.
4. Any dead cell with exactly three live neighbours becomes a live cell.

You should write a program that can accept an arbitrary grid of cells, and will output a similar grid showing the next generation.

## How to install and run the project

### Instalar dependencias:

```
npm install
```

```
npm install --save-dev nodemon
```

```
npm install --save-dev jest
```

### Ejecutar programa (2 formas de hacerlo):

```
npm run start
```

```
node .
```

### Ejecutar pruebas:

```
npm run test
```

## How to Use the Project

Lo que se hace es correr el main.js y desde ahí escribir por consola el valor de las filas y columnas que corresponderan al tamaño del tablero, luego se mostrará una Generación 1 aleatoria de la que derivará la Generación 2.

## Credits

- [Co-authored-by: Iván Caetano](IvanCa27@users.noreply.github.com)
- [Co-authored-by: Miguel Cobian Meraz](mcmmiguel@users.noreply.github.com)
- [Co-authored-by: Montserrat Aguilar](montsegv-2@users.noreply.github.com)
- [Co-authored-by: Rassiel Mex](RassielMex@users.noreply.github.com)

## Badges

[![Codacy Badge](https://app.codacy.com/project/badge/Grade/c70327e18caf4347b48931aad1368dec)](https://app.codacy.com/gh/BrightCoders-Institute/reto-el-juego-de-la-vida-team-2/dashboard?utm_source=gh&utm_medium=referral&utm_content=&utm_campaign=Badge_grade)

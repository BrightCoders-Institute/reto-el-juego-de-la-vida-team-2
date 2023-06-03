[![Review Assignment Due Date](https://classroom.github.com/assets/deadline-readme-button-24ddc0f5d75046c5622901739e7c5dd533143b0c8e959d652212380cedb1ea36.svg)](https://classroom.github.com/a/-MyOgzrv)
![BrightCoders Logo](img/logo.png)

# El Juego de la vida

> [Ver instrucciones antes de iniciar](./instructions.md)

This README would normally document whatever steps are necessary to get the application up and running.

Things you may want to cover:

- Title or Project Name
- Table of contents
- Description. A brief description of what the project is about
- How to Install and Run the Project.
- How to Use the Project.
- Credits
- Badges

## El Juego de la Vida

![BrightCoders Logo](img/logo.png)

## Table of contents

- [El Juego de la vida](#el-juego-de-la-vida)
  - [El Juego de la Vida](#el-juego-de-la-vida-1)
  - [Table of contents](#table-of-contents)
  - [Description](#description)
  - [How to install and run the project](#how-to-install-and-run-the-project)
    - [Instalar dependencias:](#instalar-dependencias)
    - [Ejecutar programa:](#ejecutar-programa)
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

### Ejecutar programa:

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

```

```

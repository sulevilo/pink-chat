#!/bin/bash

# Instalar dependencias en el directorio raíz
npm install

# Instalar dependencias en el directorio frontend
cd frontend
npm install
cd ..

# Ejecutar el servidor de desarrollo en el directorio raíz
npm run dev &

# Ejecutar el servidor de desarrollo en el directorio frontend
cd frontend
npm run dev &
cd ..

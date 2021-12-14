# Cohorte-1-G4

Somos un equipo de desarrolladores Junior
*****************************************

Este programa fue desarrollado en el stack M.E.R.N. (MongoDB, Express, ReactJS, NodeJS).

El proyecto que hemos creado es una aplicación de turnos y citas para Instituciones Médicas.

link del proyecto desplegado en heroku: https://citas-medicas-04.herokuapp.com/



Instruciones para hacer deploy:


---------- Desplegar el api -------------

1.- Para desplegar el api ubicarse en la terminal en el directorio api/ y ejecutar el comando npm install 

2.- Una vez instaladas todas las dependencias agregar un fichero llamado .env el cual debe contener una variable llamada DB_URL seguida de una cadena de conexion a de mongodb que contenga una coleccion llamada citas-medicas bien sea desde la nube de mongo atlas o en local de la siguiente manera DB_URL=(cadena de conexion) 

3.- Finalmente ejecutar el comando npm start para levantar el api o el comando npm run dev para desplegar en modo desarrollo, la aplicacion podra ser accedida mediate el puerto 5000 del localhost (http://localhost:5000/)


--------- Desplegar el cliente -------------

1.- Una vez desplegada el api ejecutar el comando npm install en el directorio cliente/ para instalar todas las dependencias de este

2.- Finalizada la instalacion de las dependencias servir el cliente mediante el comando npm start esto levantara el mismo en el puerto 3000 del localhost (http://localhost:3000) 



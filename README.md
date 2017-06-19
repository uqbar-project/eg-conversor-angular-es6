# Conversor de medidas en Angular

![video](video/demo.gif)

<img src="https://cloud.githubusercontent.com/assets/4549002/17750101/fa2f7334-6496-11e6-864f-6f57e8d7bc67.png" height="150" width="150"/>

Esta versión utiliza 

- dos controllers diferentes 
- ligados a un service, que en realidad es un objeto de dominio

Lo interesante es que mientras millas tiene un binding bidireccional al service a través del primer controller, el label kilómetros tiene muestra la información del service a partir del segundo controller, y esto muestra cómo se comparte información entre 2 controllers distintos.


/*Sea un salón de clases en el DCyT, donde se procesan los datos de cada estudiante (nombre, edad y sexo). El dato sexo es una letra F o M (femenino - masculino). 
Se desean procesar estos registros de estudiantes para determinar: a. la edad promedio, b. el nombre del estudiante con mayor edad, c. el porcentaje de chicas que son mayor de edad. 

El profesor informa que si asisten Luis (16), Ana (19), José (20) y Carmen (18) 
la salida requerida presenta el siguiente formato: 
Edad promedio: 18.25 Estudiante con mayor edad: José Porcentaje de chicas mayor de edad: 100%  */

import CL_Estudiante from "./CL_Estudiante.js";
import CL_Salon from "./CL_Salon.js";

let estud1=new CL_Estudiante('Luis',16,'M');
let estud2=new CL_Estudiante('Ana',19,'F');
let estud3=new CL_Estudiante('Jose',20,'M');
let estud4=new CL_Estudiante('Carmer',18,'F');

let salon= new CL_Salon();

salon.procesarestudiante(estud1);
salon.procesarestudiante(estud2);
salon.procesarestudiante(estud3);
salon.procesarestudiante(estud4);

let salida=document.getElementById("salida");
salida.innerHTML="Resultados"
salida.innerHTML+="<br> El promedio de edad: "+salon.promedioedad();
salida.innerHTML+="<br> El estudiante de mayor edad es: "+salon.nombremayoredad;
salida.innerHTML+="<br> El porcentaje de chicas mayores de edad es de: "+salon.porchicasmayoredad();


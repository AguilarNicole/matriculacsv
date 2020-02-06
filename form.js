const fs = require("fs");
const btnGuardar = document.getElementById("save");
const btnRead = document.getElementById("read");  /*nombre del ID que esta en index para el botons*/ 
   const identi = document.getElementById("identidad")
   const Nombre = document.getElementById("name")
   const Apellido = document.getElementById("apellido")
   const age = document.getElementById("edad")
   const celular = document.getElementById("telefono")

   btnGuardar.addEventListener("click", function(e){  /*recibe parametros osea lo que va hacer tambien envia una funcion anonima esta no tiene nombre*/ 
    e.preventDefault();/*   */
    console.log("No se puede abrir el archivo");
    fs.open("./alumnos.csv", "a", function(error,archivo) { /*relativa porque inicia en ./ */
        if (error){
            console.log("Error al abrir el archivo");
            console.log(error);
            return;
        };
        const linea = `${identidad.value}, ${name.value}, ${apellido.value}, ${edad.value}, ${telefono.value}`;
         fs.write(archivo, linea, function(err, writen, string){
            if(err){
                console.log("No se puedo escribir ningun dato");
                console.log(err);
                return;
            }
            console.log("Se escribieron los datos exitosamente");
            
        });
    });
    
});
var ingredientes_opcion1 = ['Planta de interior', 'Crecimiento de hasta 6 metros si se cultiva en suelo','lugares con mucha iluminación, evitando la exposición directa al sol.', 'trasplantada o se cambie la tierra de su maceta cada 2 a 3 años.', 'Abono mezcla de turba y humus líquido disuelto en agua.', 'planta medicinal', 'Según el feng shui, atrae la buena suerte.'];
var ingredientes_opcion2 = ['Planta de sol', 'Prosperan con cuidados mínimos.','Requieren recibir una cantidad abundante de luz.', 'Tienen hojas carnosas que les permiten retener la humedad.', 'Tienen en una amplia variedad de formas, tamaños y colores.', 'No soportan el estancamiento de agua.', 'Periodo de floración muy breve.'];
var ingredientes_opcion3 = ['Planta de interior', 'Riego 2 veces por semana','puede florecer durante todo el año.', 'Suele crecer entre 45 y 60 cm.', 'Es originaria de lugares cálidos', 'El lirio debe mantenerse húmedo', 'se necesita una buena fuente de luz'];
var ingredientes_opcion4 = ['Planta de interior', 'Necesita un ambiente muy luminoso sin sol directo','El riego debe ser sólo cuando su tierra se haya secado', 'Asegúrate de que su tierra sea permeable', 'Ten cuidado de las temperaturas extremas', 'Mantén sus hojas libres de polvo', 'trasplantarla a una maceta que tenga al menos 5 centímetros más que la anterior.'];

function cargar(opcion){
    var nombre = document.getElementById("nombre");
    var descripcion = document.getElementById("descripcion");
    var fotoPrincipal = document.getElementById("fotoPrincipal");
    var circulo = document.getElementById("circulo");
    var ingredientes = document.getElementById("ingredientes")

    if(opcion==1){
        nombre.innerHTML = "Palo de brasil"
        descripcion.innerHTML = "Paubrasilia echinata, conocida comúnmente como palo brasil o pernambuco, nativa de Brasil. Su madera es muy resistente, y tiene un color naranja amarillento, a veces un marrón rojizo más oscuro. Es el árbol nacional de Brasil desde 1978. El nombre de Brasil tiene su origen en la manera en que los portugueses llamaban a este árbol: pau brasil, que significa ‘palo brasil’, una alusión al tinte rojo brillante como una brasa que se puede extraer de su madera.";
        fotoPrincipal.src = "img/f1.png";
        circulo.style.background = "radial-gradient(circle, rgba(247,164,34,1) 0%, rgba(241,58,85,1) 100%)";
        ingredientes.innerHTML = "";
        for(x=0; x < ingredientes_opcion1.length; x++ ){
            const li = document.createElement("li");
            const i = document.createElement("i");
            i.classList = "fa-solid fa-check";
            li.appendChild(i);
            const txt = document.createElement("txt");
            txt.innerHTML = ingredientes_opcion1[x];
            li.appendChild(txt);
            ingredientes.appendChild(li);
        }
    }
    if(opcion==2){
        nombre.innerHTML = "Suculentas"
        descripcion.innerHTML = "Las  suculentas son  plantas que llaman mucho la atención por su estructura, por tener unas hojas gruesas y carnosas donde almacenan el agua, pueden recordar a los cactus. Existen unas 60 familias botánicas suculentas. ";
        fotoPrincipal.src = "img/f2.png";
        circulo.style.background = "radial-gradient(circle, rgba(94,246,200,1) 0%, rgba(176,58,241,1) 100%)";
        ingredientes.innerHTML = "";
        for(x=0; x < ingredientes_opcion2.length; x++ ){
            const li = document.createElement("li");
            const i = document.createElement("i");
            i.classList = "fa-solid fa-check";
            li.appendChild(i);
            const txt = document.createElement("txt");
            txt.innerHTML = ingredientes_opcion2[x];
            li.appendChild(txt);
            ingredientes.appendChild(li);
        }
    }
    if(opcion==3){
        nombre.innerHTML = "Cuna de moisés"
        descripcion.innerHTML = "Esta planta de interior es una de las más típicas en los hogares, así que te será muy fácil cuidarla y mantenerla en perfecto estado. El lirio de paz o cuna de Moisés es originaria de México y América tropical, por lo que se dan bien en espacios calurosos y hasta húmedos. Por eso, requiere una gran cantidad de agua y un buen rayo de sol, aunque no precisamente directo. Su distribución abarca desde México hasta Brasil y se concentra en las islas del Pacífico.";
        fotoPrincipal.src = "img/f3.png";
        circulo.style.background = "radial-gradient(circle, rgba(237,123,243,1) 22%, rgba(240,46,110,1) 100%)";
        ingredientes.innerHTML = "";
        for(x=0; x < ingredientes_opcion3.length; x++ ){
            const li = document.createElement("li");
            const i = document.createElement("i");
            i.classList = "fa-solid fa-check";
            li.appendChild(i);
            const txt = document.createElement("txt");
            txt.innerHTML = ingredientes_opcion3[x];
            li.appendChild(txt);
            ingredientes.appendChild(li);
        }
    }
    if(opcion==4){
        nombre.innerHTML = "Planta teléfono"
        descripcion.innerHTML = "La planta Teléfono es una favorita indiscutible cuando hablamos tanto de plantas de interior como de exterior. Esta hermosa trepadora es realmente fácil de cuidar, crece rápido, le da gran vida a cualquier lugar donde la pongas y es excelente opción para purificar el aire, pero ojo: no es una planta pet-friendly, por lo que deberás mantenerla fuera del alcance de tus mascotas.";
        fotoPrincipal.src = "img/f4.png";
        circulo.style.background = "radial-gradient(circle, rgba(247,255,102,1) 15%, rgba(179,255,73,1) 100%)";
        ingredientes.innerHTML = "";
        for(x=0; x < ingredientes_opcion4.length; x++ ){
            const li = document.createElement("li");
            const i = document.createElement("i");
            i.classList = "fa-solid fa-check";
            li.appendChild(i);
            const txt = document.createElement("txt");
            txt.innerHTML = ingredientes_opcion4[x];
            li.appendChild(txt);
            ingredientes.appendChild(li);
        }
    }
    
}
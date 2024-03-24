//Array de propiedades en alquiler
const propiedades_alquiler = [
    //Propiedad 1
    {
        src: "https://images.unsplash.com/photo-1522708323590-d24dbb6b0267?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8YXBhcnRtZW50fGVufDB8MHwwfHx8MA%3D%3D&auto=format&fit=crop&w=700&q=60",
        nombre:"Apartamento en el centro de la ciudad",
        descripcion:"Este apartamento de 2 habitaciones está ubicado en el corazón de la ciudad, cerca de todo.",
        ubicacion:"123 Main Street, Anytown, CA 91234",
        habitaciones:2,
        baños:2,
        precio:2000,
        smoke:false,
        pets:true
    },
    //Propiedad 2
    {
        src: "https://images.unsplash.com/photo-1669071192880-0a94316e6e09?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80",
        nombre:"Apartamento luminoso con vista al mar",
        descripcion: "Este hermoso apartamento ofrece una vista impresionante al mar",
        ubicacion:"456 Ocean Avenue, Seaside Town, CA 56789",
        habitaciones:3,
        baños:3,
        precio:2500,
        smoke:true,
        pets:true
    },
    //Propiedad 3
    {
        src: "https://images.unsplash.com/photo-1567496898669-ee935f5f647a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTF8fGNvbmRvfGVufDB8MHwwfHx8MA%3D%3D&auto=format&fit=crop&w=1000&q=60",
        nombre:"Condominio moderno en zona residencial",
        descripcion: "Este elegante condominio moderno está ubicado en una tranquila zona residencial",
        ubicacion:"123 Main Street, Anytown, CA 91234",
        habitaciones:2,
        baños:2,
        precio:2200,
        smoke:false,
        pets:false
    },
    //Propiedad 4
    {
        scr: "https://images.unsplash.com/photo-1567496898669-ee935f5f647a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTF8fGNvbmRvfGVufDB8MHwwfHx8MA%3D%3D&auto=format&fit=crop&w=1000&q=60",
        nombre:"Cabaña en iloca",
        descripcion: "Comoda y hermosa cabaña en iloca",
        ubicacion:"calle iloca 123, Cabaña 5",
        habitaciones:4,
        baños:3,
        precio:1000,
        smoke:false,
        pets:false
    },
]
//Generalizar una funcion que reciba como parametro un array
function getArrayVentas(array){
    var contenedor = document.querySelector("#contenedor_alquiler");
    //Iterar el array dado como parametro
    for(let i = 0; i<array.length;i++){

        //Crear una variable que almecene cada item de mi array, que en este caso es un objeto
        var objeto = array[i];

        //Crear los divs dado la cantidad de objetos de tiene el array
        var elemento = document.createElement("div");
        //Estilos del div que se creara, como es en bootstrap se creara una clase con los estilos que se requieren
        elemento.classList.add("col-md-4", "mb-4");

        //Crear los divs, con innerHtml y usando la interpolacion para asignar cada propiedad del objeto a las etiquetas HTML
        elemento.innerHTML+=
        `
        <div class="card">
        <img src=${objeto.src} class="card-img-top" alt="Imagen del departamento">
        <div class="card-body">
            <h5 class="card-title">${objeto.nombre}</h5>
            <p class="card-text">${objeto.descripcion}</p>
            <p><i class="fas fa-map-marker-alt"></i> ${objeto.ubicacion}</p>
            <p><i class="fas fa-bed"></i> ${objeto.habitaciones} Habitaciones | <i class="fas fa-bath"></i> ${objeto.baños} Baños</p>
            <p><i class="fas fa-dollar-sign"></i> ${objeto.precio}</p>
        </div>
        </div>
        `
            
        //Validaciones para SMOKE 
        var smokeObject = document.createElement("p");

        //Validacion si no se permite fumar
        if(objeto.smoke==false){
            //Icono de no se permite
            smokeObject.innerHTML = `<i class="fas fa-smoking-ban"></i> `;
            //Inner de no se permite fumar
            smokeObject.innerHTML += "No se permite fumar";
            //Color rojo por que no se permite fumar
            smokeObject.classList.add("text-danger")
        } //Validacion si se permite fumar
        else{
            //Icono de si se permite
            smokeObject.innerHTML+=`<i class="fas fa-smoking"></i>`
            //Inner de si se permite fumar
            smokeObject.innerHTML += "Permitido fumar";
            //Colo verde por que si se permite fumar
            smokeObject.classList.add("text-success")
        }
        elemento.querySelector(".card-body").appendChild(smokeObject)

        //Validaciones para PETS
        var petObject = document.createElement("p");
        //Validaciones si no se permite fumar

        if(objeto.pets==false){
            //Icono no se permite
            petObject.innerHTML+= `<i class="fas fa-ban"></i>`
            //Inner de no se permiten mascotas
            petObject.innerHTML += "No se permiten mascotas";
            //Clase de bootstrap para que sea de color rojo el icono y el texto
            petObject.classList.add("text-danger");
        } //Validacion si se permiten mascotas
        else{
            //Icono si se permite
            petObject.innerHTML += `<i class="fa-solid fa-paw"></i> `;
            //Inner de si se permiten mascotas
            petObject.innerHTML += "Mascotas permitidas";
            //Color verde por que si se permite
            petObject.classList.add("text-success");
        }
        elemento.querySelector(".card-body").appendChild(petObject);

        //Agregar a la seccion que se desee
        contenedor.appendChild(elemento);

    }
}
getArrayVentas(propiedades_alquiler);
const propiedades = [
    { ubicacion: ['Bariloche', 'San Carlos de Bariloche'], direccion: "Onelli 3277", precio: 460 , imagen: "/Inmobiliariahtml/ciudades/imagenes/bariloche600.jpg", estrellas: 3, huespedes: 3 },
    { ubicacion: ['Bariloche', 'San Carlos de Bariloche'], direccion: "Arelauquen lote 322", precio: 1000, imagen: "/Inmobiliariahtml/ciudades/imagenes/bariloche1200.jpg", estrellas: 4, huespedes: 6 },
    { ubicacion: ['Bariloche', 'San Carlos de Bariloche'], direccion: "Arelauquen lote 322", precio: 700, imagen: "imagenes/casarticle.jpg" , estrellas: 5, huespedes: 6 },
    
    
    {ubicacion: ['Ushuaia', 'Ushuaia'], direccion: "Lago el Condor 1233", precio: 1200, imagen: "/Inmobiliariahtml/imagenes/usuahia+1200.jpg", estrellas: 5, huespedes: 5 },
    {ubicacion: ['Ushuaia', 'Ushuaia'], direccion: "Paseo el Sol nro 23", precio: 830, imagen: "/Inmobiliariahtml/ciudades/imagenes/usuahia1000.jpg", estrellas: 3, huespedes: 5 },
    {ubicacion: ['Ushuaia', 'Ushuaia'], direccion: "Bestchedt 1231", precio: 465, imagen: "/Inmobiliariahtml/imagenes/ushuaia.jpg", estrellas: 3, huespedes: 5 },
    
    { ubicacion: ['Puerto Madryn', 'Puerto Madryn'], direccion: "Complejo barrial Amancay", precio: 700, imagen: "/Inmobiliariahtml/main/imagenes/casa1Madryn.jpg", estrellas: 4, huespedes: 5 },
    { ubicacion: ['Puerto Madryn', 'Puerto Madryn'], direccion: "O Higgins 253", precio: 450, imagen: "/Inmobiliariahtml/imagenes/buscador/madryn500.jpg", estrellas: 5, huespedes: 5 },
    { ubicacion: ['Puerto Madryn', 'Puerto Madryn'], direccion: "Puerto Moreno 45", precio: 1024, imagen: "/Inmobiliariahtml/ciudades/imagenes/madryn200jpg.jpg", estrellas: 4, huespedes: 5 },

    
    { ubicacion: ['San Martin', 'San Martin de los Andes'], direccion: "Bustillo 4344", precio: 750, imagen: "/Inmobiliariahtml/ciudades/imagenes/sanmartin1000.jpg", estrellas: 4, huespedes: 3 },
    { ubicacion: ['San Martin', 'San Martin de los Andes'], direccion: "Antuhue 433", precio: 950, imagen: "/Inmobiliariahtml/ciudades/imagenes/sanmartin10002.jpg", estrellas: 4, huespedes: 4 },
    { ubicacion: ['San Martin', 'San Martin de los Andes'], direccion: "Barrio las Victorias", precio: 1250, imagen: "/Inmobiliariahtml/ciudades/imagenes/sanmartin+200.jpg", estrellas: 5, huespedes: 7 },
    { ubicacion: ['San Martin', 'San Martin de los Andes'], direccion: "Camino del Peludo 4500", precio: 499, imagen: "/Inmobiliariahtml/main/ciudades/imagenes/Sanmartin3OG.jpg", estrellas: 5, huespedes: 3 },

    
];




var listaPrecio=[];

var contador=0;

function guardar_valores() {

const ubicacion = document.getElementById("Ubicacion").value.toLowerCase();
const precio = document.getElementById("precio").value;
let [precioMin, precioMax]= filtrarPrecio(precio);

return { ubicacion, precioMin, precioMax };

}

const filtrarPrecio = (precio) => {
    listaPrecio=precio.split (" / ")

    let listoide=listaPrecio.map (element =>{
        return parseInt(element.replace ("$", ""));
        
    });
    return listoide;
}

function buscarCoincidencias (ubicacion, precioMin, precioMax) {
    const buscarPropiedad = propiedades.filter(propiedad => {

        const cumpleUbicacion = propiedad.ubicacion[0].toLowerCase().includes(ubicacion.toLowerCase());
        const cumplePrecio = propiedad.precio >= precioMin && propiedad.precio <= precioMax;

        return cumpleUbicacion && cumplePrecio;
    });
    return buscarPropiedad;
}

function cantidad_estrellas (nro) {
    switch(nro) {
        case 1:
            return(`
            <img src="Logos/estrellaOG.jpg" class="star"/>
            <img src="Logos/Estrella_sin_fondo.png" class="starEmpty"/>
            <img src="Logos/Estrella_sin_fondo.png" class="starEmpty"/>
            <img src="Logos/Estrella_sin_fondo.png" class="starEmpty"/>
            <img src="Logos/Estrella_sin_fondo.png" class="starEmpty"/>
            `)
          
          break;
          case 2:
            return(`
            <img src="Logos/estrellaOG.jpg" class="star"/>
            <img src="Logos/estrellaOG.jpg" class="star"/>
            <img src="Logos/Estrella_sin_fondo.png" class="starEmpty"/>
            <img src="Logos/Estrella_sin_fondo.png" class="starEmpty"/>
            <img src="Logos/Estrella_sin_fondo.png" class="starEmpty"/>
            `)
            
            break;
            case 3:
                return(`
            <img src="Logos/estrellaOG.jpg" class="star"/>
            <img src="Logos/estrellaOG.jpg" class="star"/>
            <img src="Logos/estrellaOG.jpg" class="star"/>
            <img src="Logos/Estrella_sin_fondo.png" class="starEmpty"/>
            <img src="Logos/Estrella_sin_fondo.png" class="starEmpty"/>
            `)
              
              break;
              case 4:
                return (`
            <img src="Logos/estrellaOG.jpg" class="star"/>
            <img src="Logos/estrellaOG.jpg" class="star"/>
            <img src="Logos/estrellaOG.jpg" class="star"/>
            <img src="Logos/estrellaOG.jpg" class="star"/>
            <img src="Logos/Estrella_sin_fondo.png" class="starEmpty"/>
            `)
                break;

                case 5:
                    return(`
            <img src="Logos/estrellaOG.jpg" class="star"/>
            <img src="Logos/estrellaOG.jpg" class="star"/>
            <img src="Logos/estrellaOG.jpg" class="star"/>
            <img src="Logos/estrellaOG.jpg" class="star"/>
            <img src="Logos/estrellaOG.jpg" class="star"/>
            `)
            break;
            default:
                return `
            <img src="Logos/estrellaOG.jpg" class="star"/>
            <img src="Logos/Estrella_sin_fondo.png" class="starEmpty"/>
            <img src="Logos/Estrella_sin_fondo.png" class="starEmpty"/>
            <img src="Logos/Estrella_sin_fondo.png" class="starEmpty"/>
            <img src="Logos/Estrella_sin_fondo.png" class="starEmpty"/>
            `
               break;
     
      }

      
}

function cantidad_huespedes (nro) {}




function mostrarPropiedades(propiedades) {
    const resultadoDiv = document.getElementById("resultado");
    resultadoDiv.innerHTML = ''; 

    const template = document.getElementById('propiedad-template');

    propiedades.forEach(propiedad => {
        const clone = template.content.cloneNode(true);
        
        clone.querySelector('.imagen-cabania').src = propiedad.imagen || 'default.jpg';
        clone.querySelector('.propiedad-precio').textContent = `${propiedad.precio} USD`;
        clone.querySelector('.propiedad-direccion').textContent = `${propiedad.direccion}`;
        clone.querySelector('.propiedad-ubicacion').textContent = `${propiedad.ubicacion[1]}`;

        

        clone.querySelector('.estrellas').innerHTML = cantidad_estrellas(propiedad.estrellas);
        
        resultadoDiv.appendChild(clone);

        contador++;
    });

    coincidencias = propiedades.length; 
    const alojamientosEncontrados = document.querySelector('.alojamientos-encontrados');
    if (coincidencias !== 0) {
        alojamientosEncontrados.textContent = `${coincidencias} propiedad/es encontradas`;
    } else {
        alert (`No se encontraron propiedades. Prueba buscando 'San Martin', 'Bariloche', 'Ushuaia', 'Puerto Madryn'`);
    }
}



    
    
    

window.mostrarPropiedades=mostrarPropiedades;

document.getElementById('elegir').addEventListener('click', () => {
    const { ubicacion, precioMin, precioMax } = guardar_valores();
    const propiedadesFiltradas = buscarCoincidencias(ubicacion, precioMin, precioMax);
    
    

    const nuevaVentana = window.open('resultados.html');

    
    nuevaVentana.onload = () => {
        nuevaVentana.mostrarPropiedades(propiedadesFiltradas);
    }


});





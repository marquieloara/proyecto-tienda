document.addEventListener( 'DOMContentLoaded' ,() => {
    consultarApi();
});

const app = document.querySelector( '#root' );


const consultarApi= ()=> {
    const url = '../db.json';
    fetch( url )//Fetch para hacer consultar api - 200 consulta correcta, 404 consulta mala
        .then( response => response.json())
        .then( resolve => mostrarApi( resolve ) );
}

function nombre() {

}



const mostrarApi = ( productos ) => {
    
    productos.forEach( producto => {
        const {  imagen, nombre, precio } = producto;
        const contenedorDiv = document.createElement( 'div' );
        contenedorDiv.classList.add( 'col-sm-1', 'col-md-4', 'col-lg-4' );
        contenedorDiv.innerHTML = `
           
        
        
        
        
        
        <div class="card">

            <div class="imgBox">
            <img src="${imagen}" alt="mouse corsair" class="mouse">
            </div>
      
            <div class="contentBox">
             <h3>${nombre}</h3>
             <h2 class="price">${precio}$</h2>
             <a href="#" class="buy">Comprar</a>
            </div>
        </div>
        
        `;

        app.appendChild( contenedorDiv )
        
    } );
}
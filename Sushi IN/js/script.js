(function(){
     function $(selector){
        return document.querySelector(selector);
    }
        function Carrito(){
            this.catalogo = [{id:'P01',nombre:'TÉ VERDE',precio:1.75,imagen:'bebida1.jpg',descripcion:'Té verde caliente o helado, completamente narutal.'},
                            {id:'P02',nombre:'LIMONADA',precio:2.25,imagen:'bebida2.jpg',descripcion:'Limonada o naranjada con hierba buena, completamente natural.'},
                            {id:'P03',nombre:'MICHELADA',precio:2.95,imagen:'bebida3.jpg',descripcion:'Michelada internacional no incluye Stella Artois y Sapporo.'},];
            
            this.constructor = function(){
                if(!localStorage.getItem("carrito")){
                localStorage.setItem('carrito','[]');
                }
            }
             this.getCarrito = JSON.parse(localStorage.getItem("carrito"));
             this.agregarItem = function(item){
                for(i of this.catalogo){
                        if(i.id === item){
                        var registro = i
                    }
                 }
                     if(!registro){
                    return
                }

                for (i of this.getCarrito){
                    if(i.id === item){
                        i.cantidad++;
                        console.log(this.getCarrito);
                        localStorage.setItem("carrito",JSON.stringify(this.getCarrito))
                        return;
                }
            }
            registro.cantidad = 1;
            this.getCarrito.push(registro);
            console.log(this.getCarrito);
            localStorage.setItem("carrito",JSON.stringify(this.getCarrito));

            }

            this.getTotal = function(){
                var total = 0;
                for (i of this.getCarrito) {
                total += parseFloat(i.cantidad) * parseFloat(i.precio);
                }
                return total.toFixed(2)
            }

       this.eliminarItem = function(item){
            for (var i in this.getCarrito) {
                if(this.getCarrito[i].id === item){
                    this.getCarrito.splice(i,1);
                }
            }
            localStorage.setItem("carrito",JSON.stringify(this.getCarrito));
        }


        }

        function Carrito_View(){
            this.renderCatalogo = function(){
                  var template = ``;
            for (var i in carrito.catalogo) {
                template += `

                <div class="parrafo1">

                <img class="imagens" src="./img/${carrito.catalogo[i].imagen}">

                 <h2 class="Dat">${carrito.catalogo[i].nombre}</h2>
                    <p>${carrito.catalogo[i].descripcion}</p>

                    
                <h3 class="subtitle is-4">Precio: <strong>$${carrito.catalogo[i].precio}</strong></h3>
                  <br>
                <a href="#" class="button" id="addItem" data-producto="${carrito.catalogo[i].id}">Agregar al Carrito</a>
               </div>
       


                `;
            }

            $("#catalogo").innerHTML = template;

            }


       
        }




        var carrito = new Carrito();
        var carrito_view = new Carrito_View();

        document.addEventListener('DOMContentLoaded',function(){
           
             carrito_view.renderCatalogo();
          
             carrito.constructor();

          

    });









//ventana modal******************************************

//***************************************************************

    })();
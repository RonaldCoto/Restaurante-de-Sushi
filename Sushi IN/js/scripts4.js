(function(){
     function $(selector){
        return document.querySelector(selector);
    }
        function Carrito(){
            this.catalogo = [{id:'PR01',nombre:'COMBO PARA DOS',precio:15.95,imagen:'plato5.jpg',descripcion:'¿Qué mejor que pasar un rato en pareja digustando unos deliciosos Tuna Sushi Tacos? Disfruta este delicioso platillo acompañado de dos bebidas.'},
                            {id:'PR02',nombre:'COMBO PARA TRES',precio:16.99,imagen:'plato2.jpg',descripcion:'Perfecto para compartir con amigos, goza tu paladar y el de tus amigos con nuestros exquisitos Bahamas Rolls y puedes acompañarlo con la bebida de tu preferencia.'},
                            {id:'PR03',nombre:'COMBO FAMILIAR',precio:20.99,imagen:'plato4.jpg',descripcion:'La mejor ocasión para disfrutar con tu familia, con nuestra Sopa Ramen quedarán todos con ganas de disfrutar más.'},];
            
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
<br><br><br><br>
                <a href="comentar.html" target="_blank" class="button"  >Comentar</a>
               </div>
       


                `;
            }

            $("#catalogo").innerHTML = template;

            }

            this.renderCarrito = function(){
                template = ``;
                for(i of carrito.getCarrito){
                    template += `

                    
                    <div class="Heading">


                        <div class="Cell">
                       <img class="anchi" src="./img/${i.imagen}" alt="">
                    </div>
                        <div class="Cell">
                            <p>
                                ${i.nombre}</p>
                    </div>
                    <div class="Cell">
                             <p>
                                $${i.precio}</p>
                    </div>
                    <div class="Cell">
                            <p>
                                ${i.cantidad}</p>
                    </div>
                    <div class="Cell">
                            <p>
                                $${i.cantidad * i.precio}</p>
                    </div>
                    <div class="Cell">


                        
                                <p class="field"><a href="#" class="enlaceboton" id="deleteProducto" data-producto="${i.id}"></a>
                    </div>
                     </div>




               
                    `;
                }
                $("#productosCarrito").innerHTML = template;
                $("#totalCarrito > strong").innerHTML = "$"+carrito.getTotal();

            }

       
        }




        var carrito = new Carrito();
        var carrito_view = new Carrito_View();

        document.addEventListener('DOMContentLoaded',function(){
             carrito_view.renderCarrito();
             carrito_view.renderCatalogo();
             carrito.constructor();

          

    });

        $("#catalogo").addEventListener("click",function(ev){
        ev.preventDefault();
        if(ev.target.id === "addItem"){
            var id = ev.target.dataset.producto;
            carrito.agregarItem(id);
         alert("Se ha agregado el producto al carrito");
        }else{
            window.location="comentar.html";
        }
        
    });

    $("#productosCarrito").addEventListener("click",function(ev){
        ev.preventDefault();
        if(ev.target.id === "deleteProducto"){
            carrito.eliminarItem(ev.target.dataset.producto);
            carrito_view.renderCarrito();
            carrito_view.totalProductos();
        }
    })






//ventana modal******************************************
            var mascara = document.getElementById('lamascara');
            var btn = document.getElementById("Btn");
            var cerrar = document.getElementsByClassName("cerrar")[0];

            btn.onclick = function() {
             mascara.style.display = "block";
             carrito_view.renderCarrito();
            }
            cerrar.onclick = function() {
             mascara.style.display = "none";
            }
            window.onclick = function(event) {
             if (event.target == mascara) {
             mascara.style.display = "none";
             }
            }
//***************************************************************

    })();
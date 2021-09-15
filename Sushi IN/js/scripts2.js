(function(){
     function $(selector){
        return document.querySelector(selector);
    }
        function Carrito(){
            this.catalogo = [{id:'F01',nombre:'GINGER SALMON SALAD',precio:12.95,imagen:'plato1.jpg',descripcion:'Mix de lechugas con arugula acompañado de edamames al vapor, almendras, gajos de mandarina, salmón sellado y fideos de arroz tempurizados'},
                            {id:'F02',nombre:'BAHAMAS ROLL',precio:9.95,imagen:'plato2.jpg',descripcion:'Delicioso roll envuelto en papel de arroz y salmón, relleno de tuna, kanikama, arugula y edamames al vapor, con un toque de ajonjolí'},
                            {id:'F04',nombre:'SOPA RAMEN',precio:13.95,imagen:'plato4.jpg',descripcion:'Exquisita sopa tradicional oriental con cerdo horneado, camarones salteados sobre una base de fideos ramen, retoño de soya, cebollín y cebolla'},
                            {id:'F05',nombre:'TUNA SUSHI TACOS',precio:11.95,imagen:'plato5.jpg',descripcion:'Deliciosos tacos de tuna marinados en aceite de ajonjolí, arroz, aguacate, mayonesa picante y ajonjolí tostado en tortillas japonesas'},
                            {id:'F03',nombre:'SALMON CHIPOTLE POKE',precio:12.95,imagen:'plato3.jpg',descripcion:'Salmon marinado con nuestra exquisita salsa poke, cebollin, acompañado de arroz, aguacate, hilos de tortilla de arroz y nuestra salsa chipotle'},];
            
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
                return total.toFixed(2);
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
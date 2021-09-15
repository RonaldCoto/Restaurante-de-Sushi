(function(){
     function $(selector){
        return document.querySelector(selector);
    }
        function Carrito(){
            this.catalogo = [{id:'E01',nombre:'PULPO CHIPOTLE ',precio:6.95,imagen:'entrada1.jpg',descripcion:'Canastas de tela de wantan rellenas de pulpo salteado con mantequilla y sake, acompañado de mayo chipotle y cebollín.'},
                            {id:'E02',nombre:'SPICY EDAMAMES',precio:6.95,imagen:'entrada2.jpg',descripcion:'Edamames al vapor, salteados con shirasha y especies de la casa, sal de mar y china y ajonjolí blanco.'},
                            {id:'E04',nombre:'RAINBOW TARTARE',precio:8.95,imagen:'entrada4.jpg',descripcion:'Exquisito tartare de tuna, salmón, edamames al vapor, aguacate acompañado de nuestro nuevo aderezo de jengibre.'},
                            {id:'E05',nombre:'WONTON EDAMAME',precio:4.95,imagen:'entrada5.jpg',descripcion:'Tela de wonton rellena de edamame al vapor, mozarrella y schichimi, acompañada de nuestra salsa sweet chili.'},
                            {id:'E03',nombre:'SHRIMP SPRING ROLL',precio:8.95,imagen:'entrada3.jpg',descripcion:'Delicioso spring roll relleno de camarones al vapor, lechuga romana, kanikama, zanahoria, hyashi wakame y aguacate, envuelto en hoja de arroz'},];
            
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
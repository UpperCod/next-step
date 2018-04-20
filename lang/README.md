# next-step

Crea un iterador similar al retorno de una función generadora, con el que usted mediante next podrá ejecutar una lista de funciones hasta completarla.

## Generadores

```js
function *sample(){
   yield 1;
   yield 2;
   return 3;
}

let iterator = sample();

   iterator.next() // {value : 1 , done : false}
   iterator.next() // {value : 2 , done : false}
   iterator.next() // {value : 3 , done : false}
   iterator.next() // {value : undefined , done : true}

```

## next-step

```js
import step from "next-step";

function sample(){
   return step(
       ()=>1,
       ()=>2,
       ()=>3
   );
}

let iterator = sample();

   iterator.next() // {value : 1 , done : false}
   iterator.next() // {value : 2 , done : false}
   iterator.next() // {value : 3 , done : false}
   iterator.next() // {value : undefined , done : true}
```

## Motivacion

Los generadores son el mejor avance para javascript, pero su compatibilidad en los navegadores aún no está completa,
yo personalmente los ocupo dentro de mi libreria [Kubox](https://www.github.com/uppercod/kubox), para el manejo asincrono en el cambio de estado.

### Ejemplo con kubox

```js
export default function *api(state,value){
   yield {loading : true};
   yield fetch("//sample.api")
         .then((response)=>response.json())
         .then((response)=>{loading:false,response})
}
```

> El método `Kubox.recycle` dentro de **kubox**, le permite reciclar el retorno de un generador modificando el estado a medida se itera sobre el con el uso del metodo **next**, si `Kubox.recycle` recibe una promesa la esperara hasta ejecutar nuevamente **next**. Espero que los generadores sean unos RockStar 🤟 proximamente, mucho mas que las funciones asíncronas.

### Ejemplo con kubox + next-step

```js
import step from "next-step";

export default function api(state,value){
   return step(
       ()=>({loading:true}),
       ()=>fetch("//sample.api")
           .then((response)=>response.json())
           .then((response)=>{loading:false,response})
   )
}
```

> como notara no hay mucha diferencia, solo es un poco menos elegante, pero funciona en todos los navegadores 🛠️.



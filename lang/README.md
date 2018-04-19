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
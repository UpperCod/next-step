# next-step

Create an iterator similar to the return of a generating function, with which you can execute a list of functions next to complete it.

## Generators

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
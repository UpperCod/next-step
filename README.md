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

## Motivation

Generators are the best advance for javascript, but its compatibility in browsers is not yet complete,
I personally occupy them in my library [Kubox] (https://www.github.com/uppercod/kubox), for asynchronous handling in the change of state.

### Ejemplo con kubox

```js
export default function *api(state,value){
   yield {loading : true};
   yield fetch("//sample.api")
         .then((response)=>response.json())
         .then((response)=>{loading:false,response})
}
```

> The `Kubox.recycle` method inside **kubox**, allows you to recycle the return of a generator by modifying the state as you iterate over it with the use of the **next** method, if` Kubox.recycle` You receive a promise, you wait until you run again **next**. I hope that the generators are a few RockStar 🤟 coming soon, much more than the asynchronous functions.

### Example with kubox + next-step

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

> As you will notice there is not much difference, it is just a little less elegant, but it works in all browsers 🛠️.


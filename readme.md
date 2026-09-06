## Sync in js

Synchronous means the code runs in a particular sequence of instructions given in the program. Each instruction waits for the previous instruction to complete its execution.

## Callback Hell

Nested callbacks stacked below one another forming a pyramid structure. (pyramind of Doom). This style of programming becomes difficult to understand and manage.

## Promises

Promise is for eventual completion of task. It is an object in JS. It is a solution to callback hell.
```
let promise = new Promise((resolve,reject)=>{....})
// function with two handlers
```
Resolve and reject are callback provided by js

## .then() and . ctach()
```
promise.then((res)=>{.....})
promise.catch((err)=>{....})
```

## Async-Await
async function always returns a promise;

```
async function myFunc(){....}
```
await pauses the execution of its surrounding async function until the promise is settled.
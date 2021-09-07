function receivesAFunction(cb){
    cb();
}
function returnsANamedFunction(){
    const namedFunction = () =>{
        return "hello";
    }
    return namedFunction;
}

function returnsAnAnonymousFunction(){
    return (function(){
        return "Hi";
    })
}
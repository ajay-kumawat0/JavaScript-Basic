(function funNOne(){
    console.log("IIFE Function One");
})();


((name)=>{
    console.log(`IIFE Function ${name}`);
})('RAM')
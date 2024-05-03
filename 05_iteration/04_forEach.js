const language = ['java', 'c', 'c++', 'javaScript'];

language.forEach(function(name){
    // console.log(name);
})

language.forEach((name)=>{
    // console.log(name);
})

const myLanguage = [
    {
        name : 'c',
        extension : 'c'
    },
    {
        name : 'java',
        extension : 'java'
    },
    {
        name : 'python',
        extension : 'py'
    },
]

myLanguage.forEach((lan)=>{
    console.log(lan.name);
})
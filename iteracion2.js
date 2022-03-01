const alumns = [
    {name: 'Pepe Viruela', T1: false, T2: false, T3: true}, 
		{name: 'Lucia Aranda', T1: true, T2: false, T3: true},
		{name: 'Juan Miranda', T1: false, T2: true, T3: true},
		{name: 'Alfredo Blanco', T1: false, T2: false, T3: false},
		{name: 'Raquel Benito', T1: true, T2: true, T3: true}
]


let alumnsWithAproved = alumns.map(object => {


    if(object.T1 === true && object.T2 === true){
        object.isAproved = true;
    }else if(object.T1 === true && object.T3 === true){
        object.isAproved = true;
    }else if(object.T2 === true && object.T3 === true){
        object.isAproved = true;
        
    }

    return object;



})

console.log(alumnsWithAproved)
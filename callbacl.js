function greeting (gretingHandler, name){
    gretingHandler(name);

}

// const nsme = 'Hlim mama';
// const numbers = [45, 54, 78];
// const laptop = { price: 45000, vrand: 'lenovo' , memory: '8gb'};

function gretingHandler(name){
    console.log('Good Morniing', name);
}

greeting(gretingHandler, 'Tom Hanks')
/* 
Truthy'
1.true
2.any number (+ve, -ve) will be truthy other than 0
3.any string empty string
4.'0', 'false'
5.{}
6. []

Falsy;
1.false
2.0
3. '' (empty string)
4.undefined
5.null 
*/


let x = [5, 5];
console.log(x)
if(x){
    console.log('value of x is truthy');

}
else{
    console.log('value of x is falsy');
}

// optional
// check falsy

const y = {class: 9};
if (!y){
console.log('value is falsy')
}

const z = 50;
if(!!x){
    console.log('value is truthy')
}
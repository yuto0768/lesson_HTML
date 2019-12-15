var number = [1,101,200,300]

var number_filter = number.filter( function( value ) {
    return value >200;
})
console.log(number_filter);

var number_map = number.map( function ( value ){
    return value * 10;

})
console.log(number_map);

var number_slice = number.slice( 1, 3 );
console.log(number_slice);
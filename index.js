$(function(){
    console.log(filterArray());
    
    function filterArray(){
        var array = [10, 8, 2, 36];
        var res = $.grep(array, function( n, i ) {
            n = n*2;
            return n > 20;
        });
        return res;
    }
});
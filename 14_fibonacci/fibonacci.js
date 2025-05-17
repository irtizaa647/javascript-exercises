const fibonacci = function(n) {
    if(n<0) return 'Error';

    if(n===1||n===2){
        return 1;
    }

    let a=1,b=1,temp;

    for(let i=3;i<=n;i++){
        temp = a+b;
        a=b;
        b=temp;
    }
    return b;

};

// Do not edit below this line
module.exports = fibonacci;

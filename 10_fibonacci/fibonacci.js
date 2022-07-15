const fibonacci = function(num) {
    if(num<0){return "OOPS";}
        let total=[];
            for(let i=0;i<=num;i++){
                if(i==0){total.push(0);}
                else if(i==1 || i==2){total.push(1);}
                else{//
                    total.push(total[i-2]+total[i-1]);
                }
            }
    return total[num];
};
// Do not edit below this line
module.exports = fibonacci;

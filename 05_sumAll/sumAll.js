const sumAll = function(int1,int2) {
let start, end;
if(int1>int2){
   start=int2;
   end=int1;
}
else{
  start=int1;
  end=int2;
}
if (typeof int1!="number" || typeof int2!="number" || int1<0 || int2 <0){
  return "ERROR";
}
else{
  let sum=0;
  for(let i=start;i<=end;i++){
    sum+=i;
}
return sum;
}
};

// Do not edit below this line
module.exports = sumAll;

const repeatString = function(string, num) {
if(num>1){return string+repeatString(string, num-1);}
else if(num<0){return "ERROR";}
else if(num==0){return "";}
else{return string;}
};

// Do not edit below this line
module.exports = repeatString;

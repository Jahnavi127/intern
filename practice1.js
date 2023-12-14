let a={a:1,b:2};
let b=[["a",1],["b",2]];
console.log(Object.fromEntries(b));
//cloning of array
var array_Clone = (a) => a;
console.log(array_Clone([1, 2, 4, 0]));
console.log(array_Clone([1, 2, [4, 0]]));
//3
let first=(array,n=1)=>{
    if(n>=0){
        return array.slice(0,n);
    }
    else{
        return [];
    }
}
console.log(first([7, 9, 0, -2]));
console.log(first([],3));
console.log(first([7, 9, 0, -2],3));
console.log(first([7, 9, 0, -2],6));
console.log(first([7, 9, 0, -2],-2));
//4
let last=(array,n=array.length)=>{
    if(n<array.length){
        return array.slice(array.length-n,array.length);
    }
    else if(n==array.length){
        return array[array.length-1];
    }
    else{
        return array;
    }
}
console.log(last([7, 9, 0, -2]));
console.log(last([7, 9, 0, -2],3));
console.log(last([7, 9, 0, -2],6));
//5
array=["Red", "Green", "White", "Black"];
console.log(array.join(","));
console.log(array.join("-"));
console.log(array.join("+"));
//6
let ans="";
let evedash=(number)=>{
    for(i=0;i<number.length-1;i++){
        if(number[i]%2==0 && number[i+1]%2==0){
            ans+=number[i]+"-"
        }
        else{
            ans+=number[i];
        }
    }
    ans+=number[number.length-1]
    return ans;
}
console.log(evedash("0254826428649489834791768"));
//7
let numbers = [40, 100, 1, 5, 25, 10];
numbers.sort((a,b)=>a-b);
console.log(numbers);
numbers.sort((a,b)=>b-a);
console.log(numbers);
//8
let arr=[3, 'a', 'a', 'a', 2, 3, 'a', 3, 'a', 2, 4, 9, 3];
let j,m=0,answer=1,val;
for(i=0;i<arr.length;i++){
    m=0;
    for(j=0;j<arr.length;j++){
        if(arr[i]===arr[j]){
            m+=1;
        }
    }
        if(answer<m){
            answer=m;
            val=arr[i];
        }
}

console.log(val,answer);
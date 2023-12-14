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
//9
let isUpperCase=(i)=> i===i.toUpperCase();
let s = 'The Quick Brown Fox';
ans="";
for(i of s){
    if(isUpperCase(i)){
        ans+=i.toLowerCase();
    }
    else{
        ans+=i.toUpperCase();
    }
}
console.log(ans);
//10
a = [[1, 2, 1, 24], [8, 11, 9, 4], [7, 0, 7, 27], [7, 4, 28, 14], [3, 10, 26, 7]];
j=0;
for(i of a){
    console.log("row"+j)
    for(let k of i){
        console.log(k);
    }
    j++;
}
//11(Binary search)
a= [1, 2, 3, 4, 5, 7, 8, 9];
let binary_search=(a,i)=>{
    let l=0,h=a.length-1,m;
    while(l<=h){
        m=Math.floor((l+h)/2)
        if(a[m]==i){
            return m 
        }
        else if(a[m]>i){
            h=m-1;
        }
        else{
            l=m+1;
        }
    }
}
console.log("Binary search");
console.log(binary_search(a, 1)); //0
console.log(binary_search(a, 5)); //4
//12
a=[1, 2, -2, 4, 5, 4, 7, 8, 7, 7, 71, 3, 6];
m=0;
ans=new Set();
for(i=0;i<a.length;i++){
    m=0;
    for(j=0;j<a.length;j++){
        if(a[i]===a[j]){
            m+=1;
        }
    }
    if(m>1){
        ans.add(a[i]);
    }
}
console.log(ans);
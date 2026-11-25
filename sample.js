// const readline=require('readline')
// const rl=readline.createInterface(process.stdin,process.stdout)
// rl.question('enter some text',(x)=>{
//     y=""
//     for(let i=0;i<x.length;i++){
//         if(x.charAt(i)>='a' && x.charAt(i)<='z'){
//             y=y+x.charAt(i).toUpperCase();
//         }
//         else if(x.charAt(i)>='A' && x.charAt(i)<='Z'){
//             y=y+x.charAt(i).toLowerCase();
//         }

       
//     }
//      console.log(y);
// })

// var arr1=[3, 'a', 'a', 'a', 2, 3, 'a', 3, 'a', 2, 4, 9, 3];
// let hmm=new Map()
// let mf=1;
// for(let i=0;i<arr1.length;i++){
//     let c=(hmm.get(arr1[i]) || 0) +1;
//     hmm.set(arr1[i],c);
//     if(c>mf){
//         mf=c;
//     }
// }
// console.log(mf);


//  let Mynum = [1, 2, 2, 4, 5, 4, 7, 8, 7, 3, 6];
//  let u=[]
//  for(let i=0;i<Mynum.length;i++){
//     if(!u.includes(Mynum[i])){
//         u.push(Mynum[i]);
//     }
//  }
//  console.log(u);

function swap(arr, first_Index, second_Index){
  var temp = arr[first_Index];
  arr[first_Index] = arr[second_Index];
  arr[second_Index] = temp;
}

function bubble_Sort(arr){
    var len=arr.length;
    var i,j,stop;
    for(i=0;i<len;i++){
        for(j=0,stop=len-i;j<stop-1;j++){
            if(arr[j]>arr[j+1]){
                swap(arr,j,j+1);
            }
        }
    }
    return arr;
}
myArray=[3, 0, 2, 5, -1, 4, 1];
console.log("Original array: " + myArray);
var sortedArray = bubble_Sort(myArray);
console.log("Sorted array: " + sortedArray);
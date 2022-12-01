bag=""
let str="nrupul"
for (let i=N-1;i>=0;i--){
    bag+=str[i];
}
if (str===bag){
    console.log("Yes");
}else{
    console.log("No");
}
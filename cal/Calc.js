function set_roll_number() {
    let r_num = prompt('Enter your roll number')
    document.getElementById('hi').innerHTML = r_num;
}
function valuesofarray(){
    var value1=document.getElementById("data1").value;
    var value2=document.getElementById('data2').value;
    
    if((value1 == '')){
        document.getElementById('data1').style.border='solid 5px red';
        document.getElementById('data1').value='You must enter the value';
        }
    else{
        document.getElementById('data1').style.border='solid 5px green';
        document.getElementById('data2').style.border='solid 5px green';
        return 0;
    }
}
function convertstringtoarray(){
    valuesofarray();
    let array=document.getElementById('data1').value;
    splitedarray=array.split(",");
    let a=[];
    splitedarray.forEach(element => a.push(parseInt(element.replace(" ", ))))
    console.log(a);
    return a;
}
function msort(){
    let a = convertstringtoarray();
    let b=mergesort(a);
    document.getElementById('result').innerHTML=b;
}
function mergesort(a){
    if(a.length<2){
        return a;
    }
    const half = a.length / 2
    const l = a.slice(0,half)
    const r = a.slice(half,a.length)
    return merge(mergesort(l),mergesort(r))
}
function merge(l,r){
    const newarray = []
    while(l.length && r.length){
        if(l[0]<r[0]){
            newarray.push(l.shift())
        }
        else{
            newarray.push(r.shift())
        }
    }
    console.log(newarray);
    return newarray.concat(l).concat(r)
    
}
function bsort(){
    let arr=convertstringtoarray();
    let b = bubblesort(arr)
    document.getElementById('result').innerHTML=b;

}
function bubblesort(a){
    let i;
    let j;
    let temp;
    for(i=0;i<a.length;i++){
        for(j=0;j<a.length-1;j++){
            if(a[i]<a[j]){
                temp=a[i];
                a[i]=a[j];
                a[j]=temp;
            }
            
        }
    }
    return(a);
}
function addition(){
    values();
    let value1=document.getElementById('data1').value;
    let value2=document.getElementById('data2').value;
    value1=Number(value1);
    value2=Number(value2);
    let result= value1+value2;
    document.getElementById('result').innerHTML=result;
    
    
}
function subtraction(){
    
        values();
        
        var value1=document.getElementById("data1").value;
        var value2=document.getElementById('data2').value;
        value1=Number(value1);
        value2=Number(value2);
        
        let result= value1 - value2;
        document.getElementById('result').innerHTML=result;
    

}
function values(){
    var value1=document.getElementById("data1").value;
    var value2=document.getElementById('data2').value;
    value1=Number(value1);
    value2=Number(value2);
    if((value1 == 0)&&(value2 != 0)){
        document.getElementById('data1').style.border='solid 5px red';
        document.getElementById('data1').value='You must enter the value';
        document.getElementById('data2').style.border='solid 5px green';

    }
    else if((value1 != 0)&&(value2 == 0)){
        document.getElementById('data2').style.border='solid 5px red';
        document.getElementById('data2').value='You must enter the value';
        document.getElementById('data1').style.border='solid 5px green';

    }
    else if((value1 == 0)&&(value2==0)){
        document.getElementById('data1').style.border='solid 5px red';
        document.getElementById('data1').value='You must enter the value';
        document.getElementById('data2').style.border='solid 5px red';
        document.getElementById('data2').value='You must enter the value';

    }
    else{
        document.getElementById('data1').style.border='solid 5px green';
        document.getElementById('data2').style.border='solid 5px green';
        return 0;
    }
}
function multiplication(){
    values();
        
        var value1=document.getElementById("data1").value;
        var value2=document.getElementById('data2').value;
        value1=Number(value1);
        value2=Number(value2);
        
        let result= value1 * value2;
        document.getElementById('result').innerHTML=result;
}
function division(){
    values();
        
        var value1=document.getElementById("data1").value;
        var value2=document.getElementById('data2').value;
        value1=Number(value1);
        value2=Number(value2);
        
        let result= value1 / value2;
        document.getElementById('result').innerHTML=result;
}
function floordivision(){
    values();
        
        var value1=document.getElementById("data1").value;
        var value2=document.getElementById('data2').value;
        value1=Number(value1);
        value2=Number(value2);
        
        let result= value1 % value2;
        document.getElementById('result').innerHTML=result;
}
function factorial(){
    valuesofarray();
    let n=document.getElementById('data1').value;
    n=Number(n);
    let i=n-1;
    
    while(i){
        n=n*i;
        i--;
    }
    document.getElementById('result').innerHTML=n;
}





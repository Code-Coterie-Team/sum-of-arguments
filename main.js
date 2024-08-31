function sumOfnum(array){
    let sum=0
    array.forEach(element=> {
        sum=sum+element;
    });
    return sum;
        
    }
    


 const first=sumOfnum([12,4,5,15]);
 var result=document.getElementById("show");
 result.innerHTML=" sum :"+first;


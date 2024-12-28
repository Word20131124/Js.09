let arr = ['non', 'wre', 'sai', 'banana']
    let n = []
    let noN = []
    
    for(let sorted of arr){
       if(sorted.includes("n")){
        n.push(sorted)
       } else{
        noN.push(sorted)
       }
    }
    
    console.log(n)
    console.log(noN)
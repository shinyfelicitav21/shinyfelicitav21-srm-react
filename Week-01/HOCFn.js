const myHOCFn = (data,fn) => {
    let val = data * 5; 
    console.log(val); 
    return fn(val);
}

const xyz = (x) => { 
    console.log("==Value of X is..."  +x); 
    return x*3;
};

let res3 = myHOCFn(500,xyz)

console.log(res3);
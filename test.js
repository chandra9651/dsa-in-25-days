const array = [4,5,6,8];

const na = array.reduce((obj,node,i)=>{
  obj[node.id] = i;
  return obj;
},{});



console.log(na);
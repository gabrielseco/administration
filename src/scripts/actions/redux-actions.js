export default function action(constant, items=[], cb=null){
  if(cb !== null){
    cb();
  }
  return{
    type: constant,
    items: items
  };

}

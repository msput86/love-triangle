/**
 * @param preferences - an array of integers. Indices of people, whom they love
 * @returns number of love triangles
 */
module.exports = function getLoveTrianglesCount(preferences = []) {
  if (preferences.length<3){
    return 0;
  }
  let processed = {};
  let triangles = [];
  let preferences1 = preferences.map(p=>p-1);
  preferences1.forEach((val,ind, arr)=>{
    if (!processed[ind]){
      let first = [ind, arr[ind]];
      let second = [arr[ind], arr[arr[ind]]];
      let third = [arr[arr[ind]],arr[arr[arr[ind]]]];
      if (isTriangle(first, second, third)){
        triangles.push([ind,arr[ind],arr[arr[ind]]]);
        processed[ind] = true;
        processed[arr[ind]] = true;
        processed[arr[arr[ind]]] = true;
      } else {
        processed[ind] = true;
      }
  }
  });
  return triangles.length;

};

function isTriangle(first, second, third){
  if ((first[1]==second[0]) && (second[1]==third[0]) && (third[1]==first[0]) && (first[0] != second[0]) && (second[0]!=third[0])){
    return true;
  }
  return false;
}

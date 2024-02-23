// Write your solution in this file!
let employee = {
  name: "Sarah",
  streetAddress: "Erbil",
};

function updateEmployeeWithKeyAndValue(obj, key, value) {
  let newObj = { ...employee };
  newObj[key] = value;

  return newObj;
}

// function updateEmployeeWithKeyAndValue(obj, key, value) {
//   return { ...employee, [key]: value };
// }

function destructivelyUpdateEmployeeWithKeyAndValue(obj, key, value) {
  obj[key] = value;
  return obj;
}

function deleteFromEmployeeByKey(obj, key) {
  let newObj = { ...employee };
  delete newObj[key];
  return newObj;
}

function destructivelyDeleteFromEmployeeByKey(obj, key) {
  delete obj[key];
  return obj;
}

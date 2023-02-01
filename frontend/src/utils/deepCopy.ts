const deepCopy = (obj: any) => {
  if (obj === null || typeof obj !== "object") {
    return obj;
  }
  const copy = obj.constructor();
  for (const attr in obj) {
    if (obj.hasOwnProperty(attr)) {
      copy[attr] = deepCopy(obj[attr]);
    }
  }
  return copy;
};

export default deepCopy;

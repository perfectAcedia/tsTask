type ObjectShape = {
    id: number;
    name: string;
    value: number
  };
  
  function updateObjectInArray<ObjectShape>(
    initialArray: ObjectShape[],
    key: keyof ObjectShape,
    value: ObjectShape[keyof ObjectShape],
    patch: Partial<ObjectShape>
  ): ObjectShape[] {
    const newArray = [...initialArray];
  
    const index = newArray.findIndex((obj) => obj[key] === value);
  
    if (index !== -1) {
      newArray[index] = { ...newArray[index], ...patch };
    }
  
    return newArray;
  }
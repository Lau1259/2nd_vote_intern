const genStr = (length) => {
  let samples = 500;
  let vals = new Uint32Array(samples);
  for (const i of vals.keys()) {
    vals[i] = Math.floor(Math.random() * samples);
  }
  let data = "";
  while (data.length < length) {
    data += vals[Math.floor(Math.random() * (vals.length - 1))].toString(36);
  }
  // console.log(data.substring(0, length));
  return data.substring(0, length);
};

const test = () => {
  const checkDuplicates = (data) => {
    let duplicateItems = data.filter(
      (item, index) => data.indexOf(item) != index
    );

    if (duplicateItems) {
      console.log(
        `At size ${data.length} contains ${duplicateItems.length} duplicate elements`
      );
      console.log(duplicateItems);
    } else {
      console.log(`At size ${data.length} doesn't contains duplicate elements`);
    }
  };
  const genStrArray = (length, qty) => {
    let arr = [];
    for (let i = 0; i < qty; i++) {
      arr.push(genStr(length));
    }
    return arr;
  };
  let data1 = genStrArray(8, 10000);
  let data2 = genStrArray(8, 20000);
  let data3 = genStrArray(8, 30000);
  let data4 = genStrArray(8, 40000);
  let data5 = genStrArray(8, 50000);

  checkDuplicates(data1);
  checkDuplicates(data2);
  checkDuplicates(data3);
  checkDuplicates(data4);
  checkDuplicates(data5);
};
test();

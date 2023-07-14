const genChar = (seed = 36) => {
  let dt = new Date().getTime();
  let r = Math.random();
  return Math.floor(parseInt(dt) * r)
    .toString(seed)
    .substring(0, 1);
};

const genStr = (length) => {
  let pattern = [];
  for (let i = 0; i < length; i++) {
    if (i == Math.floor(length / 2) + 1) {
      pattern.push(genChar(32));
    } else {
      pattern.push(genChar());
    }
  }
  return pattern.join("");
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
  const genStrArray = (length, qty, seed) => {
    let arr = [];
    for (let i = 0; i < qty; i++) {
      arr.push(seed ? genStr(length, seed) : genStr(length));
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

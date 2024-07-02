/*  
  题目描述:给定一个从小到大的有序整数序列（存在正整数和负整数）数组nums ，请你在该数组中找出两个数，其和的绝对值(|nums[x]+nums[y]|)为最小值，并返回这个绝对值。每种输入只会对应一个答案。但是，数组中同一个元素不能使用两遍。
  输入描述:
  一个通过空格分割的有序整数序列字符串，最多 1000 个整数，且整数数值范围是 -65535~65535。
  输出描述:
  两数之和绝对值最小值
*/
(function () {
  const readline = require("readline");
  const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
  });
  rl.on("line", (inputLine) => {
    const arr = inputLine.split(" ").map(Number);

    const resultArr = [];
    arr.forEach((item, index) => {
      for (let i = index + 1; i < arr.length; i++) {
        resultArr.push({
          add: [item, arr[i]],
          sum: Math.abs(item + arr[i]),
        });
      }
    });
    resultArr.sort((a, b) => a.sum - b.sum);
    console.log(`${resultArr[0].add.join(" ")} ${resultArr[0].sum}`);
  });
})();

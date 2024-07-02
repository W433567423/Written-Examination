/*  
题目描述:
  给定一个整数数组 nums、一个数字 k，一个整数目标值target，请问nums 中是否存在 k 个元素使得其相加结果为 target，请输出所有符合条件且不重复的k元组的个数
输入描述:
  第一行是 nums 取值：2 7 11 15
  第二行是 k 的取值：2
  第三行是 target 取值：9
输出描述:
  输出第一行是符合要求的元组个数：1
  补充说明：[2,7]满足，输出个数是 1
*/
(function () {
  const readline = require("readline");
  const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
  });

  let numArr,
    k,
    target,
    ans = 0;
  const input = [];

  rl.on("line", (inputLine) => {
    input.push(inputLine.trim());
    if (input.length === 3) {
      rl.close();
      numArr = input[0]
        .split(" ")
        .map(Number)
        .sort((a, b) => a - b);
      k = Number(input[1]);
      target = Number(input[2]);

      dfs(0, 0, 0);
      console.log(ans); // 输出符合条件的元组个数
    }
  });
  function dfs(index, total, count) {
    for (let i = index; i < numArr.length; i++) {
      // if (i > index && numArr[i] === numArr[i - 1]) continue; // 去重，避免重复计算相同的元组
      const newTotal = total + numArr[i]; // 更新当前累加和
      const newCount = count + 1; // 更新当前元组中元素的个数
      console.log("🚀 ~ newTotal,newCount:", newTotal, newCount);
      if (newCount === k && newTotal === target) {
        ans += 1; // 则符合条件的元组个数加 1
      } else {
        dfs(i + 1, newTotal, newCount); // 继续递归遍历下一个元素
      }
    }
  }
})();

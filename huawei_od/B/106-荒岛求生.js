/*  
题目描述:
  一个荒岛上有若干人，岛上只有一条路通往岛屿两端的港口，大家需要逃往两端的港口才可逃生。
  假定每个人移动的速度一样，且只可选择向左或向右逃生。若两个人相遇，则进行决斗，战斗力强的能够活下来，并损失掉与对方相同的战斗力；若战斗力相同，则两人同归于尽。
输入描述:
  给定一行非 0 整数数组，元素个数不超过 30000；
  正负表示逃生方向（正表示向右逃生，负表示向左逃生），绝对值表示战斗力，越左边的数字表示里左边港口越近，逃生方向相同的人永远不会发生决斗。
输出描述:
  能够逃生的人总数，没有人逃生输出 0，输入异常时输出-1。
*/
(function () {
  const readline = require("readline");
  const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
  });

  let aliveNum = 0;

  rl.on("line", (inputLine) => {
    const arr = inputLine.split(" ").map(Number);
  });
})();

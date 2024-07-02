/*  
  题目描述:给定一个 N*M 矩阵，请先找出 M 个该矩阵中每列元素的最大值，然后输出这M个值中的最小值 
  输入描述:
  转换后的字符串
  备注:
  N 和 M 的取值范围均为：[0, 100]
*/
(function () {
  const readline = require("readline");
  const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
  });
  // 读取一行输入，表示矩阵
  rl.on("line", (inputLine) => {
    // 将输入的字符串转换为矩阵
    const matrix = JSON.parse(inputLine);
    // 初始化一个数组用于存储每列的最大值，初始值为矩阵的第一行
    const columnMaxValues = matrix[0].slice();
    // 遍历矩阵的每一行（从第二行开始）
    for (let rowIndex = 1; rowIndex < matrix.length; rowIndex++) {
      // 遍历当前行的每个元素
      for (let colIndex = 0; colIndex < matrix[rowIndex].length; colIndex++) {
        // 更新每列的最大值
        columnMaxValues[colIndex] = Math.max(
          columnMaxValues[colIndex],
          matrix[rowIndex][colIndex]
        );
      }
    }
    console.log("🚀 ~ rl.on ~ columnMaxValues:", columnMaxValues);

    // 获取最小值
    const min = Math.min(...columnMaxValues);
    console.log("🚀 ~ rl.on ~ min:", min);
    rl.close();
  });
})();

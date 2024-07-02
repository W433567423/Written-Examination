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
  // 获取输入的K
  rl.on("line", (K: number) => {
    // 获取输入的字符串S
    rl.on("line", (S: string) => {
      // 将字符串S按照"-"分割成数组
      const arr = S.split("-");
      // 获取第一个子串
      const ans = [arr[0]];
      // 获取剩余的子串
      let tmp = arr.slice(1).join("");
      // 将剩余的子串转换为大写字母
      for (let i = 0; i < tmp.length; i++) {
        let v = tmp[i].toUpperCase();
        if (i % K === 0) {
          v = `-${v}`;
        }
        ans.push(v);
      }
      console.log(ans.join(""));
    });
  });
})();

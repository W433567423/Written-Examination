/*  
  题目描述:给定一个非空字符串 S，其被 N 个’-‘分隔成 N+1 的子串，给定正整数K，要求除第一个子串外，其余的串每K个用’-‘分隔，并将小写字母转换为大写。 
  输入描述:
  正整数 K 和‘-’分割的字符串，如：
  2
  25G3C-abc-d
  输出描述:
  转换后的字符串
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

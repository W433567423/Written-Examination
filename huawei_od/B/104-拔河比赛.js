/*  
题目描述:公司最近准备进行拔河比赛，需要在全部员工中进行挑选。选拔的规则如下：
  按照身高优先、体重次优先的方式准备比赛阵容；
  规定参赛的队伍派出 10 名选手。
  请实现一个选拔队员的小程序。
  输入为一个数组，记录了部门人员的身高、体重信息，如[身高,体重]的方式放置；部门全部成员数量为大于 10 的一个数组。
  要求输出一个 size 为 10 的二维数组。
输入描述:
  输入为 N 行员工信息，表示部门报名参加选拔的候选人信息，每行有两个数字，使用空格分隔，表示员工的身高、体重信息
  如
  181 70
  182 70
  表示两位候选员工，第一人身高 181 厘米，体重 70 公斤;第二人身高182 厘米，体重 70 公斤
输出描述:
  要求输出一个 10 行的已经排序的参赛员工信息数据，每行有两个数字，使用空格分隔，表示员工的身高、体重信息如
  182 70
  181 70
  备注
  输入数据范围：
  成员身高、体重为 int 数据类型:
  输入备选成员数量为 N，10 ≤ N ≤ 100
*/
(function () {
  const readline = require("readline");
  const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
  });
  const employees = [];
  rl.on("line", (inputLine) => {
    const employee = inputLine.split(" ").map(Number);
    employees.push(employee);
  });
  rl.on("close", () => {
    employees.sort((a, b) => {
      if (a[0] !== b[0]) {
        return b[0] - a[0];
      }
      return b[1] - a[1];
    });

    // 输出前 10 名员工的身高和体重信息
    for (let i = 0; i < 10; i++) {
      console.log(employees[i].join(" "));
    }
  });
})();

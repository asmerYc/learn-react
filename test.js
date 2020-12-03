/*
 * @Author: your name
 * @Date: 2020-12-02 20:22:30
 * @LastEditTime: 2020-12-02 21:54:11
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: /learn-react/test.js
 */
let arr = [{visitTime:'2020-12-02 11:34:05'},{visitTime:'2020-12-02 15:25:17'},{visitTime:'2020-12-02 15:18:05'}]
let arr1 =  arr.sort((a,b) => {
  return Date.parse(b.visitTime) - Date.parse(a.visitTime)
})
console.log(arr1)

let arr2 = ['2020-12-02 11:34:05','2020-12-02 15:25:17','2020-12-02 15:18:05']
let arr3 =  arr2.sort((a,b) => {
  return Date.parse(a) - Date.parse(b)
})
console.log(arr3)
// function search(nums,index,len,target){
//     let mid = len/2
//     if(nums[mid] === target){
//         return mid
//     }else if(nums[mid]>target){
//         return search(nums,0,mid,target)
//     }else if(nums[mid]<target){
//         return search(nums,mid+1,len,target)
//     }
// }
// let nums = [-1,0,3,5,9,12];
// let target = 2;
// let res = search(nums,0,nums.length,0)
// console.log(res);

/**
 * @param {string} s
 * @param {string} t
 * @return {string}
 */
//  var minWindow = function(s, t) {
//     const map = {};
//     for (let i = 0; i < t.length; i++) {
//       if (map[t[i]]) {
//         map[t[i]]++;
//       } else {
//         map[t[i]] = 1;
//       }
//     }
//     console.log(map);
//     let left = 0;
//     let right = 0;
//     let count = t.length;
//     let max = Number.MAX_SAFE_INTEGER;
//     let res = s;
  
//     while (right < s.length) {
//       if (map[s[right]] > 0) {
//         count--;
//       }
//       map[s[right]]--;
//       right++;
  
  
  
//       while (count === 0) {
//         if (right - left < max) {
//           max = right - left;
//           res = s.slice(left, right);
//         }
//         map[s[left]]++;
//         if (map[s[left]] > 0) {
//           count++;
//         }
//         left++;
//       }
//     }
//     return max === Number.MAX_SAFE_INTEGER ? "" : res;
//   };

//   let res = minWindow('ADOBECODEBANC','ABC')
//   console.log(res);


//   function minSubArrayLen(target,nums){
//     let s = 0;
//     let e = 0;
//     let len = nums.length
//     let maxLen = len+1
//     let sum = 0;
//     let res
//     while(e<len){
//         sum+=nums[e++];
//         while(sum>=target){
//             let subLen = e-s
//             res = maxLen<subLen?maxLen:subLen
//             maxLen = res
//             sum-=nums[s]
//             s++;
//         }
        
//     }
//     console.log(res);
//     return res
// }
// // minSubArrayLen(8,[1,2,3,2,2,2,2,2])
// // minSubArrayLen(7,[2,3,1,2,4,3] )


// var generateMatrix = function(n) {
//     let startX = startY = 0;   // 起始位置
//     let loop = Math.floor(n/2);   // 旋转圈数
//     let mid = Math.floor(n/2);    // 中间位置
//     let offset = 1;    // 控制每一层填充元素个数
//     let count = 1;     // 更新填充数字
//     let res = new Array(n).fill(0).map(() => new Array(n).fill(0));

//     while (loop--) {
//         let row = startX, col = startY;
//         // 上行从左到右（左闭右开）
//         for (; col < startY + n - offset; col++) {
//             res[row][col] = count++;
//         }
//         // 右列从上到下（左闭右开）
//         for (; row < startX + n - offset; row++) {
//             res[row][col] = count++;
//         }
//         // 下行从右到左（左闭右开）
//         for (; col > startY; col--) {
//             res[row][col] = count++;
//         }
//         // 左列做下到上（左闭右开）
//         for (; row > startX; row--) {
//             res[row][col] = count++;
//         }

//         // 更新起始位置
//         startX++;
//         startY++;

//         // 更新offset
//         offset += 2;
//     }
//     // 如果n为奇数的话，需要单独给矩阵最中间的位置赋值
//     if (n % 2 === 1) {
//         res[mid][mid] = count;
//     }
//     console.log(res);
//     return res;
// };


// generateMatrix(4)


let params = {userId:'',orderId:'11',name:'11',phone:'11',address:'11',province:'11',city:'11',prefecture:'11'}
let flag = Object.values(params).some(item=>!item)
console.log(flag);


function sendRequest(list,limit,cd) {
  let len = list.length
  let t = len
  if(t<limit){
    while(len){
      runTask()
      t--
    }
  }else{
    let temp = limit
    while(temp){
      runTask()
      temp--
    }
  }
  function runTask() {
    let current = list.shift()
    run(current)
    
  }
  async function run(current){
    try {
      let task = await current();
      console.log(list.length);
      if(list.length){
        runTask()
      }else{
        cd()
      }
    } catch (error) {
      console.log(error);
      if(list.length){
        runTask()
      }else{
        cd()
      }
    }
    
  }
} 
function request(num){
  return function test() {
    new Promise((resolve, reject) => {
      setTimeout(()=>{
        console.log(num);
        resolve()
        
      },1000)
    }) 
  }
}
sendRequest([request(1),request(2),request(3)],2,()=>{
  console.log("run success");
})

{
  foo(); // 可以这么做!
  function foo() {
   console.log(111111)
  }
 }
 foo(); 
// https://leetcode-cn.com/problems/reverse-words-in-a-string-iii/
// 给定一个字符串，你需要反转字符串中每个单词的字符顺序，同时仍保留空格和单词的初始顺序。
//! 在字符串中，每个单词由单个空格分隔，并且字符串中不会有任何额外的空格。
export default (str) => {
  return str.split(' ').map(item => item.split('').reverse().join('')).join(' ')
}
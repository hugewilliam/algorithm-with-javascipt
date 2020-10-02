import reverseWord from '../../code/string/reverse_word'

test('input: "Let\'s take LeetCode contest" to Be', () => {
  expect(reverseWord("Let's take LeetCode contest")).toBe("s'teL ekat edoCteeL tsetnoc")
})
/*
*      A
*     / \
*    B   C
*   / \   \
*  D   E - F
*
*/

module.exports = {
  A: ['B', 'C'],
  B: ['A', 'D', 'E'],
  C: ['A', 'F'],
  D: ['B'],
  E: ['B', 'F'],
  F: ['C', 'E']
}
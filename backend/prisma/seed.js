import prisma from "../src/lib/prisma.js";

const problems = [
  {
    title: "Two Sum",
    slug: "two-sum",
    difficulty: "EASY",
    description: `Given an array of integers \`nums\` and an integer \`target\`, return *indices of the two numbers such that they add up to \`target\`*.

You may assume that each input would have **exactly one solution**, and you may not use the *same* element twice.

You can return the answer in any order.`,
    constraints: `2 ≤ nums.length ≤ 10⁴
-10⁹ ≤ nums[i] ≤ 10⁹
-10⁹ ≤ target ≤ 10⁹
Only one valid answer exists.`,
    tags: JSON.stringify(["array", "hash-table"]),
    companies: JSON.stringify(["amazon", "google", "microsoft", "apple", "facebook"]),
    hints: JSON.stringify([
      "Try using a hash map to track complements as you iterate.",
      "For each number, check if target - num already exists in the map.",
    ]),
    editorial: `## Approach: Hash Map

We iterate through the array once. For each element, we check if its complement (target - nums[i]) has been seen before using a hash map. If yes, we return the indices. Otherwise, we store the current element's index in the map.

**Time Complexity:** O(n) — single pass through the array.
**Space Complexity:** O(n) — hash map stores up to n elements.`,
    function_signature: JSON.stringify({
      language: "typescript",
      returnType: "number[]",
      parameters: [
        { name: "nums", type: "number[]" },
        { name: "target", type: "number" },
      ],
    }),
    starter_code: JSON.stringify({
      java: `class Solution {
    public int[] twoSum(int[] nums, int target) {
        // Your code here
    }
}`,
      python: `class Solution:
    def twoSum(self, nums: List[int], target: int) -> List[int]:
        # Your code here
        pass`,
    }),
    is_published: true,
    test_cases: [
      { input_json: JSON.stringify({ nums: [2, 7, 11, 15], target: 9 }), expected_output: JSON.stringify([0, 1]), is_hidden: false, ordering: 1 },
      { input_json: JSON.stringify({ nums: [3, 2, 4], target: 6 }), expected_output: JSON.stringify([1, 2]), is_hidden: false, ordering: 2 },
      { input_json: JSON.stringify({ nums: [3, 3], target: 6 }), expected_output: JSON.stringify([0, 1]), is_hidden: false, ordering: 3 },
      { input_json: JSON.stringify({ nums: [1, 5, 8, 3, 9, 2], target: 10 }), expected_output: JSON.stringify([0, 4]), is_hidden: true, ordering: 4 },
      { input_json: JSON.stringify({ nums: [-3, 4, 3, 90], target: 0 }), expected_output: JSON.stringify([0, 2]), is_hidden: true, ordering: 5 },
    ],
  },
  {
    title: "Reverse Linked List",
    slug: "reverse-linked-list",
    difficulty: "EASY",
    description: `Given the \`head\` of a singly linked list, reverse the list, and return *the reversed list*.

**Example:**
Input: head = [1,2,3,4,5]
Output: [5,4,3,2,1]`,
    constraints: `The number of nodes in the list is in the range [0, 5000].
-5000 ≤ Node.val ≤ 5000`,
    tags: JSON.stringify(["linked-list"]),
    companies: JSON.stringify(["amazon", "microsoft", "apple"]),
    hints: JSON.stringify([
      "Use three pointers: prev, current, and next.",
      "Think about it iteratively first, then recursively.",
    ]),
    editorial: `## Approach: Iterative

We maintain three pointers: \`prev\` (initially null), \`curr\` (the head), and \`next\` (to save the next node). In each step, we point \`curr.next\` to \`prev\`, then advance all pointers.

**Time Complexity:** O(n) — traverse all n nodes.
**Space Complexity:** O(1) — constant extra space.`,
    function_signature: JSON.stringify({
      language: "typescript",
      returnType: "ListNode",
      parameters: [
        { name: "head", type: "ListNode" },
      ],
    }),
    starter_code: JSON.stringify({
      java: `class Solution {
    public ListNode reverseList(ListNode head) {
        // Your code here
    }
}`,
      python: `class Solution:
    def reverseList(self, head: Optional[ListNode]) -> Optional[ListNode]:
        # Your code here
        pass`,
    }),
    is_published: true,
    test_cases: [
      { input_json: JSON.stringify({ head: [1, 2, 3, 4, 5] }), expected_output: JSON.stringify([5, 4, 3, 2, 1]), is_hidden: false, ordering: 1 },
      { input_json: JSON.stringify({ head: [1, 2] }), expected_output: JSON.stringify([2, 1]), is_hidden: false, ordering: 2 },
      { input_json: JSON.stringify({ head: [] }), expected_output: JSON.stringify([]), is_hidden: false, ordering: 3 },
      { input_json: JSON.stringify({ head: [1] }), expected_output: JSON.stringify([1]), is_hidden: true, ordering: 4 },
      { input_json: JSON.stringify({ head: [1, 2, 3] }), expected_output: JSON.stringify([3, 2, 1]), is_hidden: true, ordering: 5 },
    ],
  },
  {
    title: "Valid Parentheses",
    slug: "valid-parentheses",
    difficulty: "MEDIUM",
    description: `Given a string \`s\` containing just the characters \`'('\`, \`')'\`, \`'{'\`, \`'}'\`, \`'['\` and \`']'\`, determine if the input string is valid.

An input string is valid if:
1. Open brackets must be closed by the same type of brackets.
2. Open brackets must be closed in the correct order.
3. Every close bracket has a corresponding open bracket of the same type.`,
    constraints: `1 ≤ s.length ≤ 10⁴
s consists of parentheses only '()[]{}'.`,
    tags: JSON.stringify(["stack", "string"]),
    companies: JSON.stringify(["amazon", "google", "microsoft", "facebook"]),
    hints: JSON.stringify([
      "Use a stack to match closing brackets.",
      "The last opening bracket must match the current closing bracket.",
    ]),
    editorial: `## Approach: Stack

Push each opening bracket onto a stack. When encountering a closing bracket, check if the top of the stack matches. If not (or stack is empty), return false. At the end, return true if stack is empty.

**Time Complexity:** O(n) — traverse the string once.
**Space Complexity:** O(n) — stack stores up to n characters.`,
    function_signature: JSON.stringify({
      language: "typescript",
      returnType: "boolean",
      parameters: [
        { name: "s", type: "string" },
      ],
    }),
    starter_code: JSON.stringify({
      java: `class Solution {
    public boolean isValid(String s) {
        // Your code here
    }
}`,
      python: `class Solution:
    def isValid(self, s: str) -> bool:
        # Your code here
        pass`,
    }),
    is_published: true,
    test_cases: [
      { input_json: JSON.stringify({ s: "()" }), expected_output: JSON.stringify(true), is_hidden: false, ordering: 1 },
      { input_json: JSON.stringify({ s: "()[]{}" }), expected_output: JSON.stringify(true), is_hidden: false, ordering: 2 },
      { input_json: JSON.stringify({ s: "(]" }), expected_output: JSON.stringify(false), is_hidden: false, ordering: 3 },
      { input_json: JSON.stringify({ s: "([)]" }), expected_output: JSON.stringify(false), is_hidden: true, ordering: 4 },
      { input_json: JSON.stringify({ s: "{[]}" }), expected_output: JSON.stringify(true), is_hidden: true, ordering: 5 },
    ],
  },
  {
    title: "LRU Cache",
    slug: "lru-cache",
    difficulty: "MEDIUM",
    description: `Design a data structure that follows the constraints of a **Least Recently Used (LRU) cache**.

Implement the \`LRUCache\` class:

- \`LRUCache(int capacity)\` Initialize the LRU cache with **positive** size \`capacity\`.
- \`int get(int key)\` Return the value of the \`key\` if the key exists, otherwise return \`-1\`.
- \`void put(int key, int value)\` Update the value of the \`key\` if the key exists. Otherwise, add the key-value pair to the cache. If the number of keys exceeds the \`capacity\` from this operation, **evict** the least recently used key.

The functions \`get\` and \`put\` must each run in \`O(1)\` average time complexity.`,
    constraints: `1 ≤ capacity ≤ 3000
1 ≤ key ≤ 10⁴
0 ≤ value ≤ 10⁵
At most 2 × 10⁵ calls will be made to get and put.`,
    tags: JSON.stringify(["design", "hash-table", "linked-list"]),
    companies: JSON.stringify(["amazon", "google", "microsoft", "apple", "facebook"]),
    hints: JSON.stringify([
      "Use a doubly linked list with a hash map for O(1) operations.",
      "The hash map gives O(1) lookup; the linked list tracks usage order.",
    ]),
    editorial: `## Approach: Hash Map + Doubly Linked List

Maintain a hash map from key to a doubly linked list node. The list orders keys by usage (most recent at head, least recent at tail). On \`get\`, move the accessed node to head. On \`put\`, if key exists update and move to head; otherwise add a new node at head and if capacity exceeded, remove the tail node.

**Time Complexity:** O(1) for both get and put.
**Space Complexity:** O(capacity) — at most capacity entries.`,
    function_signature: JSON.stringify({
      language: "typescript",
      className: "LRUCache",
      methods: [
        { name: "constructor", parameters: [{ name: "capacity", type: "number" }] },
        { name: "get", parameters: [{ name: "key", type: "number" }], returnType: "number" },
        { name: "put", parameters: [{ name: "key", type: "number" }, { name: "value", type: "number" }], returnType: "void" },
      ],
    }),
    starter_code: JSON.stringify({
      java: `class LRUCache {

    public LRUCache(int capacity) {
        // Your code here
    }

    public int get(int key) {
        // Your code here
    }

    public void put(int key, int value) {
        // Your code here
    }
}`,
      python: `class LRUCache:

    def __init__(self, capacity: int):
        # Your code here
        pass

    def get(self, key: int) -> int:
        # Your code here
        pass

    def put(self, key: int, value: int) -> None:
        # Your code here
        pass`,
    }),
    is_published: true,
    test_cases: [
      {
        input_json: JSON.stringify({
          operations: ["LRUCache", "put", "put", "get", "put", "get", "put", "get", "get", "get"],
          values: [[2], [1, 1], [2, 2], [1], [3, 3], [2], [4, 4], [1], [3], [4]],
        }),
        expected_output: JSON.stringify([null, null, null, 1, null, -1, null, -1, 3, 4]),
        is_hidden: false,
        ordering: 1,
      },
      {
        input_json: JSON.stringify({
          operations: ["LRUCache", "put", "get"],
          values: [[1], [2, 1], [2]],
        }),
        expected_output: JSON.stringify([null, null, 1]),
        is_hidden: false,
        ordering: 2,
      },
      {
        input_json: JSON.stringify({
          operations: ["LRUCache", "get"],
          values: [[1], [2]],
        }),
        expected_output: JSON.stringify([null, -1]),
        is_hidden: true,
        ordering: 3,
      },
      {
        input_json: JSON.stringify({
          operations: ["LRUCache", "put", "put", "get", "put", "get"],
          values: [[2], [1, 10], [2, 20], [1], [3, 30], [2]],
        }),
        expected_output: JSON.stringify([null, null, null, 10, null, -1]),
        is_hidden: true,
        ordering: 4,
      },
    ],
  },
  {
    title: "Merge k Sorted Lists",
    slug: "merge-k-sorted-lists",
    difficulty: "HARD",
    description: `You are given an array of \`k\` linked-lists \`lists\`, each linked-list is sorted in ascending order.

*Merge all the linked-lists into one sorted linked-list and return it.*`,
    constraints: `k == lists.length
0 ≤ k ≤ 10⁴
0 ≤ lists[i].length ≤ 500
-10⁴ ≤ lists[i][j] ≤ 10⁴
Sum of all lists[i].length ≤ 10⁴`,
    tags: JSON.stringify(["heap", "divide-and-conquer", "linked-list"]),
    companies: JSON.stringify(["amazon", "google", "microsoft", "facebook"]),
    hints: JSON.stringify([
      "Use a min-heap to always extract the smallest node across all lists.",
      "Alternatively, use divide and conquer like merge sort — merge pairs of lists.",
    ]),
    editorial: `## Approach: Min-Heap (Priority Queue)

Push the head of each non-empty list into a min-heap. Repeatedly pop the smallest node, append it to the result, and push its next node back into the heap.

**Time Complexity:** O(N log k) where N is total nodes and k is number of lists.
**Space Complexity:** O(k) for the heap.`,
    function_signature: JSON.stringify({
      language: "typescript",
      returnType: "ListNode",
      parameters: [
        { name: "lists", type: "ListNode[]" },
      ],
    }),
    starter_code: JSON.stringify({
      java: `class Solution {
    public ListNode mergeKLists(ListNode[] lists) {
        // Your code here
    }
}`,
      python: `class Solution:
    def mergeKLists(self, lists: List[Optional[ListNode]]) -> Optional[ListNode]:
        # Your code here
        pass`,
    }),
    is_published: true,
    test_cases: [
      {
        input_json: JSON.stringify({ lists: [[1, 4, 5], [1, 3, 4], [2, 6]] }),
        expected_output: JSON.stringify([1, 1, 2, 3, 4, 4, 5, 6]),
        is_hidden: false,
        ordering: 1,
      },
      {
        input_json: JSON.stringify({ lists: [] }),
        expected_output: JSON.stringify([]),
        is_hidden: false,
        ordering: 2,
      },
      {
        input_json: JSON.stringify({ lists: [[]] }),
        expected_output: JSON.stringify([]),
        is_hidden: false,
        ordering: 3,
      },
      {
        input_json: JSON.stringify({ lists: [[1], [0]] }),
        expected_output: JSON.stringify([0, 1]),
        is_hidden: true,
        ordering: 4,
      },
      {
        input_json: JSON.stringify({ lists: [[1, 2, 3], [4, 5, 6], [7, 8, 9]] }),
        expected_output: JSON.stringify([1, 2, 3, 4, 5, 6, 7, 8, 9]),
        is_hidden: true,
        ordering: 5,
      },
    ],
  },
];

for (const problem of problems) {
  const { test_cases, ...problemData } = problem;

  await prisma.problem.create({
    data: {
      ...problemData,
      test_cases: {
        create: test_cases,
      },
    },
  });
}

console.log("Seeded 5 problems with test cases.");

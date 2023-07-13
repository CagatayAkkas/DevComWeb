import { useState } from "react";
import { CopyToClipboard } from "react-copy-to-clipboard";
import { FiCopy } from "react-icons/fi";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { twilight } from "react-syntax-highlighter/dist/esm/styles/prism";
const AlgorithmViewer = () => {
  const [selectedLanguage, setSelectedLanguage] = useState("javascript");
  const [selectedAlgorithm, setSelectedAlgorithm] = useState("");

  const algorithms = {
    binarySearch: {
      javascript: `var search = function (nums, target) {
        let high = nums.length - 1;
        let low = 0;
        while (low <= high) {
          let mid = Math.floor((high + low) / 2);
          if (nums[mid] < target) {
            low = mid + 1;
          } else if (nums[mid] > target) {
            high = mid - 1;
          } else {
            return mid;
          }
        }
        return -1;
      };`,
      python: `def search(self, nums: List[int], target: int) -> int:
      high=len(nums) -1
      low=0
      while low <= high:
          mid = (high + low) //2

          if nums[mid] < target:
              low = mid+1
          elif nums[mid] > target:
              high = mid-1
          else:
              return mid
      return -1`,
      java: `public class BinarySearch {
        public static int search(int[] nums, int target) {
          int high = nums.length - 1;
          int low = 0;
          while (low <= high) {
            int mid = (high + low) / 2;
            if (nums[mid] < target) {
              low = mid + 1;
            } else if (nums[mid] > target) {
              high = mid - 1;
            } else {
              return mid;
            }
          }
          return -1;
        }
      }`,
      cpp: `int search(int nums[], int target, int low, int high) {
        while (low <= high) {
          int mid = low + (high - low) / 2;
          if (nums[mid] == target) {
            return mid;
          } else if (nums[mid] < target) {
            low = mid + 1;
          } else {
            high = mid - 1;
          }
        }
        return -1;
      }`,
    },
    heapSort: {
      javascript: `function heapSort(arr) {
        buildMaxHeap(arr);
        for (let i = arr.length - 1; i > 0; i--) {
          swap(arr, 0, i);
          heapify(arr, i, 0);
        }
        return arr;
      }

      function buildMaxHeap(arr) {
        const n = arr.length;
        for (let i = Math.floor(n / 2) - 1; i >= 0; i--) {
          heapify(arr, n, i);
        }
      }

      function heapify(arr, n, i) {
        let largest = i;
        const left = 2 * i + 1;
        const right = 2 * i + 2;

        if (left < n && arr[left] > arr[largest]) {
          largest = left;
        }

        if (right < n && arr[right] > arr[largest]) {
          largest = right;
        }

        if (largest !== i) {
          swap(arr, i, largest);
          heapify(arr, n, largest);
        }
      }

      function swap(arr, i, j) {
        const temp = arr[i];
        arr[i] = arr[j];
        arr[j] = temp;
      }`,
      python: `def heapify(arr, n, i):
        largest = i
        left = 2 * i + 1
        right = 2 * i + 2

        if left < n and arr[left] > arr[largest]:
            largest = left

        if right < n and arr[right] > arr[largest]:
            largest = right

        if largest != i:
            arr[i], arr[largest] = arr[largest], arr[i]
            heapify(arr, n, largest)

    def heapSort(arr):
        n = len(arr)
        for i in range(n // 2 - 1, -1, -1):
            heapify(arr, n, i)
        for i in range(n - 1, 0, -1):
            arr[i], arr[0] = arr[0], arr[i]
            heapify(arr, i, 0)`,
      java: `public class HeapSort {
        public static void heapSort(int[] arr) {
          int n = arr.length;
          for (int i = n / 2 - 1; i >= 0; i--) {
            heapify(arr, n, i);
          }
          for (int i = n - 1; i > 0; i--) {
            int temp = arr[0];
            arr[0] = arr[i];
            arr[i] = temp;
            heapify(arr, i, 0);
          }
        }
      
        public static void heapify(int[] arr, int n, int i) {
          int largest = i;
          int left = 2 * i + 1;
          int right = 2 * i + 2;
      
          if (left < n && arr[left] > arr[largest]) {
            largest = left;
          }
      
          if (right < n && arr[right] > arr[largest]) {
            largest = right;
          }
      
          if (largest != i) {
            int swap = arr[i];
            arr[i] = arr[largest];
            arr[largest] = swap;
            heapify(arr, n, largest);
          }
        }
      }`,
      cpp: `void heapify(int arr[], int n, int i) {
        int largest = i;
        int l = 2 * i + 1;
        int r = 2 * i + 2;

        if (l < n && arr[l] > arr[largest])
          largest = l;

        if (r < n && arr[r] > arr[largest])
          largest = r;

        if (largest != i) {
          swap(arr[i], arr[largest]);
          heapify(arr, n, largest);
        }
      }

      void heapSort(int arr[], int n) {
        for (int i = n / 2 - 1; i >= 0; i--)
          heapify(arr, n, i);

        for (int i = n - 1; i >= 0; i--) {
          swap(arr[0], arr[i]);
          heapify(arr, i, 0);
        }
      }`,
    },
    mergeSort: {
      javascript: `function mergeSort(arr) {
        if (arr.length <= 1) {
          return arr;
        }

        const mid = Math.floor(arr.length / 2);
        const left = mergeSort(arr.slice(0, mid));
        const right = mergeSort(arr.slice(mid));

        return merge(left, right);
      }

      function merge(left, right) {
        const merged = [];
        let leftIndex = 0;
        let rightIndex = 0;

        while (leftIndex < left.length && rightIndex < right.length) {
          if (left[leftIndex] < right[rightIndex]) {
            merged.push(left[leftIndex]);
            leftIndex++;
          } else {
            merged.push(right[rightIndex]);
            rightIndex++;
          }
        }

        return merged.concat(left.slice(leftIndex)).concat(right.slice(rightIndex));
      }`,
      python: `def mergeSort(arr):
        if len(arr) <= 1:
            return arr

        mid = len(arr) // 2
        left = mergeSort(arr[:mid])
        right = mergeSort(arr[mid:])

        return merge(left, right)

    def merge(left, right):
        merged = []
        leftIndex = 0
        rightIndex = 0

        while leftIndex < len(left) and rightIndex < len(right):
            if left[leftIndex] < right[rightIndex]:
                merged.append(left[leftIndex])
                leftIndex += 1
            else:
                merged.append(right[rightIndex])
                rightIndex += 1

        return merged + left[leftIndex:] + right[rightIndex:]`,
      java: `public class MergeSort {
        public static void mergeSort(int[] arr, int left, int right) {
          if (left < right) {
            int mid = left + (right - left) / 2;
            mergeSort(arr, left, mid);
            mergeSort(arr, mid + 1, right);
            merge(arr, left, mid, right);
          }
        }
      
        public static void merge(int[] arr, int left, int mid, int right) {
          int n1 = mid - left + 1;
          int n2 = right - mid;
      
          int[] L = new int[n1];
          int[] R = new int[n2];
      
          for (int i = 0; i < n1; ++i)
            L[i] = arr[left + i];
          for (int j = 0; j < n2; ++j)
            R[j] = arr[mid + 1 + j];
      
          int i = 0, j = 0;
      
          int k = left;
          while (i < n1 && j < n2) {
            if (L[i] <= R[j]) {
              arr[k] = L[i];
              i++;
            } else {
              arr[k] = R[j];
              j++;
            }
            k++;
          }
      
          while (i < n1) {
            arr[k] = L[i];
            i++;
            k++;
          }
      
          while (j < n2) {
            arr[k] = R[j];
            j++;
            k++;
          }
        }
      }`,
      cpp: `void merge(int arr[], int left, int mid, int right) {
        int n1 = mid - left + 1;
        int n2 = right - mid;

        int L[n1], R[n2];

        for (int i = 0; i < n1; ++i)
          L[i] = arr[left + i];
        for (int j = 0; j < n2; ++j)
          R[j] = arr[mid + 1 + j];

        int i = 0, j = 0;

        int k = left;
        while (i < n1 && j < n2) {
          if (L[i] <= R[j]) {
            arr[k] = L[i];
            i++;
          } else {
            arr[k] = R[j];
            j++;
          }
          k++;
        }

        while (i < n1) {
          arr[k] = L[i];
          i++;
          k++;
        }

        while (j < n2) {
          arr[k] = R[j];
          j++;
          k++;
        }
      }

      void mergeSort(int arr[], int left, int right) {
        if (left < right) {
          int mid = left + (right - left) / 2;
          mergeSort(arr, left, mid);
          mergeSort(arr, mid + 1, right);
          merge(arr, left, mid, right);
        }
      }`,
    },
    quickSort: {
      javascript: `function quickSort(arr, low, high) {
        if (low < high) {
          const pivotIndex = partition(arr, low, high);
          quickSort(arr, low, pivotIndex - 1);
          quickSort(arr, pivotIndex + 1, high);
        }
        return arr;
      }

      function partition(arr, low, high) {
        const pivot = arr[high];
        let i = low - 1;

        for (let j = low; j < high; j++) {
          if (arr[j] < pivot) {
            i++;
            swap(arr, i, j);
          }
        }

        swap(arr, i + 1, high);
        return i + 1;
      }

      function swap(arr, i, j) {
        const temp = arr[i];
        arr[i] = arr[j];
        arr[j] = temp;
      }`,
      python: `def quickSort(arr, low, high):
        if low < high:
            pivotIndex = partition(arr, low, high)
            quickSort(arr, low, pivotIndex - 1)
            quickSort(arr, pivotIndex + 1, high)
        return arr

    def partition(arr, low, high):
        pivot = arr[high]
        i = low - 1

        for j in range(low, high):
            if arr[j] < pivot:
                i += 1
                arr[i], arr[j] = arr[j], arr[i]

        arr[i + 1], arr[high] = arr[high], arr[i + 1]
        return i + 1`,
      java: `public class QuickSort {
        public static void quickSort(int[] arr, int low, int high) {
          if (low < high) {
            int pivotIndex = partition(arr, low, high);
            quickSort(arr, low, pivotIndex - 1);
            quickSort(arr, pivotIndex + 1, high);
          }
        }
      
        public static int partition(int[] arr, int low, int high) {
          int pivot = arr[high];
          int i = low - 1;
      
          for (int j = low; j < high; j++) {
            if (arr[j] < pivot) {
              i++;
              int temp = arr[i];
              arr[i] = arr[j];
              arr[j] = temp;
            }
          }
      
          int temp = arr[i + 1];
          arr[i + 1] = arr[high];
          arr[high] = temp;
      
          return i + 1;
        }
      }`,
      cpp: `int partition(int arr[], int low, int high) {
        int pivot = arr[high];
        int i = low - 1;

        for (int j = low; j < high; j++) {
          if (arr[j] < pivot) {
            i++;
            swap(arr[i], arr[j]);
          }
        }

        swap(arr[i + 1], arr[high]);
        return i + 1;
      }

      void quickSort(int arr[], int low, int high) {
        if (low < high) {
          int pivotIndex = partition(arr, low, high);
          quickSort(arr, low, pivotIndex - 1);
          quickSort(arr, pivotIndex + 1, high);
        }
      }`,
    },
    insertionSort: {
      javascript: `function insertionSort(arr) {
        for (let i = 1; i < arr.length; i++) {
          const current = arr[i];
          let j = i - 1;
          while (j >= 0 && arr[j] > current) {
            arr[j + 1] = arr[j];
            j--;
          }
          arr[j + 1] = current;
        }
        return arr;
      }`,
      python: `def insertionSort(arr):
        for i in range(1, len(arr)):
            current = arr[i]
            j = i - 1
            while j >= 0 and arr[j] > current:
                arr[j + 1] = arr[j]
                j -= 1
            arr[j + 1] = current
        return arr`,
      java: `public class InsertionSort {
        public static int[] insertionSort(int[] arr) {
          for (int i = 1; i < arr.length; i++) {
            int current = arr[i];
            int j = i - 1;
            while (j >= 0 && arr[j] > current) {
              arr[j + 1] = arr[j];
              j--;
            }
            arr[j + 1] = current;
          }
          return arr;
        }
      }`,
      cpp: `void insertionSort(int arr[], int n) {
        for (int i = 1; i < n; i++) {
          int key = arr[i];
          int j = i - 1;
      
          while (j >= 0 && arr[j] > key) {
            arr[j + 1] = arr[j];
            j = j - 1;
          }
          arr[j + 1] = key;
        }
      }`,
    },
    DepthFirstSearch: {
      javascript: `class Graph {
        constructor() {
          this.adjacencyList = {};
        }
      
        addVertex(vertex) {
          if (!this.adjacencyList[vertex]) {
            this.adjacencyList[vertex] = [];
          }
        }
      
        addEdge(vertex1, vertex2) {
          this.adjacencyList[vertex1].push(vertex2);
          this.adjacencyList[vertex2].push(vertex1);
        }
      
        depthFirstSearch(start) {
          const visited = {};
          const result = [];
          const adjacencyList = this.adjacencyList;
      
          (function dfs(vertex) {
            if (!vertex) {
              return null;
            }
            visited[vertex] = true;
            result.push(vertex);
            adjacencyList[vertex].forEach((neighbor) => {
              if (!visited[neighbor]) {
                return dfs(neighbor);
              }
            });
          })(start);
      
          return result;
        }
      }`,
      python: `class Graph:
        def __init__(self):
            self.adjacencyList = {}
        
        def addVertex(self, vertex):
            if vertex not in self.adjacencyList:
                self.adjacencyList[vertex] = []
        
        def addEdge(self, vertex1, vertex2):
            self.adjacencyList[vertex1].append(vertex2)
            self.adjacencyList[vertex2].append(vertex1)
        
        def depthFirstSearch(self, start):
            visited = {}
            result = []
            adjacencyList = self.adjacencyList
        
            def dfs(vertex):
                if not vertex:
                    return None
                visited[vertex] = True
                result.append(vertex)
                for neighbor in adjacencyList[vertex]:
                    if neighbor not in visited:
                        dfs(neighbor)
        
            dfs(start)
            return result`,
      java: `import java.util.*;

      class Graph {
          private Map<Integer, List<Integer>> adjacencyList;
      
          public Graph() {
              adjacencyList = new HashMap<>();
          }
      
          public void addVertex(int vertex) {
              adjacencyList.put(vertex, new ArrayList<>());
          }
      
          public void addEdge(int vertex1, int vertex2) {
              adjacencyList.get(vertex1).add(vertex2);
              adjacencyList.get(vertex2).add(vertex1);
          }
      
          public List<Integer> depthFirstSearch(int start) {
              Set<Integer> visited = new HashSet<>();
              List<Integer> result = new ArrayList<>();
      
              dfs(start, visited, result);
      
              return result;
          }
      
          private void dfs(int vertex, Set<Integer> visited, List<Integer> result) {
              visited.add(vertex);
              result.add(vertex);
      
              for (int neighbor : adjacencyList.get(vertex)) {
                  if (!visited.contains(neighbor)) {
                      dfs(neighbor, visited, result);
                  }
              }
          }
      }`,
      cpp: `#include <iostream>
      #include <vector>
      #include <unordered_map>
      #include <unordered_set>
      
      using namespace std;
      
      class Graph {
      private:
          unordered_map<int, vector<int>> adjacencyList;
      
      public:
          void addVertex(int vertex) {
              adjacencyList[vertex] = vector<int>();
          }
      
          void addEdge(int vertex1, int vertex2) {
              adjacencyList[vertex1].push_back(vertex2);
              adjacencyList[vertex2].push_back(vertex1);
          }
      
          vector<int> depthFirstSearch(int start) {
              unordered_set<int> visited;
              vector<int> result;
      
              dfs(start, visited, result);
      
              return result;
          }
      
          void dfs(int vertex, unordered_set<int>& visited, vector<int>& result) {
              visited.insert(vertex);
              result.push_back(vertex);
      
              for (int neighbor : adjacencyList[vertex]) {
                  if (visited.find(neighbor) == visited.end()) {
                      dfs(neighbor, visited, result);
                  }
              }
          }
      };`,
    },
    BreadthFirstSearch: {
      javascript: `function breadthFirstSearch(graph, start) {
        const queue = [start];
        const visited = new Set();
        const result = [];
    
        visited.add(start);
    
        while (queue.length) {
          const vertex = queue.shift();
          result.push(vertex);
    
          for (const neighbor of graph[vertex]) {
            if (!visited.has(neighbor)) {
              visited.add(neighbor);
              queue.push(neighbor);
            }
          }
        }
    
        return result;
      }`,

      python: `from collections import deque
    
    def breadth_first_search(graph, start):
        queue = deque([start])
        visited = set()
        result = []
    
        visited.add(start)
    
        while queue:
            vertex = queue.popleft()
            result.append(vertex)
    
            for neighbor in graph[vertex]:
                if neighbor not in visited:
                    visited.add(neighbor)
                    queue.append(neighbor)
    
        return result`,

      java: `import java.util.*;
    
    class BreadthFirstSearch {
        public List<Integer> breadthFirstSearch(Map<Integer, List<Integer>> graph, int start) {
            Queue<Integer> queue = new LinkedList<>();
            Set<Integer> visited = new HashSet<>();
            List<Integer> result = new ArrayList<>();
    
            visited.add(start);
            queue.add(start);
    
            while (!queue.isEmpty()) {
                int vertex = queue.poll();
                result.add(vertex);
    
                for (int neighbor : graph.get(vertex)) {
                    if (!visited.contains(neighbor)) {
                        visited.add(neighbor);
                        queue.add(neighbor);
                    }
                }
            }
    
            return result;
        }
    }`,

      cpp: `#include <iostream>
    #include <queue>
    #include <unordered_set>
    #include <vector>
    
    using namespace std;
    
    vector<int> breadthFirstSearch(const unordered_map<int, vector<int>>& graph, int start) {
        queue<int> q;
        unordered_set<int> visited;
        vector<int> result;
    
        visited.insert(start);
        q.push(start);
    
        while (!q.empty()) {
            int vertex = q.front();
            q.pop();
            result.push_back(vertex);
    
            for (int neighbor : graph.at(vertex)) {
                if (visited.find(neighbor) == visited.end()) {
                    visited.insert(neighbor);
                    q.push(neighbor);
                }
            }
        }
    
        return result;
    }`,
    },

    DynamicProgramming: {
      javascript: `function fib(n) {
        const fibValues = Array(n + 1).fill(0);
        fibValues[1] = 1;
    
        for (let i = 2; i <= n; i++) {
          fibValues[i] = fibValues[i - 1] + fibValues[i - 2];
        }
    
        return fibValues[n];
      }`,

      python: `def fib(n):
        fib_values = [0] * (n + 1)
        fib_values[1] = 1
    
        for i in range(2, n + 1):
            fib_values[i] = fib_values[i - 1] + fib_values[i - 2]
    
        return fib_values[n]`,

      java: `public class DynamicProgramming {
        public int fib(int n) {
            int[] fibValues = new int[n + 1];
            fibValues[1] = 1;
    
            for (int i = 2; i <= n; i++) {
                fibValues[i] = fibValues[i - 1] + fibValues[i - 2];
            }
    
            return fibValues[n];
        }
    }`,

      cpp: `#include <iostream>
    #include <vector>
    
    using namespace std;
    
    int fib(int n) {
        vector<int> fibValues(n + 1);
        fibValues[1] = 1;
    
        for (int i = 2; i <= n; i++) {
            fibValues[i] = fibValues[i - 1] + fibValues[i - 2];
        }
    
        return fibValues[n];
    }`,
    },

    BackTracking: {
      javascript: `function solveSudoku(board) {
        if (solve(board)) {
          return board;
        }
        return "No solution exists.";
      }
    
      function solve(board) {
        const [row, col] = findEmptyCell(board);
    
        if (row === -1 && col === -1) {
          return true;
        }
    
        for (let num = 1; num <= 9; num++) {
          if (isSafe(board, row, col, num)) {
            board[row][col] = num;
    
            if (solve(board)) {
              return true;
            }
    
            board[row][col] = 0;
          }
        }
    
        return false;
      }
    
      function findEmptyCell(board) {
        for (let row = 0; row < 9; row++) {
          for (let col = 0; col < 9; col++) {
            if (board[row][col] === 0) {
              return [row, col];
            }
          }
        }
    
        return [-1, -1];
      }
    
      function isSafe(board, row, col, num) {
        return (
          !usedInRow(board, row, num) &&
          !usedInCol(board, col, num) &&
          !usedInBox(board, row - (row % 3), col - (col % 3), num)
        );
      }
    
      function usedInRow(board, row, num) {
        for (let col = 0; col < 9; col++) {
          if (board[row][col] === num) {
            return true;
          }
        }
        return false;
      }
    
      function usedInCol(board, col, num) {
        for (let row = 0; row < 9; row++) {
          if (board[row][col] === num) {
            return true;
          }
        }
        return false;
      }
    
      function usedInBox(board, boxStartRow, boxStartCol, num) {
        for (let row = 0; row < 3; row++) {
          for (let col = 0; col < 3; col++) {
            if (board[row + boxStartRow][col + boxStartCol] === num) {
              return true;
            }
          }
        }
        return false;
      }`,

      python: `def solve_sudoku(board):
        if solve(board):
            return board
        return "No solution exists."
    
    def solve(board):
        row, col = find_empty_cell(board)
    
        if row == -1 and col == -1:
            return True
    
        for num in range(1, 10):
            if is_safe(board, row, col, num):
                board[row][col] = num
    
                if solve(board):
                    return True
    
                board[row][col] = 0
    
        return False
    
    def find_empty_cell(board):
        for row in range(9):
            for col in range(9):
                if board[row][col] == 0:
                    return row, col
    
        return -1, -1
    
    def is_safe(board, row, col, num):
        return (
            not used_in_row(board, row, num)
            and not used_in_col(board, col, num)
            and not used_in_box(board, row - (row % 3), col - (col % 3), num)
        )
    
    def used_in_row(board, row, num):
        for col in range(9):
            if board[row][col] == num:
                return True
        return False
    
    def used_in_col(board, col, num):
        for row in range(9):
            if board[row][col] == num:
                return True
        return False
    
    def used_in_box(board, box_start_row, box_start_col, num):
        for row in range(3):
            for col in range(3):
                if board[row + box_start_row][col + box_start_col] == num:
                    return True
        return False`,

      java: `public class Backtracking {
        public void solve(int[][] board) {
            if (solveSudoku(board)) {
                printBoard(board);
            } else {
                System.out.println("No solution exists.");
            }
        }
    
        private boolean solveSudoku(int[][] board) {
            int[] emptyCell = findEmptyCell(board);
            int row = emptyCell[0];
            int col = emptyCell[1];
    
            if (row == -1 && col == -1) {
                return true;
            }
    
            for (int num = 1; num <= 9; num++) {
                if (isSafe(board, row, col, num)) {
                    board[row][col] = num;
    
                    if (solveSudoku(board)) {
                        return true;
                    }
    
                    board[row][col] = 0;
                }
            }
    
            return false;
        }
    
        private int[] findEmptyCell(int[][] board) {
            int[] emptyCell = new int[2];
    
            for (int row = 0; row < 9; row++) {
                for (int col = 0; col < 9; col++) {
                    if (board[row][col] == 0) {
                        emptyCell[0] = row;
                        emptyCell[1] = col;
                        return emptyCell;
                    }
                }
            }
    
            emptyCell[0] = -1;
            emptyCell[1] = -1;
            return emptyCell;
        }
    
        private boolean isSafe(int[][] board, int row, int col, int num) {
            return (
                !usedInRow(board, row, num)
                && !usedInCol(board, col, num)
                && !usedInBox(board, row - (row % 3), col - (col % 3), num)
            );
        }
    
        private boolean usedInRow(int[][] board, int row, int num) {
            for (int col = 0; col < 9; col++) {
                if (board[row][col] == num) {
                    return true;
                }
            }
            return false;
        }
    
        private boolean usedInCol(int[][] board, int col, int num) {
            for (int row = 0; row < 9; row++) {
                if (board[row][col] == num) {
                    return true;
                }
            }
            return false;
        }
    
        private boolean usedInBox(int[][] board, int boxStartRow, int boxStartCol, int num) {
            for (int row = 0; row < 3; row++) {
                for (int col = 0; col < 3; col++) {
                    if (board[row + boxStartRow][col + boxStartCol] == num) {
                        return true;
                    }
                }
            }
            return false;
        }
    
        private void printBoard(int[][] board) {
            for (int row = 0; row < 9; row++) {
                for (int col = 0; col < 9; col++) {
                    System.out.print(board[row][col] + " ");
                }
                System.out.println();
            }
        }
    }`,

      cpp: `#include <iostream>
    #include <vector>
    
    using namespace std;
    
    bool solveSudoku(vector<vector<int>>& board) {
        pair<int, int> emptyCell = findEmptyCell(board);
        int row = emptyCell.first;
        int col = emptyCell.second;
    
        if (row == -1 && col == -1) {
            return true;
        }
    
        for (int num = 1; num <= 9; num++) {
            if (isSafe(board, row, col, num)) {
                board[row][col] = num;
    
                if (solveSudoku(board)) {
                    return true;
                }
    
                board[row][col] = 0;
            }
        }
    
        return false;
    }
    
    pair<int, int> findEmptyCell(const vector<vector<int>>& board) {
        pair<int, int> emptyCell = {-1, -1};
    
        for (int row = 0; row < 9; row++) {
            for (int col = 0; col < 9; col++) {
                if (board[row][col] == 0) {
                    emptyCell = {row, col};
                    return emptyCell;
                }
            }
        }
    
        return emptyCell;
    }
    
    bool isSafe(const vector<vector<int>>& board, int row, int col, int num) {
        return (
            !usedInRow(board, row, num)
            && !usedInCol(board, col, num)
            && !usedInBox(board, row - (row % 3), col - (col % 3), num)
        );
    }
    
    bool usedInRow(const vector<vector<int>>& board, int row, int num) {
        for (int col = 0; col < 9; col++) {
            if (board[row][col] == num) {
                return true;
            }
        }
        return false;
    }
    
    bool usedInCol(const vector<vector<int>>& board, int col, int num) {
        for (int row = 0; row < 9; row++) {
            if (board[row][col] == num) {
                return true;
            }
        }
        return false;
    }
    
    bool usedInBox(const vector<vector<int>>& board, int boxStartRow, int boxStartCol, int num) {
        for (int row = 0; row < 3; row++) {
            for (int col = 0; col < 3; col++) {
                if (board[row + boxStartRow][col + boxStartCol] == num) {
                    return true;
                }
            }
        }
        return false;
    }
    
    void printBoard(const vector<vector<int>>& board) {
        for (int row = 0; row < 9; row++) {
            for (int col = 0; col < 9; col++) {
                cout << board[row][col] << " ";
            }
            cout << endl;
        }
    }`,
    },

    DijkstrasAlgorithm: {
      javascript: `function dijkstra(graph, start) {
        const distances = {};
        const previous = {};
        const queue = new PriorityQueue();
    
        for (const vertex in graph) {
          if (vertex === start) {
            distances[vertex] = 0;
            queue.enqueue(vertex, 0);
          } else {
            distances[vertex] = Infinity;
            queue.enqueue(vertex, Infinity);
          }
          previous[vertex] = null;
        }
    
        while (!queue.isEmpty()) {
          const currentVertex = queue.dequeue().value;
    
          if (currentVertex === end) {
            // Reached the destination vertex
            break;
          }
    
          if (distances[currentVertex] <= queue.getPriority(currentVertex)) {
            for (const neighbor in graph[currentVertex]) {
              const distance = distances[currentVertex] + graph[currentVertex][neighbor];
    
              if (distance < distances[neighbor]) {
                distances[neighbor] = distance;
                previous[neighbor] = currentVertex;
                queue.changePriority(neighbor, distance);
              }
            }
          }
        }
    
        // Return the distances and previous nodes
        return { distances, previous };
      }`,

      python: `import heapq
    
    def dijkstra(graph, start):
        distances = {}
        previous = {}
        queue = []
    
        for vertex in graph:
            if vertex == start:
                distances[vertex] = 0
                heapq.heappush(queue, (0, vertex))
            else:
                distances[vertex] = float("inf")
                heapq.heappush(queue, (float("inf"), vertex))
            previous[vertex] = None
    
        while queue:
            current_distance, current_vertex = heapq.heappop(queue)
            if current_distance == end:
                # Reach the destination vertex
                break
    
            if current_distance <= distances[current_vertex]:
                for neighbor, weight in graph[current_vertex].items():
                    distance = current_distance + weight
                    if distance < distances[neighbor]:
                        distances[neighbor] = distance
                        previous[neighbor] = current_vertex
                        heapq.heappush(queue, (distance, neighbor))
    
        # Return the distances and previous nodes
        return distances, previous`,

      java: `import java.util.*;
    
    class DijkstrasAlgorithm {
        public Map<Integer, Integer> dijkstra(Map<Integer, Map<Integer, Integer>> graph, int start) {
            Map<Integer, Integer> distances = new HashMap<>();
            Map<Integer, Integer> previous = new HashMap<>();
            PriorityQueue<Node> queue = new PriorityQueue<>(Comparator.comparingInt(n -> n.distance));
    
            for (int vertex : graph.keySet()) {
                if (vertex == start) {
                    distances.put(vertex, 0);
                    queue.offer(new Node(vertex, 0));
                } else {
                    distances.put(vertex, Integer.MAX_VALUE);
                    queue.offer(new Node(vertex, Integer.MAX_VALUE));
                }
                previous.put(vertex, null);
            }
    
            while (!queue.isEmpty()) {
                Node current = queue.poll();
                int currentVertex = current.vertex;
    
                if (current.distance == end) {
                    // Reached the destination vertex
                    break;
                }
    
                if (current.distance <= distances.get(currentVertex)) {
                    for (Map.Entry<Integer, Integer> neighborEntry : graph.get(currentVertex).entrySet()) {
                        int neighbor = neighborEntry.getKey();
                        int distance = current.distance + neighborEntry.getValue();
    
                        if (distance < distances.get(neighbor)) {
                            distances.put(neighbor, distance);
                            previous.put(neighbor, currentVertex);
                            queue.offer(new Node(neighbor, distance));
                        }
                    }
                }
            }
    
            // Return the distances and previous nodes
            return distances;
        }
    
        private static class Node {
            private final int vertex;
            private final int distance;
    
            public Node(int vertex, int distance) {
                this.vertex = vertex;
                this.distance = distance;
            }
        }
    }`,

      cpp: `#include <iostream>
    #include <queue>
    #include <unordered_map>
    #include <vector>
    
    using namespace std;
    
    unordered_map<int, int> dijkstra(const unordered_map<int, unordered_map<int, int>>& graph, int start) {
        unordered_map<int, int> distances;
        priority_queue<pair<int, int>, vector<pair<int, int>>, greater<pair<int, int>>> pq;
    
        for (const auto& entry : graph) {
            int vertex = entry.first;
            if (vertex == start) {
                distances[vertex] = 0;
                pq.push({0, vertex});
            } else {
                distances[vertex] = INT_MAX;
                pq.push({INT_MAX, vertex});
            }
        }
    
        while (!pq.empty()) {
            int currentDistance = pq.top().first;
            int currentVertex = pq.top().second;
            pq.pop();
    
            if (currentDistance == end) {
                // Reached the destination vertex
                break;
            }
    
            if (currentDistance <= distances[currentVertex]) {
                for (const auto& neighborEntry : graph[currentVertex]) {
                    int neighbor = neighborEntry.first;
                    int distance = currentDistance + neighborEntry.second;
    
                    if (distance < distances[neighbor]) {
                        distances[neighbor] = distance;
                        pq.push({distance, neighbor});
                    }
                }
            }
        }
    
        // Return the distances
        return distances;
    }`,
    },

    KadanesAlgorithm: {
      javascript: `function kadanesAlgorithm(arr) {
        let maxSum = arr[0];
        let currentSum = arr[0];
    
        for (let i = 1; i < arr.length; i++) {
          currentSum = Math.max(arr[i], currentSum + arr[i]);
          maxSum = Math.max(maxSum, currentSum);
        }
    
        return maxSum;
      }`,

      python: `def kadanes_algorithm(arr):
        max_sum = arr[0]
        current_sum = arr[0]
    
        for i in range(1, len(arr)):
            current_sum = max(arr[i], current_sum + arr[i])
            max_sum = max(max_sum, current_sum)
    
        return max_sum`,

      java: `public class KadanesAlgorithm {
        public int kadanesAlgorithm(int[] arr) {
            int maxSum = arr[0];
            int currentSum = arr[0];
    
            for (int i = 1; i < arr.length; i++) {
                currentSum = Math.max(arr[i], currentSum + arr[i]);
                maxSum = Math.max(maxSum, currentSum);
            }
    
            return maxSum;
        }
    }`,

      cpp: `#include <iostream>
    #include <vector>
    
    using namespace std;
    
    int kadanesAlgorithm(const vector<int>& arr) {
        int maxSum = arr[0];
        int currentSum = arr[0];
    
        for (int i = 1; i < arr.size(); i++) {
            currentSum = max(arr[i], currentSum + arr[i]);
            maxSum = max(maxSum, currentSum);
        }
    
        return maxSum;
    }`,
    },
  };

  const handleLanguageChange = (language) => {
    setSelectedLanguage(language);
  };

  const handleAlgorithmChange = (algorithm) => {
    setSelectedAlgorithm(algorithm);
  };

  const handleCopyCode = () => {
    // Logic to copy the code to the clipboard
    // You can implement this based on your preference and requirements
    // This is just a placeholder implementation
    console.log("Code copied to clipboard");
  };

  return (
    <div>
      <div style={{ textAlign: "center" }}>
        <h2>Diller</h2>
        <button
          style={{
            margin: "5px",
            padding: "0.5rem 1rem",
            fontSize: "1rem",
            background: "#f4f4f4",
            border: "1px solid #ccc",
            borderRadius: "4px",
            cursor: "pointer",
          }}
          onClick={() => handleLanguageChange("javascript")}
        >
          JavaScript
        </button>
        <button
          style={{
            margin: "5px",
            padding: "0.5rem 1rem",
            fontSize: "1rem",
            background: "#f4f4f4",
            border: "1px solid #ccc",
            borderRadius: "4px",
            cursor: "pointer",
          }}
          onClick={() => handleLanguageChange("python")}
        >
          Python
        </button>
        <button
          style={{
            margin: "5px",
            padding: "0.5rem 1rem",
            fontSize: "1rem",
            background: "#f4f4f4",
            border: "1px solid #ccc",
            borderRadius: "4px",
            cursor: "pointer",
          }}
          onClick={() => handleLanguageChange("java")}
        >
          Java
        </button>
        <button
          style={{
            margin: "5px",
            padding: "0.5rem 1rem",
            fontSize: "1rem",
            background: "#f4f4f4",
            border: "1px solid #ccc",
            borderRadius: "4px",
            cursor: "pointer",
          }}
          onClick={() => handleLanguageChange("cpp")}
        >
          C++
        </button>
      </div>
      <div style={{ textAlign: "center" }}>
        <h2>Algoritmalar</h2>
        {Object.keys(algorithms).map((algorithm) => (
          <button
            key={algorithm}
            onClick={() => handleAlgorithmChange(algorithm)}
            style={{
              margin: "5px",
              padding: "0.5rem 1rem",
              fontSize: "1rem",
              background: "#f4f4f4",
              border: "1px solid #ccc",
              borderRadius: "4px",
              cursor: "pointer",
            }}
          >
            {algorithm}
          </button>
        ))}
      </div>
      <div style={{ textAlign: "center" }}>
        <h2>Kod</h2>
        <div style={{ position: "relative" }}>
          {selectedAlgorithm && (
            <SyntaxHighlighter language={selectedLanguage} style={twilight}>
              {algorithms[selectedAlgorithm][selectedLanguage]}
            </SyntaxHighlighter>
          )}
          {selectedAlgorithm && (
            <CopyToClipboard
              text={algorithms[selectedAlgorithm][selectedLanguage]}
              onCopy={handleCopyCode}
            >
              <button
                style={{
                  position: "absolute",
                  top: "0.5rem",
                  right: "0.5rem",
                  padding: "0.5rem",
                  background: "transparent",
                  border: "none",
                  outline: "none",
                  cursor: "pointer",
                  color: "white",
                }}
              >
                <FiCopy />
              </button>
            </CopyToClipboard>
          )}
        </div>
      </div>
    </div>
  );
};

export default AlgorithmViewer;

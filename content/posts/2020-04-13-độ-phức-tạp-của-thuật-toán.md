---
template: post
title: Độ phức tạp của thuật toán
slug: big-o-time-complexity-space-complexity
draft: false
date: 2020-04-13T08:33:16.738Z
description: Độ phức tạp của thuật toán!
category: Data Structure and Algorithm
tags:
  - Data Structure and Algorithm
---
## **What is algorithm?**

Basically whenever we want to solve a problem we will need a set of steps to follow to solve that problem. These steps are called algorithms.

Example: Given an integer array, let's sort them in ascending order. 

There will be many algorithms to solve this problem: QuickSort, MergeSort, HeapSort, BubbleSort, InsertionSort,...

I will go into detail for each algorithm in the next articles.

The results of these algorithms will be the same but the performance of each algorithm will be different. 

So how do we know which algorithm is performing better, which one runs faster, which one uses less memory space?

## **Big-O notation?**

Big-O is a mathematical symbol that shows the efficiency of an algorithm in the worst-case. To measure the efficiency of an algorithm, we need to consider two things:

* **Time Complexity (TC):** quantifies the amount of timetaken by an algorithm to run as a function of the length of the input
* **Space Complexity (SC):** quantifies the amount of space or memory taken by an algorithm to run as a function of the length of the input.

In some cases we will have to trade, either increase SC for faster or smaller SC but slower.

## **Time complexity?**

So, how to denote Time Complexity via Big-O? How to calculate Time Complexity?

```javascript
funtion hello() {
  console.log('Hello world!');
}
```

In above code 'Hello World!' print only once. So, time complexity is constant: O(1).

But this function bellow print n times, depending on the length of the input array. So, the time complexity is linear time: O(n).

```javascript
funtion printArr(arr) {
  for (let i=0; i<arr.length; i++) {
    console.log(arr[i]);
  }
}
```
---
template: post
title: Độ phức tạp của thuật toán!
slug: big-o-time-complexity-space-complexity
draft: false
date: 2020-04-13T08:33:16.738Z
description: Độ phức tạp của thuật toán!
category: Data Structure and Algorithm
tags:
  - Data Structure and Algorithm
---
Trước khi tìm hiểu Big-O là gì thì mình xin nhắc lại khái niệm thuật toán là gì.

## **Thuật toán là gì?**

Đại loại là bất cứ khi nào chúng ta muốn giải quyết một vấn đề thì chúng ta sẽ xác định một tập hợp các bước cần phải tuân theo để giải quyết vấn đề đó. Các bước này được gọi chung là thuật toán.

Ví dụ: Cho 1 mảng số nguyên, sắp xếp theo tứ tự tăng dần. Sẽ có rất nhiều thuật toán mà sau này mình sẽ đi vào chi tiết từng thuật ở các bài tiếp theo để giải quyết vấn đề này. Như: QuickSort, MergeSort, HeapSort, BubbleSort, InsertionSort,...

Kết quả của các thuật toán này sẽ như nhau nhưng hiệu suất của từng thuật toán sẽ khác nhau.

Vậy làm sao chúng ta biết được thuật toán nào có hiệu suất tốt hơn, thuật toán nào chạy nhanh hơn, thuật toán nào dùng ít không gian bộ nhớ hơn?

## **Big-O notation?**

Big-O là một ký hiệu toán học cho thấy mức độ hiệu quả của thuật toán trong trường hợp xấu nhất liên quan đến kích thước đầu vào của nó (input size). Để đo lường độ hiệu quả của một thuật toán, chúng ta cần xem xét hai điều:

* **Time Complexity (TC):** thời gian cần thiết để chạy một thuật toán.
* **Space Complexity (SC):** bộ nhớ yêu cầu để chạy thuật toán đó.

Trong một số trường hợp chúng ta sẽ phải đánh đổi, hoặc là tăng SC để có TC nhanh hơn, hoặc là chấp nhận TC lớn hơn nhưng SC nhỏ hơn.



## **Time complexity?**

Vậy làm sao biểu thị Time Complexity thông qua Big-O? Tính Time Complexity như thế nào?

```javascript
funtion printArr(arr) {
  for (let i=0; i<arr.length; i++) {
    console.log(arr[i]);
  }
}
```
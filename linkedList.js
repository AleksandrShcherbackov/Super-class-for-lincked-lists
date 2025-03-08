'use strict';
import { ListNode } from "./listNode.js";

export class LinkedList {

  constructor () {
    this.length = 0;
    this.first = null;
    this.last = null;
  }

  static mergeTwoLists (list1, list2) {
    let dummy = new LinkedList();
    let node1 = list1.first;
    let node2 = list2.first;

    while (node1 || node2) {
      if (node1?.value < node2?.value) { // Сравниваем значения
        dummy.addNode(node1.value);
        node1 = node1.next;
      } else {
        dummy.addNode(node2.value);
        node2 = node2.next;
      }
    }

    return dummy;
  }

  addNode (value) {
    let node = new ListNode(value, null);

    if (this.first == null) {
      this.first = node;
      this.last = node;
    } else {
      this.last.next = node;
      this.last = node;
    }
    this.length++;

  }

  removeNode (value) {
    let prev = null;
    let current = this.first;

    while (current != null) {

      if (current.value === value) {
        if (prev !== null) {
          prev.next = current.next;
          if (current.next == null) {
            this.last = prev;
          }
        } else {
          this.first = this.first.next;
          if (this.first == null) {
            this.last = null;
          }
        }
        this.length--;
        return true;
      }
      prev = current;
      current = current.next;
    }
    return false;

  }

  contains (value) {
    let current = this.first;

    while (current !== null) {
      if (current.value === value) {
        return true;
      }
      current = current.next;
    }
    return false;
  }

  clear () {
    this.first = null;
    this.last = null;
    this.length = 0;
  }

  copyToArray (arr) {
    let current = this.first;

    if (current !== null) {
      for (let i = 0; i < this.length; i++) {
        arr[i] = current.value;
        current = current.next;
      }
    }
  }

  deleteDuplicatesFromSortedList () {
    let cur = this.first;
    while (cur && cur.next) {
      if (cur.value === cur.next.value) {
        cur.next = cur.next.next;
        this.length--;
      } else {
        cur = cur.next;
      }
    }
  }
  hasCycle() {
    let slow = this.first;
    let fast = this.first;

    while (fast && fast.next) {
      fast = fast.next.next;
      slow = slow.next;

      if (fast === slow) {
        return true;
      }
    }

    return false;
  };
}
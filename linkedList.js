'use strict';
import { ListNode } from "./listNode.js";

export class LinkedList {

  constructor () {
    this.length = 0;
    this.first = null;
    this.last = null;
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

}
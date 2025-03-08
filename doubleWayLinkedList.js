'use strict';
import { ListNode } from "./listNode.js";
import { LinkedList } from "./linkedList.js";

export class doubleWayLinkedList extends LinkedList {
  constructor () {
    super();
  }

  addFirst (value) {
    let node = new ListNode(value, null, null);
    const temp = this.first;

    this.first = node;
    this.first.next = temp;

    if (this.length == 0) {
      this.last = this.first;
    } else {
      temp.prev = this.first;
    }
    this.length++;
  }

  addLast (value) {
    let node = new ListNode(value, null, null);

    if (this.length == 0) {
      this.first = node;
    } else {
      this.last.next = node;
      node.prev = this.last;
    }
    this.last = node;
    this.length++;

  }

  addNode (value) {
    this.addLast(value);
  }

  removeNode (value) {
    let prev = null;
    let current = this.first;

    while (current != null) {
      if (current.value == value) {
        if (prev != null) {
          prev.next = current.next;
          if (current.next == null) {
            this.last = prev;
          } else {
            current.next.prev = prev;
          }
          this.length--;
        } else {
          this.removeFirst()
        }
        return true;
      }
      prev = current;
      current = current.next;
    }
    return false;
  }

  removeFirst () {
    if (this.length != 0) {
      this.first = this.first.next;
      this.length--;
      if (this.length == 0) {
        this.last == null;
      } else {
        this.first.prev = null;
      }
    }
  }

  removeLast () {
    if (this.length != 0) {
      if (this.length == 1) {
        this.first = null;
        this.last = null;
      } else {
        this.last.prev.next = null;
        this.last = this.last.prev;
      }
      this.length--;
    }
  }
}

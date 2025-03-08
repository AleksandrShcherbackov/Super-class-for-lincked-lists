
import { ListNode } from "./listNode";

export class LinckedList {

    constructor() {
        this.length = 0;
        this.first = null;
        this.last = null;
    }

    addNode(value) {
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

    removeNode(value) {
        let prev = null;
        let current = this.first;

        while (current != null) {

            if (current.value === value) {
                if (prev != null) {
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

    constains(value) {
        let current = this.first;

        while (current != null) {
            if (current.value == value) {
                return true;
            }
            current = current.next;
        }
        return false;
    }

    clear() {
        this.first = null;
        this.last = null;
        this.length = 0;
    }

    copyToArray(arr) {
        let current = this.first;

        if (current != null) {
            for (let i = 0; i < this.length; i++) {
                arr[i] = current.value;
                current = current.next;
            }
        }
    }

}
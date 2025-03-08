export class ListNode {
    constructor(value, next, prev) {
        this.value = value;
        this.next = next;
        if (typeof prev != 'undefined') {
            this.prev = prev
        }
    }
}
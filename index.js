'use strict';
import { LinkedList } from "./linkedList.js";
// import { doubleWayLinkedList } from "./doubleWayLinkedList";

// test remove duplicates
const testList1 = new LinkedList();
testList1.addNode(1);
testList1.addNode(1);
testList1.addNode(3);
console.log(testList1);
testList1.deleteDuplicatesFromSortedList();
console.log(testList1);


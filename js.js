'use strict';

class ListNode{
	constructor(value, next, prev){
		this.value = value;
		this.next = next;
		if(typeof prev != 'undefined'){
			this.prev = prev
		}
	}
}

class LinckedList{

	constructor(){

		this.length = 0;
		this.first = null;
		this.last = null;

	}

	addNode(value){

		let node = new ListNode(value, null);
		
		if(this.first == null){
			this.first = node;
			this.last = node;
		} else{
			this.last.next = node;
			this.last = node;
		}
		this.length++;

	}

	removeNode(value){

		let prev = null;
		let current = this.first;

		while(current != null){

			if(current.value == value){
					if(prev != null){
						prev.next = current.next;
						if(current.next == null){
							this.last = prev;
						}
					} else {
						this.first = this.first.next;
						if(this.first == null){
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

	constains(value){
		let current = this.first;

		while(current != null){
			if(current.value == value){
				return true;
			}
			current = current.next;
		}
		return false;
	}

	clear(){
		this.first = null;
		this.last = null;
		this.length = 0;
	}

	copyToArray(arr){
		let current = this.first;

		if(current != null){
			for(let i = 0; i < this.length; i++){
				arr[i] = current.value;
				current = current.next;
			}
		}
	}

}


class doublewayLinckedList extends LinckedList{
	constructor(){
		super();
	}
	
	addFirst(value){
		let node = new ListNode(value, null, null);
		const temp = this.first;

		this.first = node;
		this.first.next = temp;

		if(this.length == 0){
			this.last = this.first;
		} else{
			temp.prev = this.first;
		}
		this.length++;
	}

	addLast(value){
		let node = new ListNode(value, null, null);

		if(this.length == 0){
			this.first = node;
		} else{
			this.last.next = node;
			node.prev = this.last;
		}
		this.last = node;
		this.length++;

	}

	addNode(value){
		this.addLast(value);
	}

	removeNode(value){
		let prev = null;
		let current = this.first;

		while(current != null){
			if(current.value == value){
				if(prev != null){
					prev.next = current.next;
					if(current.next == null){
						this.last = prev;
					} else{
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

	removeFirst(){
		if(this.length != 0){
			this.first = this.first.next;
			this.length--;
			if(this.length == 0){
				this.last == null;
			} else{
				this.first.prev = null;
			}
		}
	}

	removeLast(){
		if(this.length != 0){
			if(this.length == 1){
				this.first = null;
				this.last = null;
			} else{
				this.last.prev.next = null;
				this.last = this.last.prev;
			}
			this.length--;
		}
	}
}
/*var LL = new LinckedList();

let arrForList = ['first', 'second', 'third', 'fouth', 'five'];
for(let i = 0; i < arrForList.length; i++){
	LL.addNode(arrForList[i]);
}

LL.removeNode('second');
LL.removeNode('first');
LL.removeNode('five');
LL.removeNode('six');

arrForList = [];
LL.copyToArray(arrForList);

console.log(arrForList);*/



var DL = new doublewayLinckedList();
DL.addFirst('first');
DL.addLast('second');
DL.addNode('third');

DL.removeNode('second');

var arr = [];

DL.copyToArray(arr);
console.log(arr);
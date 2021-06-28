import { OUT_OF_BOUNDS_ERROR } from "../../utils";
import LinkedListNode from "./linked-list-node";

interface List<T> {
    head: LinkedListNode<T>
    tail: LinkedListNode<T>
    size: number
}

class LinkedList<T> implements Iterable<T> {

    private list: List<T> | undefined;

    size(): number {
        if (this.list) return this.list.size;
        return 0;
    }

    isEmpty(): boolean {
        return !this.list
    }

    addFront(val: T): void {
        const newNode = new LinkedListNode(val)
        if (this.list) {
            this.list.head.prev = newNode
            newNode.next = this.list.head
            this.list.head = newNode
            this.list.size += 1

        } else {
            this.list = {
                head: newNode,
                tail: newNode,
                size: 1,
            }
        }
    }

    addBack(val:T):void {
        const newNode = new LinkedListNode(val)
        if(this.list){
            this.list.tail.next = newNode;
            newNode.prev = this.list.tail;
            this.list.tail = newNode;
            this.list.size +=1;           
        } else {
            this.list = {
                head: newNode,
                tail: newNode,
                size: 1,
            }
        }
    }

    addAt(i: number, val :T): void {
        if(i == 0) {
            this.addFront(val)
            return
        }
        if(i === this.size()) {
            return
        }

        if (i< 0 || i >= this.size() || !this.list) {
            throw new Error(OUT_OF_BOUNDS_ERROR);
        }
    }

    [Symbol.iterator](): Iterator<T, any, undefined> {
        throw new Error("Method not implemented.");
    }

}

export default LinkedList
"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var utils_1 = require("../../utils");
var linked_list_node_1 = __importDefault(require("./linked-list-node"));
var LinkedList = /** @class */ (function () {
    function LinkedList() {
    }
    LinkedList.prototype.size = function () {
        if (this.list)
            return this.list.size;
        return 0;
    };
    LinkedList.prototype.isEmpty = function () {
        return !this.list;
    };
    LinkedList.prototype.addFront = function (val) {
        var newNode = new linked_list_node_1.default(val);
        if (this.list) {
            this.list.head.prev = newNode;
            newNode.next = this.list.head;
            this.list.head = newNode;
            this.list.size += 1;
        }
        else {
            this.list = {
                head: newNode,
                tail: newNode,
                size: 1,
            };
        }
    };
    LinkedList.prototype.addBack = function (val) {
        var newNode = new linked_list_node_1.default(val);
        if (this.list) {
            this.list.tail.next = newNode;
            newNode.prev = this.list.tail;
            this.list.tail = newNode;
            this.list.size += 1;
        }
        else {
            this.list = {
                head: newNode,
                tail: newNode,
                size: 1,
            };
        }
    };
    LinkedList.prototype.addAt = function (i, val) {
        if (i == 0) {
            this.addFront(val);
            return;
        }
        if (i === this.size()) {
            return;
        }
        if (i < 0 || i >= this.size() || !this.list) {
            throw new Error(utils_1.OUT_OF_BOUNDS_ERROR);
        }
    };
    LinkedList.prototype[Symbol.iterator] = function () {
        throw new Error("Method not implemented.");
    };
    return LinkedList;
}());
exports.default = LinkedList;

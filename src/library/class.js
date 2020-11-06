// import Helper from '@dgteam/helper'
// import Model from './main.js'
class List extends Array {
    constructor(arr) {
        super()
        if (Array.isArray(arr) && arr.length > 0) {
            for (let item of arr) {
                this.push(new Item(item))
            }
        }
    }
}

class Item extends Object {
    constructor(item) {
        super()
        Object.assign(this, item)
        // Object.defineProperty(this, "model", {
        //     value: opt,
        //     enumerable: false,
        //     writable: false
        // })
    }
    copy() {
        return new Item(this)
    }
}

export {
    List, Item
}
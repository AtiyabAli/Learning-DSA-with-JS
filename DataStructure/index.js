//Data Structure

//Collection of data values

//Built in Data Structure

// const arr = [1, 2, 3, "Syed"]

// console.log(arr[0]);

// const obj = {
//     name: "syed", 
//     fname: "atiyab"
// }
// console.log(obj.name);
// console.log(obj['fname']);

//Stack Data Structure  LIFO

//Browser history tracking

//call stack in js runtime

//Queue FIFO

class Queue {
    Constructor(){
        this.items = []
    }
    enqueue(element){
        this.items.push(element)
    }
    dequeue(){
        return this.items.shift()
    }
    isEmpty(){
        return this.items.length===0
    }
    peak(){
        if(!this.isEmpty()){
            return this.items[0]
        }
        return null
    }
    size(){
        return this.items.length
    }
    print(){
        console.log(this.items.toString()
        );
    }
}

const queue = new Queue()

queue.enqueue(10)
queue.enqueue(20)
queue.enqueue(30)



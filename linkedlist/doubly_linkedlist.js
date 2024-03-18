class Node {
    constructor(value){
        this.prev = null
        this.value = value
        this.next = null
    }
}

class linkedList{
    constructor(){
        this.head = null
        this.tail = null
        this.size = 0
    }

    prepend(value){
        const node = new Node(value)
        if(this.size === 0){
            this.head = node
            this.tail = node
            this.size++
        }else{
            node.next = this.head
            this.head.prev = node
            this.head = node
            this.size++
        }

    }

    append(value){
        const node = new Node(value)

        if(this.size === 0){
            this.head = node
            this.tail = node
            this.size++
        }else{
            node.prev = this.tail
            this.tail.next = node
            this.tail = node
            this.size++

        }
    }
    insertAfter(loc,value){
        const node = new Node(value)
        if(this.size === 0){
        return null
    }
    let curr = this.head
    let currafter = this.head.next
    while(curr.value !== loc){

        curr = curr.next
        


    }
    
     node.next = curr.next
     curr.next = node
     node.prev = curr
     currafter.prev = node
     this.size++
     
    }


    display(){
        let show = this.head
        let linklist = ''
        while(show){
            linklist+=show.value+' '
            show = show.next

        }return linklist
    }

    reverseDisplay(){
        let show = this.tail
        let linklist = ''
        while(show){
            linklist+=show.value+' '
            show = show.prev
        }return linklist
    }
}

const list = new linkedList()

list.prepend(2020)
list.append(2030)
list.insertAfter(2020,2025)

console.log(list.display());
console.log(list.reverseDisplay());

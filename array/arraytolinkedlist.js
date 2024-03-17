class Node {
    constructor(data){
        this.data = data;
        this.next = null;
    }
 
}

class LinkedList {
    constructor(){
        this.head = null;
        this.tail = null;
        this.size=0;
    }
    append(data){
        let newNode =new Node(data)
        if(this.size===0){
            this.head=newNode
            this.tail=newNode
        }else{
            this.tail.next=newNode
            this.tail=newNode
        }
        this.size++
      }
          printList(){
            let data=''
            let current=this.head;
            while(current!=null){
             data=data+current.data+' '
             current=current.next
            }
            return data;
        }

    }
   


let array = [1, 2, 3, 4, 5];
let list = new LinkedList();
for( i of array){
    list.append(i);
}
list.append(70)
console.log(list.printList());
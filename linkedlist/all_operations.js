class Node{
    constructor(data){
        this.data=data
        this.next=null
    }
}
class LinkedList{
    constructor(){
        this.head=null
        this.tail=null
        this.size=0
    }
    append(data){
        let newnode=new Node(data)
        if(this.size==0){
            this.head=newnode
            this.tail=newnode
        }else{
            this.tail.next=newnode
            this.tail=newnode
        }
        this.size++
    }
    prepend(data){
        let newnode=new Node(data)
        if(this.size==0){
            this.head=newnode
            this.tail=newnode
        }else{
            newnode.next=this.head
            this.head=newnode
        }
        this.size++
    }
    display(){
        let data=''
        let current=this.head
        while(current){
              data+=current.data+" "
              current=current.next
        }
        return data
    }
    insert(data,position){
        if(position<0 || position>this.size){
           return  
        }
        if(position==0){
           this.prepend(data)
        }else{
            let newnode=new Node(data)
            let current=this.head
            for(let i=0;i<position-1;i++){
                current=current.next
            }
            newnode.next=current.next
            current.next=newnode
        }
        this.size++
    }
    remove(data){
        let current=this.head
        let prev
        if(current.data==data){
            this.head=current.next
            this.size--
            return
        }
        while(current!==null && current.data!==data){
            prev=current
            current=current.next
        }
        prev.next=current.next
        this.size--
    }
    deletepos(pos){
        let current=this.head
        let prev
        let count=0
        if(pos===0){
            this.head=current.next
            this.size--
        }
        while(count!==pos){
            prev=current
            current=current.next
            count++
        }
        prev.next=current.next
        this.size--
    }
    reverse(){
        let current=this.head
        let nextNode=null
        let prev=null
        this.tail =this.head
        while(current){
            nextNode=current.next
            current.next=prev
            prev=current
            current=nextNode
        }
        this.head=prev
    }
    sort(){
        let curr=this.head
        let value
        let cmp
        while(curr){
            cmp=curr.next
            while(cmp){
                if(curr.data>cmp.data){
                    value=curr.data
                    curr.data=cmp.data
                    cmp.data=value
                }
                cmp=cmp.next
            }
            curr=curr.next
        }
    }
    removeduplicate(){
        let curr=this.head
        let prev=curr
        curr=curr.next
        while(curr){
            if(prev.data==curr.data && curr.next !==null){
                prev.next=curr.next
                curr=curr.next
            }
            else if(prev.data == curr.data && curr.next ==null){
                prev.next=null
                curr=curr.next
            }else{
                prev=curr
                curr=curr.next
            }
        }

    }
    search(data){
        let temp=this.head
        while(temp!=null){
            if(temp.data===data){
                return true}
            temp=temp.next
            
        }
        return false
      }

}
let newnode=new LinkedList()
newnode.append(35)
newnode.append(34)
newnode.append(23)
newnode.append(23)
newnode.append(23)

newnode.prepend(49)
newnode.prepend(48)
newnode.prepend(49)
newnode.prepend(49)
newnode.prepend(49)
newnode.prepend(49)

newnode.insert(100,6)
newnode.remove(34)
newnode.deletepos(2)

console.log(newnode.display());
console.log('reverse');
newnode.sort()
newnode.reverse()
newnode.removeduplicate()
console.log(newnode.search(100));
console.log(newnode.display());
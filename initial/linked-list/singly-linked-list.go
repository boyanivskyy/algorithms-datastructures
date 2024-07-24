package main

type Node struct {
	val any
	next *Node
}

type LinkedList struct {
	head *Node
	tail *Node
	size int
}

func (l *LinkedList) Add(val any) {
	node := &Node{val: val}
	if l.head == nil {
		l.head = node
		l.tail = node
	} else {
		l.tail.next = node
		l.tail = node
	}
	l.size++
}

func (l *LinkedList) Remove(val any) {
	if l.head == nil {
		return
	}
	if l.head.val == val {
		l.head = l.head.next
		l.size--
		return
	}
	prev := l.head
	for prev.next != nil {
		if prev.next.val == val {
			prev.next = prev.next.next
			l.size--
			return
		}
		prev = prev.next
	}
}

func (l *LinkedList) Size() int {
	return l.size
}

func (l *LinkedList) IsEmpty() bool {
	return l.size == 0
}

func (l *LinkedList) Get(index int) any {
	if index < 0 || index >= l.size {
		return nil
	}
	current := l.head
	for i := 0; i < index; i++ {
		current = current.next
	}
	return current.val
}


func main() {

}
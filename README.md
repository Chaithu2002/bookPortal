# bookPortal

Book Portal using javascript

1) create one list / array containing book details (obj) to implement a book store --> 

	book obj structure -- {
	   id: number
	   name: "string"
	   price: number
	   status: "available" / "unavailable" --> string
	   quantity: number
       }
       
operations need to be performed in book store --> 
options need to be shown to user 
1) show available books to users
2) add book
3) show cart
4) exit


*** After each task you have to commit that code with commit msg as task no 

1st task :-

show available books to users --> 
	here you have to show all list items
	
add book --> 
	here you have to take i/p from user to add book in cart --> that i/p can be index no of book from that list --> for this you have to maintain one list as cart & you have to add this book in that list --> while adding that book in list you have to pass quantity as 1 
	-- once you add that book cart you have to update the quantity in book list -- like you have to decrease the quantity by one & update the same in list 
	
show cart -->
	here you just have to show the cart list which you are creating while adding book	
	
	

2nd task :-

show available books :-
	here after each operation whenever user want to see available books..show them list with latest quantity...once quantity reaches 0 change status to unavailable	
	
add book -->
	now you have to ask quantity as well...& pass that quantity to cart list with book details & update booklists entry quantity accordingly	
	
show cart -->
	here now you have to calculate price of book according to quantity of each book & also calculate total cart value & display book name, price, quantity, total price & at last line total cart value
	
	
3rd task :-

add book --> 
	here while taking quantity you have to check if that much quantity is available or not --> if available directly add to cart ---> else show one message for available quantity --> & take new quantity


4th task :-

to display available books only -->
	
	
5th Task:-

remove item -> Ask for ID, Remove that item from the cart, update the cart and total cart value. after that add to booklist.
update item -> Ask for ID, Then ask for updated quantity, update the book list cart with the updated quantity
 	
----------------------------------------------------------------------------------------------------------------------------	

cart list structure can be -- [
{
 book name: "",
 price: number,
 quantity: number,
 total price: number
}
]
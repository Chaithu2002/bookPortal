// Book Portal using javascript

//userInput 
const readLine = require("readline-sync");

// 1) create one list / array containing book details (obj) to implement a book store --> 

// 	book obj structure -- {
// 	   Book_ID: number
// 	   Name: "string"
// 	   Price: number
// 	   Status: "available" / "unavailable" --> string
// 	   Quantity: number
//        }

let bookStore = [{
    Book_ID: 101,
	Name: "book1",
	Price: 200,
	Status: "available",
	Quantity: 10
},
{
    Book_ID: 102,
	Name: "book2",
	Price: 250,
	Status: "available",
	Quantity: 5
},
{
    Book_ID: 103,
	Name: "book3",
	Price: 150,
	Status: "available",
	Quantity: 15
},
{
    Book_ID: 104,
	Name: "book4",
	Price: 300,
	Status: "available",
	Quantity: 10
},
{
    Book_ID: 105,
	Name: "book5",
	Price: 400,
	Status: "available",
	Quantity: 3
},
{
    Book_ID: 106,
	Name: "book6",
	Price: 500,
	Status: "available",
	Quantity: 8
},
{
    Book_ID: 107,
	Name: "book7",
	Price: 350,
	Status: "available",
	Quantity: 5
},
{
    Book_ID: 108,
	Name: "book8",
	Price: 450,
	Status: "available",
	Quantity: 15
},
{
    Book_ID: 109,
	Name: "book9",
	Price: 500,
	Status: "available",
	Quantity: 15
},
{
    Book_ID: 110,
	Name: "book10",
	Price: 450,
	Status: "available",
	Quantity: 5
}
]

let cart = [];

// operations need to be performed in book store --> 
// options need to be shown to user 
// 1) show available books to users
// 2) add book
// 3) show cart
// 4) exit

let choice = true;
while(choice){
    let input = readLine.questionInt("Pick one option from the below operations:\n1. view available books\n2. add book\n3. show cart\n4. exit\nenter your choice: ");
    if(input == 1){
        showAvailableBooks();
    }
    if(input == 2){
        addBook();
    }
    if(input == 3){
        showCart();
    }
    if(input == 4){
        console.log("\nThankyou for visiting Book Portal :)\n");
        choice = false;
    }
}


// *** After each task you have to commit that code with commit msg as task no 

// 1st task :-

// show available books to users --> 
// 	here you have to show all list items

function showAvailableBooks(){
    console.table(bookStore,["Book_ID","Name","Price","Status","Quantity"]);
}
	
// add book --> 
// 	here you have to take i/p from user to add book in cart --> 
//  that i/p can be index no of book from that list --> 
//  for this you have to maintain one list as cart & you have to add this book in that list --> 
//  while adding that book in list you have to pass Quantity as 1 
// 	-- once you add that book cart you have to update the Quantity in book list
//  -- like you have to decrease the Quantity by one & update the same in list 


function addBook(){
    let userInput = readLine.questionInt("enter the book id: ");
    //checking if the book id is already present or not from bookStore
    
    for(let obj of bookStore){
        console.log(obj);
        let book = {};
        console.log(cart.length);
        if(cart.length > 0 && obj.Book_ID == userInput){
            //checking whether the book is already present in cart or not
            for(let bookInCart of cart){
                console.log("book in cart obj",bookInCart);
                if(bookInCart.Book_ID == userInput){
                    console.log("book is already present in cart.So, increasing the quantity");
                    bookInCart.Quantity++;
                    console.log("after quantity increase",bookInCart);   // if book is present increasing the quantity.
                    // obj.Quantity--;
                    break;             
                }
                else{                                  // if not present then checking whether the user entered book id is matching with any book id in book store
                    if(obj.Book_ID == userInput){
                        book.Name = obj.Name;
                        book.Book_ID = obj.Book_ID;
                        book.Price = obj.Price;
                        book.Status = obj.Status;
                        book.Quantity = 1;
                        cart.push(book);
                        break;
                    }
                    else{
                        console.log("please enter correct book ID\n");   // if user entered book id is not matching with any book id in book store then printing this line.
                        break;
                    }
                }
            } 
            obj.Quantity--;
            break;
        }
        else if(cart.length == 0){
            if(obj.Book_ID == userInput){
                book.Name = obj.Name;
                book.Book_ID = obj.Book_ID;
                book.Price = obj.Price;
                book.Status = obj.Status;
                book.Quantity = 1;
                cart.push(book);
            }else{
                continue;
            }
            obj.Quantity--;
            break;
        } 
    };
    console.log(cart);
    console.table(bookStore,["Book_ID","Name","Price","Status","Quantity"]);
    
}
	
// show cart -->
// 	here you just have to show the cart list which you are creating while adding book	

function showCart(){
    console.table(cart,["Name","Book_ID","Price","Status","Quantity"]);
}
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

// 4th task :-

// to display available books only

function showAvailableBooks(){
    console.table(bookStore.filter((book)=> book.Status == "available"),["Book_ID","Name","Price","Status","Quantity"])   //filtering the books which are available in book store and consoling them 
}

function addBook(){
    let userInput = readLine.questionInt("enter the book id: \n");
    let bookQuantity = readLine.questionInt("enter the quantity: \n");
    //checking whether the quantity is available or not

    //checking if the book id is already present or not from bookStore
    
    for(let obj of bookStore){
        let book = {};
        if(cart.length > 0 && obj.Book_ID == userInput){
            //checking whether the book is already present in cart or not
            for(let bookInCart of cart){
                if(bookInCart.Book_ID == userInput){
                    if(obj.Quantity>0){
                        console.log("\nbook is already present in cart.So, increasing the quantity\n");
                        bookInCart.Quantity = bookQuantity;   // if book is present increasing the quantity.
                    }else{
                        console.log("\nbook is out of stock\n");
                        obj.Status = "unavailable";
                    }   
                    break;             
                }
                else{                                  // if not present then checking whether the user entered book id is matching with any book id in book store
                    if(obj.Book_ID == userInput){
                        book.Name = obj.Name;
                        book.Book_ID = obj.Book_ID;
                        book.Price = obj.Price;
                        book.Status = obj.Status;
                        book.Quantity = bookQuantity;
                        cart.push(book);
                        console.log("\nbook is added to cart\n");
                        break;
                    }
                    else{
                        console.log("please enter correct book ID\n");   // if user entered book id is not matching with any book id in book store then printing this line.
                        break;
                    }
                }
            } 
            if(obj.Quantity > 0){
                obj.Quantity = obj.Quantity - bookQuantity;
            }else{
                if(obj.Quantity == 0){
                    obj.Status = "unavailable";
                }
            }
            break;
        }
        else if(cart.length == 0){
            if(obj.Book_ID == userInput){
                book.Name = obj.Name;
                book.Book_ID = obj.Book_ID;
                book.Price = obj.Price;
                book.Status = obj.Status;
                if(bookQuantity > obj.Quantity){
                    console.log(`sorry you cannot add the books, because available quantity is only ${obj.Quantity}`); // checking whether the inserting book quantity is greater than original book quantity.
                    break;
                }
                book.Quantity = bookQuantity;
                cart.push(book);
                console.log("\nbook is added to cart\n");
            }else{
                continue;
            }
            obj.Quantity = obj.Quantity - bookQuantity;
            if(obj.Quantity == 0){
                obj.Status = "unavailable";                //if book quantity becomes 0 after pushing into cart then making the status of the book to unavailable
            }
            break;
        } 
    };
    
}
	

function showCart(){
    let totalCartValue = 0;
    let totalBookvalue = 0;
    
    cart.forEach((book)=>{
        totalBookvalue = book.Price * book.Quantity;
        book.eachBookPrice = totalBookvalue;
        totalCartValue += book.eachBookPrice;
    })

    console.table(cart,["Name","Book_ID","Price","Quantity","eachBookPrice"]);
    console.log(`\nTotal cart value is ${totalCartValue}\n`);
}



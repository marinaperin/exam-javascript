// Exercise 3

const book = {
    title: "Il Grande Gatsby",
    author: "F. Scott Fitzgerald",
    year: 1925
};

// 1

book.rating = 6;

// 2

book.increaseRating = increaseRating = (num)=>{
    book.rating += num;
    if(book.rating >= 10){
        book.rating = 10;
    }
    return book.rating;
};

// 3

delete book.year;

// 4

const keys = Object.keys(book);
for(let i = 0; i < keys.length; i++){
    const key = keys[i];
    console.log(`${key}: ${book[key]}`);
}

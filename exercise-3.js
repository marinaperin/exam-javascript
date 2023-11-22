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
};

// 3

delete book.year;

// 4

const keys = Object.keys(book);
for(let i = 0; i < keys.length; i++){
    const key = keys[i];
    console.log(`${key}: ${book[key]}`);
}

/*
    Avrei potuto prendere anche le Object.entries, che mi tornava un array di
    array chiave-valore, oppure prendere direttamente sia le keys che i values,
    ma sapendo che con le parentesi quadre di key e un ciclo posso ottenere i
    values, mi sembrava un passaggio extra non strettamente necessario.
*/
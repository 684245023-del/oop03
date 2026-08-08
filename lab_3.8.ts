enum BookGenre{
  Action = "Action",
  Comedy = "Comedy",
  Drama = "Drama",
  SciFi = "SciFi"
}
interface Book{
    title: string;
    author: string;
    genre: BookGenre;
}
type LibraryInventory = Book[];
function printSciFiBooks(inventory: LibraryInventory): void {
  console.log("=== Sci-Fi Books List ===");
  
  const sciFiBooks = inventory.filter(book => book.genre === BookGenre.SciFi);

  if (sciFiBooks.length === 0) {
    console.log("No Sci-Fi books found in the inventory.");
    return;
  }

  sciFiBooks.forEach(book => {
    console.log(`- Title: "${book.title}", Author: ${book.author}`);
  });
}

const myLibrary: LibraryInventory = [
  { title: "Dune", author: "Frank Herbert", genre: BookGenre.SciFi },
  { title: "The Hobbit", author: "J.R.R. Tolkien", genre: BookGenre.Action },
  { title: "Foundation", author: "Isaac Asimov", genre: BookGenre.SciFi },
  { title: "The Great Gatsby", author: "F. Scott Fitzgerald", genre: BookGenre.Drama }
];

printSciFiBooks(myLibrary);
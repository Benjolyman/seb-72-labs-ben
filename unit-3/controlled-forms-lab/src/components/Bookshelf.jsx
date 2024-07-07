import React, { useState } from "react";

const BookShelf = () => {
  const [books, setBooks] = useState([
    { title: "Fourth Wing", author: "Rebecca Yarros" },
    { title: "The Lion, the Witch and the Wardrobe", author: "C.S. Lewis" },
  ]);

  const [newBook, setNewBook] = useState({ title: "", author: "" });

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setNewBook((prevBook) => ({
      ...prevBook,
      [name]: value,
    }));
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    setBooks((prevBooks) => [...prevBooks, newBook]);
    setNewBook({ title: "", author: "" });
  };

  return (

    <div>

      <div>
        <h3>Add a Book</h3>
        <form onSubmit={handleSubmit}>
          <input
            type="text"
            name="title"
            value={newBook.title}
            onChange={handleInputChange}
            placeholder="Title"
            required
          />
          <input
            type="text"
            name="author" 
            value={newBook.author}
            onChange={handleInputChange}
            placeholder="Author"
            required
          />
          <button type="submit">Add Book</button>
        </form>
      </div>

      <div>
        {books.map((book, index) => (
          <div key={index} className="bookCard">
            <h4>{book.title}</h4>
            <p>Written by: {book.author}</p>
          </div>
        ))}
      </div>

    </div>
  );
};

export default BookShelf;

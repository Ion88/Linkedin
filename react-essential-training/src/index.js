import React, { Component } from "react";
import { render } from "react-dom";

let bookList = [
  { title: "Alchimist", author: "Paulo Coehlo", pages: 250 },
  { title: "Amintiri din copilarie", author: "Ion Creanga", pages: 90 },
  { title: "Harry Potter", author: "Nu tin minte", pages: 440 },
];

const Book = ({ title, author, pages, freeBookmark }) => {
  return (
    <section>
      <h2>{title}</h2>
      <p>By: {author}</p>
      <p>Pages: {pages} pages</p>
      <p>Free bookmark today: {freeBookmark ? "yes" : "no"}</p>
    </section>
  );
};

const Hiring = () => (
  <div>
    <p>The library is hiring. Go to www.library/jobs for more</p>
  </div>
);

const NotHiring = () => (
  <div>
    <p>The library is not hiring. Check back later for more info</p>
  </div>
);

class Library extends Component {
  state = {
    open: true,
    freeBookmark: true,
    hiring: false,
  };

  toggleOpenClosed = () => {
    this.setState((prevState) => ({
      open: !prevState.open,
    }));
  };

  render() {
    console.log(this.state);
    const { books } = this.props;
    return (
      <div>
        {this.state.hiring ? <Hiring /> : <NotHiring />}
        <h1>The library is {this.state.open ? "open" : "closed"}</h1>
        <button onClick={this.toggleOpenClosed}>Change</button>
        {books.map((book, i) => (
          <Book
            key={i}
            title={book.title}
            author={book.author}
            pages={book.pages}
            freeBookmark={this.state.freeBookmark}
          />
        ))}
      </div>
    );
  }
}

render(<Library books={bookList} />, document.getElementById("root"));

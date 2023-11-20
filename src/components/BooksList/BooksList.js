import PropTypes from 'prop-types';


const BookList =({books, removeBook})=>{
    return (
        <ul>
        {books.map(book=><li key={book.id}>{book.title} by {book.author} 
        <button onClick={()=>removeBook(book.id)}>Remove</button></li>)}
        </ul>
    );
};

BookList.prototype={
    books: PropTypes.array.isRequired,
    removeBook: PropTypes.func.isRequired
};
export default BookList;
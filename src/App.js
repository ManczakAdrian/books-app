import BookList from "./components/BooksList/BooksList";
import BookForm from "./components/BookForm/BookForm";

const App = () => {
  return (
    <div >
      <h1>Books App</h1>
      <BookList/>
      <BookForm/>
    </div>
  );
}

export default App;

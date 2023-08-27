import Welcome from "./dashboard/Welcome";
import MovieList from "./dashboard/MovieList";

const App = () => {

  return (
    <div className="py-40 lg:px-10 md:px-10 px-2">
      <Welcome />
      <MovieList />
    </div>
  );
};

export default App; 
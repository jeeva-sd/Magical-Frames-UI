import Welcome from "./dashboard/Welcome";
import MovieList from "./dashboard/MovieList";

export default function App() {

  return (
    <div className="py-40 px-10">
      <Welcome />
      <MovieList />
    </div>
  );
}
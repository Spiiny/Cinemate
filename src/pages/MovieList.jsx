import { Card } from "../components/Card";
import { UseFetch } from "../hooks/UseFetch";
import { useTitle } from "../hooks/useTitle";

export const MovieList = ({apiPath,title}) => {
  const { data:movies } = UseFetch(apiPath);
  useTitle(title);

  return (
    <main>
      <section className="max-w-7xl mx-auto py-7">
        <div className="flex flex-wrap justify-start">
          {movies.map(movie=>(
            <Card key={movie.id} movie={movie} />
            ))}
        </div>
      </section>
    </main>
  )
}

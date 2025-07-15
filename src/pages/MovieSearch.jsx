import { Card } from "../components/Card";
import { UseFetch } from "../hooks/UseFetch";
import { useSearchParams } from "react-router-dom";
import { useTitle } from "../hooks/useTitle";

export const MovieSearch = ({apiPath}) => {
  const [searchParams] = useSearchParams();
  const queryTerm = searchParams.get("q");
  const { data:movies } = UseFetch(apiPath,queryTerm);
  useTitle(`Results for "${queryTerm}"`);

  return (
    <main>
      <p className="text-2xl font-medium my-3 dark:text-white">The search results for '{queryTerm}'</p>
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
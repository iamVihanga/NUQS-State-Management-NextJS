import { getMovies } from "@/modules/movies/actions/get-movies";
import { Movies } from "@/modules/movies/components/movies";
import { querySchema } from "@/modules/movies/types/get-movies-query";

type SearchParams = Promise<{ [key: string]: string | string[] | undefined }>;

export default async function Home(props: { searchParams: SearchParams }) {
  const searchParams = await props.searchParams;
  const query = querySchema.parse(searchParams);

  console.log({ searchParams, query });

  const { data: movies, error: moviesError } = await getMovies(query);

  return (
    <section className="py-24">
      <div className="max-w-6xl mx-auto">
        <div className="mb-12 text-3xl font-bold">Movies</div>

        <Movies movies={movies} />
      </div>
    </section>
  );
}

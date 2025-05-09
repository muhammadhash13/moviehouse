import { useState } from 'react';
import data from '../../data/data.json';
import MovieCard from '../../components/MovieCard';

export async function getStaticProps() {
  return { props: { movies: data.movies, genres: data.genres }, revalidate: 60 };
}

export default function Movies({ movies, genres }) {
  const [filter, setFilter] = useState(null);
  const filtered = filter ? movies.filter(m => m.genreId === filter) : movies;

  return (
    <div>
      <select onChange={e => setFilter(e.target.value)} defaultValue="">
        <option value="">All Genres</option>
        {genres.map(g => <option key={g.id} value={g.id}>{g.name}</option>)}
      </select>
      {filtered.map(movie => <MovieCard key={movie.id} movie={movie} />)}
    </div>
  );
}

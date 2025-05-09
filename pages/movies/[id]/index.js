import data from '../../../data/data.json';
import Link from 'next/link';

export async function getStaticPaths() {
  const paths = data.movies.map(m => ({ params: { id: m.id } }));
  return { paths, fallback: 'blocking' };
}

export async function getStaticProps({ params }) {
  const movie = data.movies.find(m => m.id === params.id);
  if (!movie) return { notFound: true };
  return { props: { movie }, revalidate: 60 };
}

export default function MovieDetail({ movie }) {
  return (
    <div>
      <h1>{movie.title}</h1>
      <p>{movie.description}</p>
      <p>Rating: {movie.rating}</p>
      <p>Year: {movie.releaseYear}</p>
      <Link href={`/movies/${movie.id}/director`}>View Director</Link>
    </div>
  );
}

import data from '../../../data/data.json';

export async function getStaticPaths() {
  const paths = data.movies.map(m => ({ params: { id: m.id } }));
  return { paths, fallback: false };
}

export async function getStaticProps({ params }) {
  const movie = data.movies.find(m => m.id === params.id);
  const director = data.directors.find(d => d.id === movie.directorId);
  return { props: { director } };
}

export default function Director({ director }) {
  return (
    <div>
      <h2>{director.name}</h2>
      <p>{director.biography}</p>
    </div>
  );
}

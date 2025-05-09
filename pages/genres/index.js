import data from '../../data/data.json';
import GenreList from '../../components/GenreList';

export async function getServerSideProps() {
  return { props: { genres: data.genres } };
}

export default function Genres({ genres }) {
  return <GenreList genres={genres} />;
}

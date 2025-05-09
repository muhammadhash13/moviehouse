
import useSWR from 'swr';
import DirectorCard from '../../components/DirectorCard';

const fetcher = () => fetch('/api/directors').then(res => res.json());

export default function Directors() {
  const { data, error } = useSWR('/api/directors', fetcher);
  if (error) return <div>Error loading directors.</div>;
  if (!data) return <div>Loading...</div>;

  return data.map(d => <DirectorCard key={d.id} director={d} />);
}

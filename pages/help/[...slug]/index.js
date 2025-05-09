import { useRouter } from 'next/router';

export default function Help() {
  const { slug = [] } = useRouter().query;
  return <div><h1>Help Section: {slug.join(' / ') || 'Main'}</h1></div>;
}

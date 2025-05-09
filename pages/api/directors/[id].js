import { connectToDatabase } from '../../../lib/mongodb';
import { ObjectId } from 'mongodb';

export default async function handler(req, res) {
  if (req.method !== 'GET') {
    return res.status(405).json({ message: 'Method not allowed' });
  }

  const { id } = req.query;

  try {
    const { db } = await connectToDatabase();
    const director = await db.collection('directors').findOne({ _id: new ObjectId(id) });
    if (!director) {
      return res.status(404).json({ message: 'Director not found' });
    }
    const movies = await db.collection('movies').find({ directorId: new ObjectId(id) }).toArray();
    res.status(200).json({ ...director, movies });
  } catch (error) {
    res.status(500).json({ message: 'Error fetching director details', error: error.message });
  }
} 
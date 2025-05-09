const { MongoClient, ObjectId } = require('mongodb');
require('dotenv').config();

const MONGODB_URI = process.env.MONGODB_URI || 'mongodb://127.0.0.1:27017/moviehouse';

console.log('Attempting to connect to MongoDB at:', MONGODB_URI);

const genres = [
  { _id: new ObjectId(), name: 'Action', description: 'Action-packed movies with thrilling sequences' },
  { _id: new ObjectId(), name: 'Drama', description: 'Character-driven stories with emotional depth' },
  { _id: new ObjectId(), name: 'Comedy', description: 'Light-hearted films meant to make you laugh' },
  { _id: new ObjectId(), name: 'Sci-Fi', description: 'Science fiction movies exploring futuristic concepts' }
];

const directors = [
  {
    _id: new ObjectId(),
    name: 'Christopher Nolan',
    birthYear: 1970,
    nationality: 'British-American',
    biography: 'Known for complex narratives and innovative filmmaking'
  },
  {
    _id: new ObjectId(),
    name: 'Greta Gerwig',
    birthYear: 1983,
    nationality: 'American',
    biography: 'Pioneer in contemporary independent cinema'
  },
  {
    _id: new ObjectId(),
    name: 'Martin Scorsese',
    birthYear: 1942,
    nationality: 'American',
    biography: 'Legendary director known for crime dramas and character studies'
  }
];

const movies = [
  {
    _id: new ObjectId(),
    title: 'Inception',
    releaseYear: 2010,
    directorId: directors[0]._id,
    genreId: genres[0]._id,
    description: 'A thief who steals corporate secrets through dream-sharing technology is given the inverse task of planting an idea into the mind of a C.E.O.',
    rating: 8.8,
    duration: '2h 28min',
    posterUrl: 'https://image.tmdb.org/t/p/w500/9gk7adHYeDvHkCSEqAvQNLV5Uge.jpg',
    trailerUrl: 'https://www.youtube.com/watch?v=YoHD9XEInc0'
  },
  {
    _id: new ObjectId(),
    title: 'The Dark Knight',
    releaseYear: 2008,
    directorId: directors[0]._id,
    genreId: genres[0]._id,
    description: 'When the menace known as the Joker wreaks havoc and chaos on the people of Gotham, Batman must accept one of the greatest psychological and physical tests of his ability to fight injustice.',
    rating: 9.0,
    duration: '2h 32min',
    posterUrl: 'https://image.tmdb.org/t/p/w500/qJ2tW6WMUDux911r6m7haRef0WH.jpg',
    trailerUrl: 'https://www.youtube.com/watch?v=EXeTwQWrcwY'
  },
  {
    _id: new ObjectId(),
    title: 'Little Women',
    releaseYear: 2019,
    directorId: directors[1]._id,
    genreId: genres[1]._id,
    description: 'Jo March reflects back and forth on her life, telling the beloved story of the March sisters - four young women, each determined to live life on her own terms.',
    rating: 7.8,
    duration: '2h 15min',
    posterUrl: 'https://image.tmdb.org/t/p/w500/yn5ihODtZ7ofn8pDYfxCmxh8AXI.jpg',
    trailerUrl: 'https://www.youtube.com/watch?v=AST2-4db4ic'
  },
  {
    _id: new ObjectId(),
    title: 'The Wolf of Wall Street',
    releaseYear: 2013,
    directorId: directors[2]._id,
    genreId: genres[2]._id,
    description: 'Based on the true story of Jordan Belfort, from his rise to a wealthy stock-broker living the high life to his fall involving crime, corruption and the federal government.',
    rating: 8.2,
    duration: '3h',
    posterUrl: 'https://image.tmdb.org/t/p/w500/34m2tygAYBGqA9MXKhRDtzYd4MR.jpg',
    trailerUrl: 'https://www.youtube.com/watch?v=iszwuX1AK6A'
  },
  {
    _id: new ObjectId(),
    title: 'Interstellar',
    releaseYear: 2014,
    directorId: directors[0]._id,
    genreId: genres[3]._id,
    description: 'A team of explorers travel through a wormhole in space in an attempt to ensure humanity\'s survival.',
    rating: 8.6,
    duration: '2h 49min',
    posterUrl: 'https://image.tmdb.org/t/p/w500/gEU2QniE6E77NI6lCU6MxlNBvIx.jpg',
    trailerUrl: 'https://www.youtube.com/watch?v=zSWdZVtXT7E'
  },
  {
    _id: new ObjectId(),
    title: 'The Shawshank Redemption',
    releaseYear: 1994,
    directorId: directors[2]._id,
    genreId: genres[1]._id,
    description: 'Two imprisoned men bond over a number of years, finding solace and eventual redemption through acts of common decency.',
    rating: 9.3,
    duration: '2h 22min',
    posterUrl: 'https://image.tmdb.org/t/p/w500/q6y0Go1tsGEsmtFryDOJo3dEmqu.jpg',
    trailerUrl: 'https://www.youtube.com/watch?v=6hB3S9bIaco'
  },
  {
    _id: new ObjectId(),
    title: 'The Godfather',
    releaseYear: 1972,
    directorId: directors[2]._id,
    genreId: genres[1]._id,
    description: 'The aging patriarch of an organized crime dynasty transfers control of his clandestine empire to his reluctant son.',
    rating: 9.2,
    duration: '2h 55min',
    posterUrl: 'https://image.tmdb.org/t/p/w500/3bhkrj58Vtu7enYsRolD1fZdja1.jpg',
    trailerUrl: 'https://www.youtube.com/watch?v=sY1S34973zA'
  },
  {
    _id: new ObjectId(),
    title: 'Pulp Fiction',
    releaseYear: 1994,
    directorId: directors[2]._id,
    genreId: genres[0]._id,
    description: 'The lives of two mob hitmen, a boxer, a gangster and his wife, and a pair of diner bandits intertwine in four tales of violence and redemption.',
    rating: 8.9,
    duration: '2h 34min',
    posterUrl: 'https://image.tmdb.org/t/p/w500/d5iIlFn5s0ImszYzBPb8JPIfbXD.jpg',
    trailerUrl: 'https://www.youtube.com/watch?v=s7EdQ4FqbhY'
  },
  {
    _id: new ObjectId(),
    title: 'The Matrix',
    releaseYear: 1999,
    directorId: directors[0]._id,
    genreId: genres[3]._id,
    description: 'A computer hacker learns from mysterious rebels about the true nature of his reality and his role in the war against its controllers.',
    rating: 8.7,
    duration: '2h 16min',
    posterUrl: 'https://image.tmdb.org/t/p/w500/f89U3ADr1oiB1s9GkdPOEpXUk5H.jpg',
    trailerUrl: 'https://www.youtube.com/watch?v=vKQi3bBA1y8'
  },
  {
    _id: new ObjectId(),
    title: 'Goodfellas',
    releaseYear: 1990,
    directorId: directors[2]._id,
    genreId: genres[1]._id,
    description: 'The story of Henry Hill and his life in the mob, covering his relationship with his wife Karen Hill and his mob partners Jimmy Conway and Tommy DeVito.',
    rating: 8.7,
    duration: '2h 26min',
    posterUrl: 'https://image.tmdb.org/t/p/w500/aKuFiU82s5ISJpGZp7YkIr3kCUd.jpg',
    trailerUrl: 'https://www.youtube.com/watch?v=qo5jJpHtI1Y'
  },
  {
    _id: new ObjectId(),
    title: 'The Silence of the Lambs',
    releaseYear: 1991,
    directorId: directors[2]._id,
    genreId: genres[1]._id,
    description: 'A young F.B.I. cadet must receive the help of an incarcerated and manipulative cannibal killer to help catch another serial killer, a madman who skins his victims.',
    rating: 8.6,
    duration: '1h 58min',
    posterUrl: 'https://image.tmdb.org/t/p/w500/rplLJ2hPcOQmkFhTqUte0MkEaO2.jpg',
    trailerUrl: 'https://www.youtube.com/watch?v=W6Mm8Sbe__o'
  },
  {
    _id: new ObjectId(),
    title: 'Fight Club',
    releaseYear: 1999,
    directorId: directors[0]._id,
    genreId: genres[0]._id,
    description: 'An insomniac office worker and a devil-may-care soapmaker form an underground fight club that evolves into something much, much more.',
    rating: 8.8,
    duration: '2h 19min',
    posterUrl: 'https://image.tmdb.org/t/p/w500/pB8BM7pdSp6B6Ih7QZ4DrQ3PmJK.jpg',
    trailerUrl: 'https://www.youtube.com/watch?v=SUXWAEX2jlg'
  },
  {
    _id: new ObjectId(),
    title: 'Forrest Gump',
    releaseYear: 1994,
    directorId: directors[2]._id,
    genreId: genres[1]._id,
    description: 'The presidencies of Kennedy and Johnson, the Vietnam War, the Watergate scandal and other historical events unfold from the perspective of an Alabama man with an IQ of 75.',
    rating: 8.8,
    duration: '2h 22min',
    posterUrl: 'https://image.tmdb.org/t/p/w500/saHP97rTPS5eLmrLQEcANmKrsFl.jpg',
    trailerUrl: 'https://www.youtube.com/watch?v=bLvqoHBptjg'
  },
  {
    _id: new ObjectId(),
    title: 'The Lord of the Rings: The Fellowship of the Ring',
    releaseYear: 2001,
    directorId: directors[0]._id,
    genreId: genres[0]._id,
    description: 'A meek Hobbit from the Shire and eight companions set out on a journey to destroy the powerful One Ring and save Middle-earth from the Dark Lord Sauron.',
    rating: 8.8,
    duration: '2h 58min',
    posterUrl: 'https://image.tmdb.org/t/p/w500/6oom5QYQ2yQTMJIbnvbkBL9cHo6.jpg',
    trailerUrl: 'https://www.youtube.com/watch?v=V75dMMIW2B4'
  },
  {
    _id: new ObjectId(),
    title: 'The Departed',
    releaseYear: 2006,
    directorId: directors[2]._id,
    genreId: genres[1]._id,
    description: 'An undercover cop and a mole in the police attempt to identify each other while infiltrating an Irish gang in South Boston.',
    rating: 8.5,
    duration: '2h 31min',
    posterUrl: 'https://image.tmdb.org/t/p/w500/4m1Au3YkjqsxF8iwQy0fPYSxE0h.jpg',
    trailerUrl: 'https://www.youtube.com/watch?v=auYbpnEwBBg'
  },

  {
    _id: new ObjectId(),
    title: 'The Social Network',
    releaseYear: 2010,
    directorId: directors[2]._id,
    genreId: genres[1]._id,
    description: 'As Harvard student Mark Zuckerberg creates the social networking site that would become known as Facebook, he is sued by the twins who claimed he stole their idea.',
    rating: 7.7,
    duration: '2h',
    posterUrl: 'https://m.media-amazon.com/images/M/MV5BOGUyZDUxZjEtMmIzMC00MzlmLTg4MGItZWJmMzBhZjE0Mjc1XkEyXkFqcGdeQXVyMTMxODk2OTU@._V1_.jpg',
    trailerUrl: 'https://www.youtube.com/watch?v=lB95KLmpLR4'
  },
  {
    _id: new ObjectId(),
    title: 'The Grand Budapest Hotel',
    releaseYear: 2014,
    directorId: directors[1]._id,
    genreId: genres[2]._id,
    description: 'A writer encounters the owner of an aging high-class hotel, who tells him of his early years serving as a lobby boy in the hotel\'s glorious years under an exceptional concierge.',
    rating: 8.1,
    duration: '1h 39min',
    posterUrl: 'https://m.media-amazon.com/images/M/MV5BMzM5NjUxOTEyMl5BMl5BanBnXkFtZTgwNjEyMDM0MDE@._V1_.jpg',
    trailerUrl: 'https://www.youtube.com/watch?v=1Fg5iWmQjwk'
  },
  {
    _id: new ObjectId(),
    title: 'Parasite',
    releaseYear: 2019,
    directorId: directors[2]._id,
    genreId: genres[1]._id,
    description: 'All unemployed, Ki-taek and his family take peculiar interest in the wealthy and glamorous Parks, as they ingratiate themselves into their lives and get entangled in an unexpected incident.',
    rating: 8.6,
    duration: '2h 12min',
    posterUrl: 'https://m.media-amazon.com/images/M/MV5BYWZjMjk3ZTItODQ2ZC00NTY5LWE0ZDYtZTI3MjcwN2Q5NTVkXkEyXkFqcGdeQXVyODk4OTc3MTY@._V1_.jpg',
    trailerUrl: 'https://www.youtube.com/watch?v=5xH0HfJHsaY'
  },
  {
    _id: new ObjectId(),
    title: 'Joker',
    releaseYear: 2019,
    directorId: directors[2]._id,
    genreId: genres[1]._id,
    description: 'In Gotham City, mentally troubled comedian Arthur Fleck is disregarded and mistreated by society. He then embarks on a downward spiral of revolution and bloody crime.',
    rating: 8.4,
    duration: '2h 2min',
    posterUrl: 'https://image.tmdb.org/t/p/w500/udDclJoHjfjb8Ekgsd4FDteOkCU.jpg',
    trailerUrl: 'https://www.youtube.com/watch?v=zAGVQLHvwOY'
  }
];

async function seedDatabase() {
  let client;
  try {
    console.log('Connecting to MongoDB...');
    client = await MongoClient.connect(MONGODB_URI, {
      useNewUrlParser: true,
      useUnifiedTopology: true
    });
    console.log('Successfully connected to MongoDB');

    const db = client.db();
    console.log('Using database:', db.databaseName);

    // Clear existing data
    console.log('Clearing existing data...');
    await db.collection('genres').deleteMany({});
    await db.collection('directors').deleteMany({});
    await db.collection('movies').deleteMany({});
    console.log('Existing data cleared');

    // Insert new data
    console.log('Inserting new data...');
    await db.collection('genres').insertMany(genres);
    await db.collection('directors').insertMany(directors);
    await db.collection('movies').insertMany(movies);

    console.log('Database seeded successfully!');
    console.log(`Inserted ${genres.length} genres`);
    console.log(`Inserted ${directors.length} directors`);
    console.log(`Inserted ${movies.length} movies`);

  } catch (error) {
    console.error('Error details:', error);
    throw error;
  } finally {
    if (client) {
      console.log('Closing MongoDB connection...');
      await client.close();
      console.log('MongoDB connection closed');
    }
  }
}

// Run the seed function
seedDatabase()
  .then(() => {
    console.log('Seed script completed');
    process.exit(0);
  })
  .catch((error) => {
    console.error('Seed script failed:', error);
    process.exit(1);
  }); 
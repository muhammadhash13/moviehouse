import React from 'react';
import { Card, CardContent, CardMedia, Typography, Rating, Box } from '@mui/material';
import { useRouter } from 'next/router';

const MovieCard = ({ movie }) => {
  const router = useRouter();

  return (
    <Card 
      sx={{ 
        maxWidth: 345, 
        height: '100%',
        display: 'flex',
        flexDirection: 'column',
        cursor: 'pointer',
        '&:hover': {
          transform: 'scale(1.02)',
          transition: 'transform 0.2s ease-in-out'
        }
      }}
      onClick={() => router.push(`/movies/${movie._id}`)}
    >
      <CardMedia
        component="img"
        height="500"
        image={movie.posterUrl}
        alt={movie.title}
        sx={{ objectFit: 'cover' }}
      />
      <CardContent sx={{ flexGrow: 1 }}>
        <Typography gutterBottom variant="h5" component="div">
          {movie.title}
        </Typography>
        <Typography variant="body2" color="text.secondary" sx={{ mb: 1 }}>
          {movie.releaseYear} • {movie.duration}
        </Typography>
        <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
          <Rating value={movie.rating / 2} precision={0.5} readOnly />
          <Typography variant="body2" color="text.secondary">
            {movie.rating}/10
          </Typography>
        </Box>
      </CardContent>
    </Card>
  );
};

export default MovieCard; 
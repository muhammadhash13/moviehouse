import React, { useEffect, useState } from 'react';
import { useRouter } from 'next/router';
import { Container, Typography, Box, Grid, Rating, Paper, CircularProgress } from '@mui/material';
import Header from '../../components/Header';

export default function MovieDetails() {
  const router = useRouter();
  const { id } = router.query;
  const [movie, setMovie] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchMovie = async () => {
      if (!id) return;
      
      try {
        const response = await fetch(`/api/movies/${id}`);
        if (!response.ok) {
          throw new Error('Failed to fetch movie details');
        }
        const data = await response.json();
        setMovie(data);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    fetchMovie();
  }, [id]);

  if (loading) {
    return (
      <div>
        <Header />
        <Box sx={{ display: 'flex', justifyContent: 'center', mt: 4 }}>
          <CircularProgress />
        </Box>
      </div>
    );
  }

  if (error) {
    return (
      <div>
        <Header />
        <Container>
          <Typography color="error">{error}</Typography>
        </Container>
      </div>
    );
  }

  if (!movie) {
    return (
      <div>
        <Header />
        <Container>
          <Typography>Movie not found</Typography>
        </Container>
      </div>
    );
  }

  return (
    <div>
      <Header />
      <Container maxWidth="lg" sx={{ mt: 4 }}>
        <Grid container spacing={4}>
          <Grid item xs={12} md={4}>
            <Paper elevation={3}>
              <img
                src={movie.posterUrl}
                alt={movie.title}
                style={{
                  width: '100%',
                  height: 'auto',
                  display: 'block'
                }}
              />
            </Paper>
          </Grid>
          <Grid item xs={12} md={8}>
            <Typography variant="h3" component="h1" gutterBottom>
              {movie.title}
            </Typography>
            <Box sx={{ display: 'flex', alignItems: 'center', gap: 2, mb: 2 }}>
              <Rating value={movie.rating / 2} precision={0.5} readOnly />
              <Typography variant="body1">
                {movie.rating}/10
              </Typography>
            </Box>
            <Typography variant="h6" gutterBottom>
              {movie.releaseYear} • {movie.duration}
            </Typography>
            <Typography variant="body1" paragraph>
              {movie.description}
            </Typography>
            {movie.trailerUrl && (
              <Box sx={{ mt: 4 }}>
                <Typography variant="h6" gutterBottom>
                  Watch Trailer
                </Typography>
                <iframe
                  width="100%"
                  height="400"
                  src={movie.trailerUrl.replace('watch?v=', 'embed/')}
                  title="Movie Trailer"
                  frameBorder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                />
              </Box>
            )}
          </Grid>
        </Grid>
      </Container>
    </div>
  );
} 
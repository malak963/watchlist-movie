import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

const MoviePage = () => {
  const { id } = useParams();
  const [movie, setMovie] = useState(null);
  const [videoKey, setVideoKey] = useState(null);

  useEffect(() => {
    const apiKey = '2bf24dea2b4c3953f2394ad560fd6657';
    const fetchMovie = async () => {
      const res = await fetch(`https://api.themoviedb.org/3/movie/${id}?api_key=${apiKey}&language=ar`);
      const data = await res.json();
      setMovie(data);

      const videoRes = await fetch(`https://api.themoviedb.org/3/movie/${id}/videos?api_key=${apiKey}&language=en`);
      const videoData = await videoRes.json();
      const trailer = videoData.results.find(v => v.type === 'Trailer' || v.type === 'Teaser');
      if (trailer) setVideoKey(trailer.key);
    };
    fetchMovie();
  }, [id]);

  if (!movie) return <p>جارٍ تحميل الفيلم...</p>;

  return (
    <div className='movie-page'>
      <h1>{movie.title}</h1>
      {videoKey ? (
        <iframe
          width='100%'
          height='500'
          src={`https://www.youtube.com/embed/${videoKey}`}
          title={movie.title}
          frameBorder='0'
          allowFullScreen
        ></iframe>
      ) : (
        <p>لم يتم العثور على فيديو رسمي لهذا الفيلم.</p>
      )}
      <p className='overview'>{movie.overview}</p>
    </div>
  );
};

export default MoviePage;

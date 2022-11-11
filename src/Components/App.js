import './App.css';
import Nav from './Nav';
import Hero from './Hero';
import Movie from './Movie';
import list from './MovieList';
import Footer from './Footer';

export default function App() {
  const movies = list.map(movie => {
    return(
      <Movie 
        key={movie.id}
        movie={movie}
      />
    )
  })

  
  return (
      <>
        <Nav />
        <Hero />
        <section className="card--container">
          {movies}
        </section>
        <Footer /> 
      </>
  );
}


import React from 'react';
import { Link } from 'react-router-dom';

const Home = () => {
  return (
    <div className="home">
      <div className="hero-section" style={{
        backgroundImage: 'url("./public/Koktelz.svg")',
        backgroundSize: 'full-width',
        backgroundPosition: 'center',
        height: '100vh'
      }}>
        <div className="container h-100">
          <div className="row h-100 align-items-center">
            <div className="col-12 text-center text-white">
              <h1 className="display-1 fw-bold">Bienvenue au Koktel'z</h1>
              <p className="lead mb-4">by Kanzaely</p>
              <p className="lead mb-4">Amateurs de grillades en tout genre, cet endroit est le vôtre. Accompagné de nos coktails fait maison et de nos vins, vous vous régalerez 😃. </p>
              <Link to="/recipes" className="btn btn-primary btn-lg me-3">
                Nos plats
              </Link>
              <Link to="/cocktails" className="btn btn-outline-light btn-lg">
                Nos Koktelz
              </Link>
            </div>
          </div>
        </div>
      </div>

      <section className="featured-section py-5">
        <div className="container">
          <h2 className="text-center mb-5">Nos spécialités</h2>
          <div className="row">
            <div className="col-md-4 mb-4">
              <div className="card h-100">
                <img 
                  src="https://images.unsplash.com/photo-1504674900247-0877df9cc836?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80"
                  className="card-img-top"
                  alt="Featured recipe"
                />
                <div className="card-body">
                  <h5 className="card-title">Nos grillades</h5>
                  <p className="card-text">Maîtrisez l'art de la grillade grâce à nos recettes de prédilection
                  </p>
                </div>
              </div>
            </div>
            <div className="col-md-4 mb-4">
              <div className="card h-100">
                <img 
                  src="https://images.unsplash.com/photo-1476224203421-9ac39bcb3327?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80"
                  className="card-img-top"
                  alt="Featured recipe"
                />
                <div className="card-body">
                  <h5 className="card-title">Nos spécialités fruits de mer</h5>
                  <p className="card-text"> Découvrez notre collection de recettes de fruits de mer</p>
                </div>
              </div>
            </div>
            <div className="col-md-4 mb-4">
              <div className="card h-100">
                <img 
                  src="https://images.unsplash.com/photo-1551024506-0bccd828d307?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80"
                  className="card-img-top"
                  alt="Featured recipe"
                />
                <div className="card-body">
                  <h5 className="card-title">Nos créations sucrées</h5>
                  <p className="card-text">Découvrez nos délicieuses recettes de desserts</p>
                </div>
              </div>
            </div>
            <div className="col-md-4 mb-4">
              <div className="card h-100">
                <img 
                  src="https://images.unsplash.com/photo-1627378378952-a736d8e12219?q=80&w=1952&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                  className="card-img-top"
                  alt="Featured recipe"
                />
                <div className="card-body">
                  <h5 className="card-title">Pour les amateurs de poulet 🍗</h5>
                  <p className="card-text">Maîtrisez l'art de la grillade grâce à nos recettes de prédilection
                  </p>
                </div>
              </div>
            </div>
            <div className="col-md-4 mb-4">
              <div className="card h-100">
                <img 
                  src="https://plus.unsplash.com/premium_photo-1675279027780-05ab8b4a4c1f?fm=jpg&q=60&w=3000&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8dG9wJTIwdmlldyUyMGZvb2R8ZW58MHx8MHx8fDA%3D"
                  className="card-img-top"
                  alt="Featured recipe"
                />
                <div className="card-body">
                  <h5 className="card-title">Nos créations salées</h5>
                  <p className="card-text">Une petite envie de salées ? Voici nos recettes de prédilection
                  </p>
                </div>
              </div>
            </div>
            <div className="col-md-4 mb-4">
              <div className="card h-100">
                <img 
                  src="https://plus.unsplash.com/premium_photo-1673108852141-e8c3c22a4a22?fm=jpg&q=60&w=3000&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8Zm9vZCUyMGltYWdlc3xlbnwwfHwwfHx8MA%3D%3D"
                  className="card-img-top"
                  alt="Featured recipe"
                />
                <div className="card-body">
                  <h5 className="card-title">Nos spécialités étrangères</h5>
                  <p className="card-text">Laissez vous emporter par d'autrees cultures grâce à nos recettes de cuisine étrangère
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
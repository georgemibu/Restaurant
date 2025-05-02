import React from 'react';
import './Receta.css'; 

const Receta = () => {
  return (
    <div className="menu">
      <div className="nav-receta">
        <img src="\public\atras.svg" alt="Atrás" />
        <img src="\public\tres-puntos.svg" alt="Opciones" />
        <img src="\public\menu.svg" alt="Menú" />
      </div>

      <div className="foto-receta">
        <img src="\public\pollo-asado-horno-patatas-cebolla.jpg" alt="Foto receta" />
      </div>

      <div className="descripcion-receta">
        <h1 className="titulo-receta">Pollo al horno con papas fritas</h1>
        <h2 className="precio-receta">$10.00</h2>
      </div>

      <div className="detalle-receta">
        <p className="detalle">
          Pollo dorado al horno con hierbas aromáticas, acompañado de papas rústicas crujientes, cocidas lentamente para lograr un equilibrio perfecto entre sabor, textura y aroma casero.
        </p>
      </div>

      <div className="valoracion-receta">
        <div className="valoracion-img-container">
          <img src="\public\star.png" alt="Valoración" />
          <p>4.0</p>
        </div>
        <div className="valoracion-img-container">
          <img src="\public\fuego.png" alt="Kcal" />
          <p>600 kcal</p>
        </div>
        <div className="valoracion-img-container">
          <img src="\public\despertador.png" alt="Tiempo de cocción" />
          <p>20 min</p>
        </div>
      </div>

      <div className="ingredientes-receta">
        <h3>Ingredientes</h3>
        <div className="ingredientes">
          <div className="img-container">
            <img src="/assets/Nueva carpeta/pollo.png" alt="Pollo" />
          </div>
          <div className="img-container">
            <img src="/assets/Nueva carpeta/patata.png" alt="Patata" />
          </div>
          <div className="img-container">
            <img src="/assets/Nueva carpeta/cebolla.png" alt="Cebolla" />
          </div>
          <div className="img-container">
            <img src="/assets/Nueva carpeta/manzana.png" alt="Manzana" />
          </div>
        </div>
      </div>

      <div className="agregar-receta-container">
        <div className="contador-cantidad">
          <button id="menos">-</button>
          <p>0</p>
          <button id="mas">+</button>
        </div>
        <div className="add-receta-container">
          <button className="add-to-cart">
            <img src="/assets/carrito-de-compras.svg" alt="Agregar al carrito" />
            <p>AÑADIR AL CARRITO</p>
          </button>
        </div>
      </div>
    </div>
  );
};

export default Receta;

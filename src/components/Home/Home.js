import React, { Fragment, useState } from 'react';
import "./Home.css";

const Home = () => {

  
  const settings = {
    dots: true,
    autoplay: true,
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1
   };

  return (
    <Fragment>
<div class="main">
    <div class="slider" id="slider">
      <div class="slides current">
        <h1>Escucha todo tipo</h1>
        <h1>de audiolibro</h1>
      </div>
      <div class="slides">
        <h1>Descubre miles de historias</h1>
      </div>
      <div class="slides">
        <h1>No dudes en usar</h1>
        <h1>NotAudible</h1>
      </div>
    </div>
 
  </div>
  
  <div class="contenedor">
            <table>
            <tr>
                <th>        
                    <figure>
                        <img src="https://estaticos.muyinteresante.es/media/cache/1140x_thumb/uploads/images/gallery/5f4cef935cafe8950d390dfa/novelas-ciencia-ficcion_1.jpg" />
                        <div class="capa">
                        <h3>Ciencia Ficción</h3>
                        <p><b>Leer Más</b></p>
                        </div>
                    </figure>
                </th>
                <th>
                    <figure>
                        <img src="https://i.ytimg.com/vi/s30ft3cRbik/maxresdefault.jpg" />
                        <div class="capa">
                            <h3>Misterior y Suspense</h3>
                            <p><b>Leer Más</b></p>
                        </div>
                    </figure>
                </th>
                <th>
                    <figure>
                        <img src="https://sm.ign.com/ign_es/screenshot/default/image_46zw.jpg" />
                        <div class="capa">
                            <h3>Comedia</h3>
                            <p><b>Leer Más</b></p>
                        </div>
                    </figure>
                </th>
            </tr>
            <tr>
                <td>
                    <figure>
                        <img src="https://img.unocero.com/2020/10/peliculas-terror-netflix-prime-video-1200x600.jpg" />
                        <div class="capa">
                            <h3>Terror</h3>
                            <p><b>Leer Más</b></p>
                        </div>
                    </figure>
                </td>
                <td>
                    <figure>
                        <img src="https://s1.eestatic.com/2020/06/10/cultura/cine/Netflix-Peliculas-Cine-Estrenos_de_cine-Cine_496711655_153519932_1706x960.jpg" />
                        <div class="capa">
                            <h3>Acción</h3>
                            <p><b>Leer Más</b></p>
                        </div>
                    </figure>
                </td>
                <td>
                    <figure>
                        <img src="https://staticr1.blastingcdn.com/media/photogallery/2017/4/9/660x290/b_1200x680/todas-las-peliculas-cuentan-la-misma-historia-aunque-de-manera-distinta_1262769.jpg" />
                        <div class="capa">
                            <h3>Mas categorías</h3>
                            <p><b>Leer Más</b></p>
                        </div>
                    </figure>
                </td>
            </tr>
            </table>
        </div>
    </Fragment>
  )
}

export default Home;
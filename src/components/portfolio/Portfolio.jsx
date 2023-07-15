import React from "react";
import "./portfolio.css";
import IMG1 from "../../assets/hg1.png";
import IMG2 from "../../assets/hg2.png";
import IMG3 from "../../assets/hg14.png";
import IMG4 from "../../assets/8.png";
import IMG5 from "../../assets/hg13.png";
import IMG6 from "../../assets/hg10.png";
import IMGC from "../../assets/cs1.png";
import IMGF from "../../assets/fmh.png";
import IMGE from "../../assets/IEEE.png";

const data=[
  {

    id:1,
    image: IMG1,
    title: 'HelperGuide',
    github: 'https://github.com/protiva-ahammed/HelperGuide',
    demo: 'https://drive.google.com/file/d/1DGkIQz6AgBmSiVbkeTV_-CeLiAQyo8ax/view?usp=sharing'


  },
  {
    id: 2,
    image: IMGC,
    title: 'Probaho Curier Service',
    github: 'https://github.com/protiva-ahammed/CourierService',
    demo: 'https://drive.google.com/file/d/1k4Op8_zOLmASfnh0rgACJEFBTfI0t1D7/view?usp=sharing'

  },
  {
    id: 3,
    image: IMGF,
    title: 'Fomalhut',
    github: '#',
    demo: '#'

  },
  {
    id: 4,
    image: IMGE,
    title: 'Deeplearning & Machine Learning project',
    github: 'https://github.com/protiva-ahammed/Deep-Learning-Algos-and-codes-with-image-processing',
    demo: 'https://scholar.google.com/citations?hl=en&user=VlMqVhAAAAAJ'
  },
  
]

const Portfolio = () => {
  return (
    <section id="portfolio">
      <h5>Recent Works</h5>
      <h2>Portfolio</h2>
      <div className="container portfolio__container">
      {
        data.map(({id,image,title,github,demo})=>{
          return (
            <article key={id} className="portfolio__item">
          <div className="portfolio__item-image">
            <img src={image} alt = {title}></img>
          </div>
          <h3>{title}</h3>
          <div className="portfolio__item-cta">
          <a
            href={github}
            className="btn" target="__blank"
          >
            Github
          </a>
          <a href={demo} className="btn btn-primary" target="__blank">
            Live
          </a>
          </div>
          
        </article>

          )
        })
      }
   
      </div>
    </section>
  );
};

export default Portfolio;

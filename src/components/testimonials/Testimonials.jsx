import React from 'react'
import './testimonials.css'
import AVTR1 from '../../assets/ruet.png'
import AVTR2 from '../../assets/hcc.png'
import AVTR3 from '../../assets/lghs.jpg'


const data =[
  {
    avatar: AVTR1,
    link: 'https://www.ruet.ac.bd/',
    name:  'Rajshahi University of Engineering & Technology(RUET)',
    review: 'Completed Bsc. degree in Computer Science & Engineering in Jan 2023.'

  },
  {
    avatar: AVTR2,
    name:  'Holy Cross College',
    link: 'http://www.hcc.edu.bd/',
    review: 'Completed HSC degree in Science.'

  },
  {
    avatar: AVTR3,
    link: 'http://www.hcc.edu.bd/',
    name:  'Lalmatia Girls\' High School',
    review: 'Completed SSC degree in Science.'

  }
]


const Testimonials = () => {
  return (
    <section id='testimonials'>

  <h2>Education</h2>
    <div className = "container testimonials__container">

{

    data.map(({avatar,link,name,review},index) =>
    
    {
      return(
        <div style={{marginBottom: 30}}>
        <article key={index} className="testimonials">
        <div className="client__avatar">
        <a href={link}><img src={avatar} alt={name} ></img></a>
          
        </div>
        <h5 className = "client__name" >{name}</h5>
        <small className="client__review">{review}</small>
        </article>
        </div>
      )
      
    })
    
}
</div>
    </section>
  )

}



export default Testimonials
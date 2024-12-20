import React from 'react'
const Home = () => {
  return (
    <>
    <main>
      <section className='section-hero'>
        <div className='container grid grid-two cols'>
          <div className="hero-content">
            <p>We are the World Nest IT Company</p>
            <h1>Welcome to Thapa Technical</h1>
            <p>
              Are you ready to take ypur business to the next level with cutting-edge IT solutions? 
              Look no further! At Thapa Technical
              we specialise in provided IT services and solution
            </p>
            <div className="btn btn-group">
            <a href=''><button className='btn'>connect now</button>
            </a>
            <a href=''><button className='btn'>learn more</button>
            </a>
          </div>
          </div>
          <div className="hero-image">
            <img src="/images/a3.jpg" alt="home pic" width='400px' height='400px'/>
          </div>
        </div>
      </section>
    </main>
    <section className='section-analytics'>
      <div className='container grid grid-four-cols'>
        <div className="div1">
          <p>registered companies</p>
        </div>
        <div className="div1">
          <h2>100,00+</h2>
          <p>Happy Clients</p>
        </div>
        <div className="div1">
          <h2>500+</h2>
          <p>well known developers</p>
        </div>
        <div className="div1">
          <h2>24/7</h2>
          <p>services</p>
        </div>
      </div>
    </section>
    <main>
    <section className='section-hero'>
        <div className='container grid grid-two cols'>
        <div className="hero-image">
            <img src="/images/a3.jpg" alt="home pic" width='200px' height='200px'/>
          </div>
         <div className='hero-content'>
          <p>we are here to help you</p>
          <h1>Get Started Today</h1>
          <p>Ready to take first step towards a more efficient and secure
          IT infrastructure ? contact us today for a free consultation and lets discuss
          how THAPA TECHNICAL can help to grow youe business.
          </p>
          </div>
          </div>
          </section>
          </main>
          
            </>
  )
}
export default Home
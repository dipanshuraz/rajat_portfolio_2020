import React, { Component } from 'react';
import ScrollableAnchor from 'react-scrollable-anchor';
import Gallery from 'react-grid-gallery';

import emailjs from 'emailjs-com';
import apiKeys from '../apikeys.js';

import ImageScroller from 'react-image-scroller';



const onSubmit=(e)=>{
  e.preventDefault()// Prevents default refresh by the browser
  emailjs.sendForm(apiKeys.SERVICE_ID, apiKeys.TEMPLATE_ID, e.target, apiKeys.USER_ID)
  .then(result => {
  alert('Message Sent, I\'ll get back to you shortly', result.text);
  },
  error => {
  alert( 'An error occured, Plese try again',error.text)
  })
  }

export class Home extends Component {
  render() {
    return (
      <>
        <div className="container-fluid ">
        <ScrollableAnchor id={'section1'}>
          
            <div className="row justify-content-center align-items-center h-100 bg-dark bg-home-1">
            
                  <div className="col-12 col-md-12 col-lg-8 bg-success">
                    <div className="row justify-content-center align-items-center text-center">
                      <div className="title-text font-weight-bold d-flex justify-content-center align-items-center">
                        <div
                          className="name-box text-white text-title-name "
                          unselectable="on"
                        >
                          RAJAT
                        </div>
                        <div className="name-box text-title" unselectable="on">
                          KUMAR
                        </div>
                      </div>
                    </div>
                    <div className="row py-3 px-2">
                      <div className="text-dark sub-text">
                        <h2>
                          <a
                            style={{ textDecoration: 'none' }}
                            href="mailto:grafornax@gmail.com?body=Your message within Main Body"
                            className="text-dark"
                          >
                            <i class="far fa-envelope"></i>{' '}
                            grafornax@gmail.com
                          </a>
                        </h2>
                        <h3>
                          <a
                            style={{ textDecoration: 'none' }}
                            href="tel:+8004664602"
                            className="text-dark"
                          >
                            <i class="fas fa-mobile-alt"></i> +91 8004664602
                          </a>
                        </h3>
                      </div>
                    </div>

                    <div className="row justify-content-around ">
                      <a href="https://www.facebook.com/GraFornax">
                        <i class="fa-2x fab fa-facebook-f "></i>
                      </a>

                      <a href="https://www.instagram.com/grafornax">
                      <i class="fa-2x fab fa-instagram"></i>
                      </a>
                      

                      <a href="https://www.linkedin.com/in/rajat-kumar-a9858918a/">
                        <i class=" fa-2x fab fa-linkedin-in"></i>
                      </a>

                      <a href="https://www.behance.net/grafornax">
                        <i class="fa-2x fab fa-behance"></i>
                      </a>

                      <a href="https://twitter.com/grafornax">
                        <i class="fa-2x fab fa-twitter-square"></i>
                      </a>
                    </div>
                  </div>
                  <div className="d-none col-12 col-md-6  bg-primary"></div>
                
            </div>

        </ScrollableAnchor>
        <ScrollableAnchor id={'section2'}>
          
           
            <div className="row px-md-4 justify-content-center align-items-center bg-home-2 h-100 bg-success">
              
                  <div className="col-12 col-md-8 bg-primary">
                  <h5 className='py-4'>
                    Turning bright ideas into beautiful, useful, and delightful digital products everyone can use.
                    </h5>
                    <h2 className='py-3'>
                      <i class="fas fa-tools"></i> Tools
                    </h2>
                    <div className="row">
                     
                      <img
                        src="/assets/corel.png"
                        className="m-2 images-icon"
                        alt=""
                      />
                      <img
                        src="/assets/photoshop.png"
                        className="m-2 images-icon"
                        alt=""
                      />
                      <img
                        src="/assets/illustratoor.png"
                       
                        className="m-2 images-icon"
                        alt=""
                      />
                      <img
                        src="/assets/premiere.png"
                       className="m-2 images-icon"
                        alt=""
                      />
                      <img
                        src="/assets/animate.png"
                         className="m-2 images-icon"
                        alt=""
                      />
                      <img
                        src="/assets/indesign.png"
                         className="m-2 images-icon"
                        alt=""
                      />
                      <img
                        src="/assets/figma.png"
                        className="m-2 images-icon"
                        alt=""
                      />
                      <img
                        src="/assets/affter effect.png"
                       className="m-2 images-icon"
                        alt=""
                      />
                     
                      
                    </div>
                    <h2>
                     
                      Services
                    </h2>
                    <div className="">
                      <ul>
                        <li>Brand Design</li>
                        <li>Printing</li>
                        <li>Social media and digital marketing</li>
                        <li>2D Animation</li>
                        <li>Accessories Print</li>
                        
                      </ul>
                    </div>
                  </div>
                  <div className="col-12 bg-secondary col-md-4 text-center py-4">
                    <img
                      src="/assets/bg-1.svg"
                      className="img-fluid  shadow-sm p-2"
                      alt=""
                    />
                    <h4 className="my-3">
                    

                    Have a nice project coming up?
                    Let’s talk about it!
                    </h4>
                     <a className="btn btn-outline-primary font-weight-bold pb-4" style={{ textDecoration: 'none'}} href="#section4">
            Contact Now
              </a>
                   
              </div>
              <div className="col-12 py-4">

              </div>
            </div>
  
        </ScrollableAnchor>
        <ScrollableAnchor id={'section3'}>
          
          <div className="row bg-danger bg-home-3 justify-content-center align-items-center  h-100 h-full">
            <div className="col-12 col-md-10 ">
            
            

                {/* <Gallery  photos={[
  {
    src: 'http://example.com/example/img1.jpg',
    width: 4,
    height: 3
  },
  {
    src: 'http://example.com/example/img2.jpg',
    width: 1,
    height: 1
  }
]} />; */}
                
           <div className="p-2 bg-white border">
           <ImageScroller>
              <img className='border px-2' src="https://wonderfulengineering.com/wp-content/uploads/2014/10/wallpaper-photos-31.jpg" alt="First" />
              <img className='border px-2' src="https://c2.staticflickr.com/9/8817/28973449265_07e3aa5d2e_b.jpg" alt="First" />
              <img className='border px-2' src="https://c2.staticflickr.com/9/8817/28973449265_07e3aa5d2e_b.jpg" alt="First" />
              
          </ImageScroller>
           </div>
            </div>
          
          </div>
        </ScrollableAnchor>
        <ScrollableAnchor id={'section4'}>
          <div className="">
           

            <div className="row">
            <form className='form' onSubmit = {onSubmit}>
<p>Your Name:</p>
<input name='name' type='text' placeholder='name…' className='form__input' />
<p>Subject:</p>
<input name='subject' type='text' placeholder='Subject…' className='form__input' />
<p>Your Message:</p>
<textarea name='message' type='text' placeholder='Your Message…' className='form__input-message' ></textarea>
<button className='form__input — button'>Send Message</button>
</form>
            </div>
            <div className="row bg-home-4 text-center">
              <div className="container my-3">
                <h1 className='py-4' >Get in Touch </h1>
                <form class="form d-flex justify-content-center">
                  <div class="form-group mb-2 w-50">
                    <input
                      type="text"
                      class="form-control "
                      id="email"
                      placeholder="Email "
                    />
                  </div>
                  <button
                    type="submit"
                    class="btn btn-outline-primary font-weight-bold mb-2"
                  >
                    Submit
                  </button>
                </form>
              </div>
            </div>
            
              <div className="row justify-content-center align-items-center  my-5 text-center">
                <div className="col-md-6">
                  <div className="row justify-content-around align-items-center">
                  
                      <a href="https://www.facebook.com/GraFornax">
                        <i class="fa-2x fab fa-facebook-f "></i>
                      </a>

                      <a href="https://www.instagram.com/grafornax">
                      <i class="fa-2x fab fa-instagram"></i>
                      </a>
                      

                      <a href="https://www.linkedin.com/in/rajat-kumar-a9858918a/">
                        <i class=" fa-2x fab fa-linkedin-in"></i>
                      </a>

                      <a href="https://www.behance.net/grafornax">
                        <i class="fa-2x fab fa-behance"></i>
                      </a>

                      <a href="https://twitter.com/grafornax">
                        <i class="fa-2x fab fa-twitter-square"></i>
                      </a>

                  </div>
                </div>
                <div className="col-md-6">
                  <div className="row justify-content-center align-items-center">
                    <h4>
                      Made With {' '} <i class=" fas fa-heart text-danger"> </i>
                      <a
                        style={{ textDecoration: 'none' }}
                        href="https://codersadhu.netlify.app/"
                      >
                        {' '}CoderSadhu
                      </a>
                    </h4>
                  </div>
                </div>
              </div>
            
          </div>
        </ScrollableAnchor>
      
        </div>
      </>
    );
  }
}

export default Home;

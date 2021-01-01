import React, { Component } from 'react';
import CardSM from '../components/CardSm';
import ScrollableAnchor from 'react-scrollable-anchor';
import Gallery from 'react-grid-gallery';

import ImageScroller from 'react-image-scroller';

export class Home extends Component {
  render() {
    return (
      <>
        <ScrollableAnchor id={'section1'}>
          <div className="container-fluid bg-home-1">
            <div className="row justify-content-center align-items-center h-100">
              <div className="container ">
                <div className="row justify-content-center align-items-center">
                  <div className="col-md-6">
                    <div className="row justify-content-center align-items-center text-center">
                      <div className="display-1 font-weight-bold d-flex justify-content-center align-items-center">
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
                    <div className="row my-3">
                      <div className="text-dark">
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
                  <div className="col-md-6"></div>
                </div>
              </div>
            </div>
          </div>
        </ScrollableAnchor>
        <ScrollableAnchor id={'section2'}>
          <div className="container-fluid bg-home-2 h-100 d-flex justify-content-center align-items-center">
            <div className="row">
              <div className="container">
                <div className="row ">
                  <div className="col-md-8">
                    <h2>
                      <i class="fas fa-tools"></i> Tools
                    </h2>
                    <div className="row">
                     
                     
                      <img
                        src="/assets/corel.png"
                        width="100px"
                        height="100px"
                        className="m-2"
                        alt=""
                      />
                      <img
                        src="/assets/photoshop.png"
                        width="100px"
                        height="100px"
                        className="m-2"
                        alt=""
                      />
                      <img
                        src="/assets/illustratoor.png"
                        width="100px"
                        height="100px"
                        className="m-2"
                        alt=""
                      />
                      <img
                        src="/assets/premiere.png"
                        width="100px"
                        height="100px"
                        className="m-2"
                        alt=""
                      />
                      <img
                        src="/assets/animate.png"
                        width="100px"
                        height="100px"
                        className="m-2"
                        alt=""
                      />
                      <img
                        src="/assets/indesign.png"
                        width="100px"
                        height="100px"
                        className="m-2"
                        alt=""
                      />
                      <img
                        src="/assets/figma.png"
                        width="100px"
                        height="100px"
                        className="m-2"
                        alt=""
                      />
                      <img
                        src="/assets/affter effect.png"
                        width="100px"
                        height="100px"
                        className="m-2"
                        alt=""
                      />
                     
                      
                    </div>
                    <h2>
                     
                      Services
                    </h2>
                    <div className="">
                      <ul>
                        <li>HEllo</li>
                        <li>HEllo</li>
                        <li>HEllo</li>
                        <li>HEllo</li>
                        <li>HEllo</li>
                        <li>HEllo</li>
                        <li>HEllo</li>
                      </ul>
                    </div>
                  </div>
                  <div className="col-md-4 text-center">
                    <img
                      src="/assets/bg-1.svg"
                      className="img-fluid  shadow-sm p-2"
                      alt=""
                    />
                    <h4 className="my-3">
                      Lorem ipsum dolor sit amet consectetur adipisicing elit.
                      Iure, facere? Lorem ipsum dolor sit amet consectetur
                      adipisicing elit. Placeat, dolore?
                    </h4>
                     <a className="btn btn-outline-primary font-weight-bold" style={{ textDecoration: 'none'}} href="#section4">
            Contact Now
              </a>
                   
                  </div>
                </div>
              </div>
            </div>
          </div>
        </ScrollableAnchor>
        <ScrollableAnchor id={'section3'}>
          <div className="container-fluid bg-home-3 h-100">
          <div className="row justify-content-center">
            <div className="col-12 col-md-10 ">
            
           <div className="p-2 bg-white border">
           <ImageScroller>
              <img className='border px-2' src="https://wonderfulengineering.com/wp-content/uploads/2014/10/wallpaper-photos-31.jpg" alt="First" />
              <img className='border px-2' src="https://c2.staticflickr.com/9/8817/28973449265_07e3aa5d2e_b.jpg" alt="First" />
              <img className='border px-2' src="https://c2.staticflickr.com/9/8817/28973449265_07e3aa5d2e_b.jpg" alt="First" />
          </ImageScroller>
           </div>
            </div>
          </div>
          </div>
        </ScrollableAnchor>
        <ScrollableAnchor id={'section4'}>
          <div className="container-fluid bg-home-4 h-100 d-flex justify-content-center flex-column text-center">
            <h1>My Clients </h1>
            <div className="container">
              <div className="row my-5 justify-content-around">
                <div className="col-md-3">
                  <CardSM />
                </div>
                <div className="col-md-3">
                  <CardSM />
                </div>
                <div className="col-md-3">
                  <CardSM />{' '}
                </div>
              </div>
            </div>

            <div className="row text-center">
              <div className="container my-3">
                <h1>Get in Touch </h1>
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
            <div className="container justify-content-center align-items-center  my-5 text-center">
              <div className="row">
                <div className="col-md-6">
                  <div className="row justify-content-around align-items-center">
                    <i class="fa-2x fab fa-facebook-f">
                      <a href="https://www.facebook.com/GraFornax/"></a>
                    </i>
                    <i class=" fa-2x fab fa-linkedin-in"></i>
                    <i class="fa-2x fab fa-behance"></i>
                  </div>
                </div>
                <div className="col-md-6">
                  <div className="row justify-content-center align-items-center">
                    <h4>
                      Made With <i class=" fas fa-heart text-danger"> </i>
                      <a
                        style={{ textDecoration: 'none' }}
                        href="https://www.codersadhu.tech"
                      >
                        CoderSadhu
                      </a>
                    </h4>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </ScrollableAnchor>
      </>
    );
  }
}

export default Home;

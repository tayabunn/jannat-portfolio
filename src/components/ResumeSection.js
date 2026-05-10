'use client';

import { useEffect } from 'react';
import Swiper from 'swiper';
import { Navigation } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';

export default function ResumeSection() {
  useEffect(() => {
    new Swiper('.swiper-testimonials', {
      modules: [Navigation],
      slidesPerView: 1,
      spaceBetween: 30,
      loop: true,
      navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
      },
      breakpoints: {
        768: {
          slidesPerView: 2,
        },
      },
    });
  }, []);

  return (
    <section id="resume" className="inner resume">
      {/* Content Block - H2 Section Title Start */}
      <div className="content__block block-large">
        <p className="h2__subtitle animate-in-up">
          <svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="13px" height="13px" viewBox="0 0 13 13" fill="currentColor">
            <path fill="currentColor" d="M5.6,12.6c-0.5-0.8-0.7-2.4-1.7-3.5c-1-1-2.7-1.2-3.5-1.7C-0.1,7-0.1,6,0.4,5.6c0.8-0.5,2.3-0.6,3.5-1.8
              C5,2.8,5.1,1.2,5.6,0.4C6-0.1,7-0.1,7.4,0.4c0.5,0.8,0.7,2.4,1.8,3.5c1.2,1.2,2.6,1.2,3.5,1.7c0.6,0.4,0.6,1.4,0,1.7
              C11.8,7.9,10.2,8,9.1,9.1c-1,1-1.2,2.7-1.7,3.5C7,13.1,6,13.1,5.6,12.6z"/>
          </svg>
          <span>Resume</span>
        </p>
        <h2 className="h2__title animate-in-up">Education and practical experience</h2>
        <p className="h2__text animate-in-up">
          Be what you would seem to be - or, if you'd like it put more simply - never imagine yourself not to be otherwise 
          than what it might appear to others that what you were or 
          <a href="#0" className="text-link">might have been</a> 
          was not otherwise than what you had been 
          would have appeared to them to be otherwise.
        </p>
      </div>
      {/* Content Block - H2 Section Title End */}

      {/* Content Block - Education Start */}
      <div className="content__block block-large">
        <div className="section-h3">
          <h3 className="h3__title animate-in-up">My education</h3>
        </div>
        <div className="container-fluid p-0 resume-lines">
          {/* education single item */}
          <div className="row g-0 resume-lines__item animate-in-up">
            <div className="col-12 col-md-2">
              <span className="resume-lines__date animate-in-up">2015 - 2016</span>
            </div>
            <div className="col-12 col-md-5">
              <h5 className="resume-lines__title animate-in-up">Drawing Concentration</h5>
              <p className="resume-lines__source animate-in-up">Course by
                <a href="#0" className="text-link-bold" target="_blank">New York Academy of Art</a>
              </p>
            </div>
            <div className="col-12 col-md-5">
              <p className="small resume-lines__descr animate-in-up">Intensive drawing courses that present the fundamental principles of drawing.</p>
            </div>
          </div>
          {/* education single item */}
          <div className="row g-0 resume-lines__item animate-in-up">
            <div className="col-12 col-md-2">
              <span className="resume-lines__date animate-in-up">2019 - 2021</span>
            </div>
            <div className="col-12 col-md-5">
              <h5 className="resume-lines__title animate-in-up">UI/UX Design Specialization</h5>
              <p className="resume-lines__source animate-in-up">Course by 
                <a href="#0" className="text-link-bold" target="_blank">California Institute of Arts</a>
              </p>
            </div>
            <div className="col-12 col-md-5">
              <p className="small resume-lines__descr animate-in-up">Research, design, and prototype effective, visually-driven websites and apps.</p>
            </div>
          </div>
          {/* education single item */}
          <div className="row g-0 resume-lines__item animate-in-up">
            <div className="col-12 col-md-2">
              <span className="resume-lines__date animate-in-up">2022</span>
            </div>
            <div className="col-12 col-md-5">
              <h5 className="resume-lines__title animate-in-up">UI/UX Designer</h5>
              <p className="resume-lines__source animate-in-up"> Course by
                <a href="#0" className="text-link-bold" target="_blank">Coursera</a>
              </p>
            </div>
            <div className="col-12 col-md-5">
              <p className="small resume-lines__descr animate-in-up">This cource is about how to complete the design process from beginning to end.</p>
            </div>
          </div>
        </div>
      </div>

      {/* Content Block - Experience Start */}
      <div className="content__block block-large">
        <div className="section-h3">
          <h3 className="h3__title animate-in-up">Work experience</h3>
        </div>
        <div className="container-fluid p-0 resume-lines">
          <div className="row g-0 resume-lines__item animate-in-up">
            <div className="col-12 col-md-2">
              <span className="resume-lines__date animate-in-up">2018 - 2019</span>
            </div>
            <div className="col-12 col-md-5">
              <h5 className="resume-lines__title animate-in-up">Illustrator</h5>
              <p className="resume-lines__source animate-in-up">in the 
                <a href="#0" className="text-link-bold" target="_blank">Creative Mind</a> agency
              </p>
            </div>
            <div className="col-12 col-md-5">
              <p className="small resume-lines__descr animate-in-up">I created original images for a range of digital and printed products.</p>
            </div>
          </div>
          <div className="row g-0 resume-lines__item animate-in-up">
            <div className="col-12 col-md-2">
              <span className="resume-lines__date animate-in-up">2019 - 2021</span>
            </div>
            <div className="col-12 col-md-5">
              <h5 className="resume-lines__title animate-in-up">Graphic Designer</h5>
              <p className="resume-lines__source animate-in-up">in the
                <a href="#0" className="text-link-bold" target="_blank">Moon Light</a> agency
              </p>
            </div>
            <div className="col-12 col-md-5">
              <p className="small resume-lines__descr animate-in-up">My job was to create adverts, branding, signage and other media products.</p>
            </div>
          </div>
          <div className="row g-0 resume-lines__item animate-in-up">
            <div className="col-12 col-md-2">
              <span className="resume-lines__date animate-in-up">2021 - now</span>
            </div>
            <div className="col-12 col-md-5">
              <h5 className="resume-lines__title animate-in-up">UI/UX Designer</h5>
              <p className="resume-lines__source animate-in-up">in the
                <a href="#0" className="text-link-bold" target="_blank">Moon Light</a> agency
              </p>
            </div>
            <div className="col-12 col-md-5">
              <p className="small resume-lines__descr animate-in-up">I am actively involved in creating user interfaces for mobile apps and websites.</p>
            </div>
          </div>
        </div>
      </div>

      {/* Tools List */}
      <div className="content__block">
        <div className="section-h3 section-h3-grid">
          <h3 className="h3__title animate-in-up">My favourite tools</h3>
        </div>
      </div>
      <div className="content__block grid-block block-large">
        <div className="tools-cards d-flex justify-content-start flex-wrap">
          {['photoshop', 'figma', 'illustrator', 'sketch', 'blender', 'html', 'css', 'notion'].map((tool) => (
            <div key={tool} className="tools-cards__item d-flex grid-item-s animate-card-5">
              <div className="tools-cards__card">
                <img className="tools-cards__icon animate-in-up" src={`/img/icons/icon-${tool}.svg`} alt="Tools Icon" />
                <h6 className="tools-cards__caption animate-in-up">{tool.charAt(0).toUpperCase() + tool.slice(1)}</h6>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Testimonials Slider */}
      <div className="content__block section-title">
        <p className="h2__subtitle animate-in-up">
          <svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="13px" height="13px" viewBox="0 0 13 13" fill="currentColor">
            <path fill="currentColor" d="M5.6,12.6c-0.5-0.8-0.7-2.4-1.7-3.5c-1-1-2.7-1.2-3.5-1.7C-0.1,7-0.1,6,0.4,5.6c0.8-0.5,2.3-0.6,3.5-1.8
              C5,2.8,5.1,1.2,5.6,0.4C6-0.1,7-0.1,7.4,0.4c0.5,0.8,0.7,2.4,1.8,3.5c1.2,1.2,2.6,1.2,3.5,1.7c0.6,0.4,0.6,1.4,0,1.7
              C11.8,7.9,10.2,8,9.1,9.1c-1,1-1.2,2.7-1.7,3.5C7,13.1,6,13.1,5.6,12.6z"/>
          </svg>
          <span>Testimonials</span>
        </p>
        <h2 className="h2__title animate-in-up">Clients say about me</h2>
      </div>
      <div className="content__block">
        <div className="testimonials-slider">
          <div className="swiper-testimonials">
            <div className="swiper-wrapper">
              <div className="swiper-slide">
                <div className="testimonials-card animate-in-up">
                  <div className="testimonials-card__tauthor d-flex animate-in-up">
                    <div className="tauthor__avatar">
                      <img src="https://dummyimage.com/400x400/4d4d4d/636363" alt="Review Author" />
                    </div>
                    <div className="tauthor__info d-flex flex-column justify-content-center">
                      <p className="tauthor__name">Tayabun Nesa</p>
                      <p className="tauthor__position">Brand Manager in <a href="#0" className="text-link-bold" target="_blank">Instant Design</a></p>
                      <div className="tauthor__rating d-flex">
                        {[1, 2, 3, 4, 5].map((i) => <i key={i} className="ph-fill ph-star"></i>)}
                      </div>
                    </div>
                  </div>
                  <div className="testimonials-card__descr animate-in-up">
                    <p>Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat.</p>
                  </div>
                </div>
              </div>
              <div className="swiper-slide">
                <div className="testimonials-card animate-in-up">
                  <div className="testimonials-card__tauthor d-flex animate-in-up">
                    <div className="tauthor__avatar">
                      <img src="https://dummyimage.com/400x400/4d4d4d/636363" alt="Review Author" />
                    </div>
                    <div className="tauthor__info d-flex flex-column justify-content-center">
                      <p className="tauthor__name">Jenny Pineapple</p>
                      <p className="tauthor__position">SEO in <a href="#0" className="text-link-bold" target="_blank">Creative People</a></p>
                      <div className="tauthor__rating d-flex">
                        {[1, 2, 3, 4, 5].map((i) => <i key={i} className="ph-fill ph-star"></i>)}
                      </div>
                    </div>
                  </div>
                  <div className="testimonials-card__descr animate-in-up">
                    <p>Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat.</p>
                  </div>
                </div>
              </div>
              <div className="swiper-slide">
                <div className="testimonials-card animate-in-up">
                  <div className="testimonials-card__tauthor d-flex animate-in-up">
                    <div className="tauthor__avatar">
                      <img src="https://dummyimage.com/400x400/4d4d4d/636363" alt="Review Author" />
                    </div>
                    <div className="tauthor__info d-flex flex-column justify-content-center">
                      <p className="tauthor__name">Mark Walnut</p>
                      <p className="tauthor__position">Project Manager in <a href="#0" className="text-link-bold" target="_blank">Tech Solutions</a></p>
                      <div className="tauthor__rating d-flex">
                        {[1, 2, 3, 4, 5].map((i) => <i key={i} className="ph-fill ph-star"></i>)}
                      </div>
                    </div>
                  </div>
                  <div className="testimonials-card__descr animate-in-up">
                    <p>Excellent collaborator! The designs were top-notch and the attention to detail was impressive. Highly recommend for any UI/UX needs.</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="swiper-button-prev mxd-slider-btn-square mxd-slider-btn-square-prev animate-in-up">
              <a className="btn btn-square btn-square-s btn-outline slide-left" href="#0"><i className="ph-bold ph-caret-left"></i></a>
            </div>
            <div className="swiper-button-next mxd-slider-btn-square mxd-slider-btn-square-next animate-in-up">
              <a className="btn btn-square btn-square-s btn-outline slide-right" href="#0"><i className="ph-bold ph-caret-right"></i></a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

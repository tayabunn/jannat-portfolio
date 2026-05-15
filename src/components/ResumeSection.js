'use client';

import { useEffect } from 'react';
import { 
  SiFigma, 
  SiReact, 
  SiNextdotjs, 
  SiTailwindcss, 
  SiGithub 
} from 'react-icons/si';
import { DiIllustrator, DiPhotoshop } from 'react-icons/di';
import { TbBrandAdobeIndesign } from 'react-icons/tb';
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
          Graphic Designer with over 6 years of experience, now transitioning into Frontend Development with a focus on React.js and Next.js.
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
              <span className="resume-lines__date animate-in-up">2025 - 2026</span>
            </div>
            <div className="col-12 col-md-5">
              <h5 className="resume-lines__title animate-in-up">Front-End Web Development</h5>
              <p className="resume-lines__source animate-in-up">Course by
                <a href="#0" className="text-link-bold" target="_blank">Programming Hero</a>
              </p>
            </div>
            <div className="col-12 col-md-5">
              <p className="small resume-lines__descr animate-in-up">Focusing on React.js, Next.js, JavaScript (ES6+), Tailwind CSS, REST APIs, and MongoDB.</p>
            </div>
          </div>
          <div className="row g-0 resume-lines__item animate-in-up">
            <div className="col-12 col-md-2">
              <span className="resume-lines__date animate-in-up">2023 - 2024</span>
            </div>
            <div className="col-12 col-md-5">
              <h5 className="resume-lines__title animate-in-up">Master of Arts in English</h5>
              <p className="resume-lines__source animate-in-up">Degree from 
                <a href="#0" className="text-link-bold" target="_blank">Government Titumir College</a>
              </p>
            </div>
            <div className="col-12 col-md-5">
              <p className="small resume-lines__descr animate-in-up">Advanced studies in English literature and language.</p>
            </div>
          </div>
          <div className="row g-0 resume-lines__item animate-in-up">
            <div className="col-12 col-md-2">
              <span className="resume-lines__date animate-in-up">2019 - 2022</span>
            </div>
            <div className="col-12 col-md-5">
              <h5 className="resume-lines__title animate-in-up">Bachelor of Arts in English</h5>
              <p className="resume-lines__source animate-in-up"> Degree from
                <a href="#0" className="text-link-bold" target="_blank">Government Titumir College</a>
              </p>
            </div>
            <div className="col-12 col-md-5">
              <p className="small resume-lines__descr animate-in-up">English Language & Literature foundation.</p>
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
              <span className="resume-lines__date animate-in-up">2025 - Now</span>
            </div>
            <div className="col-12 col-md-5">
              <h5 className="resume-lines__title animate-in-up">Graphic Designer</h5>
              <p className="resume-lines__source animate-in-up">at 
                <a href="#0" className="text-link-bold" target="_blank">DHEO</a>
              </p>
            </div>
            <div className="col-12 col-md-5">
              <p className="small resume-lines__descr animate-in-up">Contributing to visual communication and design projects.</p>
            </div>
          </div>
          <div className="row g-0 resume-lines__item animate-in-up">
            <div className="col-12 col-md-2">
              <span className="resume-lines__date animate-in-up">2025 - 2026</span>
            </div>
            <div className="col-12 col-md-5">
              <h5 className="resume-lines__title animate-in-up">Graphic Designer</h5>
              <p className="resume-lines__source animate-in-up">at 
                <a href="#0" className="text-link-bold" target="_blank">TechSpire Labs Inc.</a>
              </p>
            </div>
            <div className="col-12 col-md-5">
              <p className="small resume-lines__descr animate-in-up">Designed graphics and visual assets for a tech company.</p>
            </div>
          </div>
          <div className="row g-0 resume-lines__item animate-in-up">
            <div className="col-12 col-md-2">
              <span className="resume-lines__date animate-in-up">2025</span>
            </div>
            <div className="col-12 col-md-5">
              <h5 className="resume-lines__title animate-in-up">Visual Intern</h5>
              <p className="resume-lines__source animate-in-up">at 
                <a href="#0" className="text-link-bold" target="_blank">GAOTek Inc.</a> (New York, USA)
              </p>
            </div>
            <div className="col-12 col-md-5">
              <p className="small resume-lines__descr animate-in-up">Gaining international exposure in design workflows and visual content creation.</p>
            </div>
          </div>
          <div className="row g-0 resume-lines__item animate-in-up">
            <div className="col-12 col-md-2">
              <span className="resume-lines__date animate-in-up">2023 - 2024</span>
            </div>
            <div className="col-12 col-md-5">
              <h5 className="resume-lines__title animate-in-up">Graphic Designer & Content Writer</h5>
              <p className="resume-lines__source animate-in-up">at 
                <a href="#0" className="text-link-bold" target="_blank">Biproteep</a>
              </p>
            </div>
            <div className="col-12 col-md-5">
              <p className="small resume-lines__descr animate-in-up">Designed print and digital marketing materials and illustrations.</p>
            </div>
          </div>
          <div className="row g-0 resume-lines__item animate-in-up">
            <div className="col-12 col-md-2">
              <span className="resume-lines__date animate-in-up">2019 - 2023</span>
            </div>
            <div className="col-12 col-md-5">
              <h5 className="resume-lines__title animate-in-up">Managing Director</h5>
              <p className="resume-lines__source animate-in-up">at 
                <a href="#0" className="text-link-bold" target="_blank">Team Hactor</a>
              </p>
            </div>
            <div className="col-12 col-md-5">
              <p className="small resume-lines__descr animate-in-up">Founded and led Team Hactor, managing operations and team coordination.</p>
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
          {[
            { id: 'figma', name: 'Figma', Icon: SiFigma },
            { id: 'illustrator', name: 'Illustrator', Icon: DiIllustrator },
            { id: 'photoshop', name: 'Photoshop', Icon: DiPhotoshop },
            { id: 'indesign', name: 'InDesign', Icon: TbBrandAdobeIndesign },
            { id: 'react', name: 'React', Icon: SiReact },
            { id: 'next', name: 'Next.js', Icon: SiNextdotjs },
            { id: 'tailwind', name: 'Tailwind', Icon: SiTailwindcss },
            { id: 'github', name: 'GitHub', Icon: SiGithub },
          ].map((tool) => (
            <div key={tool.id} className="tools-cards__item d-flex grid-item-s animate-card-5">
              <div className="tools-cards__card">
                <tool.Icon size={40} className="tools-cards__icon animate-in-up" />
                <h6 className="tools-cards__caption animate-in-up">{tool.name}</h6>
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
                      <p className="tauthor__name">Tayabun Jannat</p>
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

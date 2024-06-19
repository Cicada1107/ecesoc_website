import React from 'react';
import { useEffect } from 'react';
import './HomePage.scss';
// SwiperJs for Carousel
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

// import required modules
import { Navigation } from 'swiper';

// Image imports
import headerLogo from '../../assets/navbrand.png';
import headerLogoGif from '../../assets/navbrand.gif';

// Video Imports
import bgMp4 from '../../assets/ecesoc.mp4';
import bgWebM from '../../assets/ezgif.com-gif-maker.webm';

function HomePage(props) {
  useEffect(() => {
    const description = document.querySelector('.header__brand__description');

    if (description) {
      const letters = description.textContent.split('');
      description.innerHTML = letters
        .map(
          (letter, index) =>
            `<span style="animation-delay: ${index * 0.025}s">${
              letter === ' ' ? '&nbsp;' : letter
            }</span>`,
        )
        .join('');
    }
  }, []);

  return (
    <>
      <main className="homepage">
        <section className="header padding ">
          <video id="bg-video" autoPlay loop muted playsInline>
            {/* <source src={bgWebM} type="video/webm" /> */}
            <source src={bgMp4} type="video/mp4" />
          </video>
          <div className="header__brand " id="tsparticles">
            <h1 className="hidden-title">ECE SOCIETY, BIT MESRA</h1>
            <img src={headerLogoGif} alt="" className="header__brand__icon" />
            <p className="header__brand__description">
              ECE Society, BIT Mesra aims at inculcating an interest in the
              field of Electronics and Communication Engineering for the
              students of BIT Mesra. The society organizes various technical
              workshops and events throughout the session which gives them a
              thorough understanding of the topics and hand-on acquaintance with
              the projects.
            </p>
          </div>
        </section>

        {/* Wrapper for background */}
        <div className="wrapper-top">
          {/* Stats Section */}

          <section className="stats padding">
            <div class="video-container">
              <iframe
                class="video-iframe"
                src="https://www.youtube.com/embed/VCW7Qw7gD64"
                title="TECH-A-THON"
                frameborder="0"
                allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
                allowfullscreen
              ></iframe>
            </div>
            <div className="stats__container">
              <div className="stats__container__item">
                <h2 className="stats__container__item__counter">
                  <Ticker end={1000} duration={1} suffix=" +" />
                </h2>
                <p className="stats__container__item__description">Footfall</p>
              </div>
              <div className="stats__container__border"></div>
              <div className="stats__container__item">
                <h2 className="stats__container__item__counter">
                  <Ticker end={10} duration={1} suffix=" +" />
                </h2>
                <p className="stats__container__item__description">Events</p>
              </div>
            </div>
          </section>

          {/* Services Section */}
          <section className="services padding">
            <h2 className="services__heading">EVENTS & WORKSHOPS</h2>
            <div className="services__container">
              <div className="services__container__item card-hover">
                <div className="services__container__item__illustration">
                  <img
                    src="./gateway.png"
                    alt=""
                    className="services__container__item__illustration__image"
                  />
                </div>
                <div className="services__container__item__description">
                  <h3 className="services__container__item__description__heading">
                    Gateway To Electronics
                  </h3>
                  <p className="services__container__item__description__details">
                    Master circuits, experiment with tech, and unleash your
                    maker spirit! BIT Mesra's ECE Society presents the "Gateway
                    to Electronics Workshop".
                  </p>
                </div>
              </div>
              <div className="services__container__item card-hover">
                <div className="services__container__item__illustration">
                  <img
                    src="./web development.png"
                    alt=""
                    className="services__container__item__illustration__image"
                  />
                </div>
                <div className="services__container__item__description">
                  <h3 className="services__container__item__description__heading">
                    Web Development
                  </h3>
                  <p className="services__container__item__description__details">
                    Perfect for beginners and those looking to enhance their
                    skills, this workshop offers hands-on learning and expert
                    guidance to build dynamic, responsive websites.
                  </p>
                </div>
              </div>
              <div className="services__container__item card-hover">
                <div className="services__container__item__illustration">
                  <img
                    src="./minecraft configuration.png"
                    alt=""
                    className="services__container__item__illustration__image"
                  />
                </div>
                <div className="services__container__item__description">
                  <h3 className="services__container__item__description__heading">
                    How to pursue Career in Electronics
                  </h3>
                  <p className="services__container__item__description__details">
                    A weekend workshop on "How to pursue your career in
                    Electronics.
                  </p>
                </div>
              </div>
              <div className="services__container__item card-hover">
                <div className="services__container__item__illustration">
                  <img
                    src="./techathon.png"
                    alt=""
                    className="services__container__item__illustration__image"
                  />
                </div>
                <div className="services__container__item__description">
                  <h3 className="services__container__item__description__heading">
                    Tech-A-Thon
                  </h3>
                  <p className="services__container__item__description__details">
                    Annual flagship event of ECE Society, BIT Mesra. Tech-A-Thon
                    is a 3 week long multi domain event, having various
                    competitions, workshops and talks.
                  </p>
                </div>
              </div>
              <div className="services__container__item card-hover">
                <div className="services__container__item__illustration">
                  <img
                    src="./electro.png"
                    alt=""
                    className="services__container__item__illustration__image"
                  />
                </div>
                <div className="services__container__item__description">
                  <h3 className="services__container__item__description__heading">
                    Electro Charades
                  </h3>
                  <p className="services__container__item__description__details">
                    This is an electronic spin-off on the game
                    dumb-charades!This event is of 2 rounds. First one will be
                    elimination round and second will be final round.
                  </p>
                </div>
              </div>
              <div className="services__container__item card-hover">
                <div className="services__container__item__illustration">
                  <img
                    src="./quiz.png"
                    alt=""
                    className="services__container__item__illustration__image"
                  />
                </div>
                <div className="services__container__item__description">
                  <h3 className="services__container__item__description__heading">
                    Electro Quiz
                  </h3>
                  <p className="services__container__item__description__details">
                    Electronics themed quiz, which consists of 3 rounds. Mix of
                    technical and non-technical questions to test your knowledge
                    in the field of electronics.
                  </p>
                </div>
              </div>
            </div>
          </section>
        </div>

        {/* Features Section */}
        <section className="features padding">
          <h2 className="features__heading">OUR MENTORS</h2>
          <div className="features__container">
            <div className="features__container__item card-hover">
              <img
                src="./sanjay_sir.jpg"
                alt=""
                className="features__container__item__icon"
              />
              <h3 className="features__container__item__heading">
                Dr Sanjay Kumar
              </h3>
              <p className="features__container__item__details">
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry.
              </p>
            </div>
            <div className="features__container__item card-hover">
              <img
                src="./AFFORDABLE.png"
                alt=""
                className="features__container__item__icon"
              />
              <h3 className="features__container__item__heading">xyz</h3>
              <p className="features__container__item__details">
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry.
              </p>
            </div>
            <div className="features__container__item card-hover">
              <img
                src="./EFFICIENT.png"
                alt=""
                className="features__container__item__icon"
              />
              <h3 className="features__container__item__heading">xyz</h3>
              <p className="features__container__item__details">
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry.
              </p>
            </div>
            <div className="features__container__item card-hover">
              <img
                src="PROFESSIONAL.png"
                alt=""
                className="features__container__item__icon"
              />
              <h3 className="features__container__item__heading">xyz</h3>
              <p className="features__container__item__details">
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry..
              </p>
            </div>
          </div>
        </section>

        {/* Reviews Section */}
        <section className="reviews padding">
          <h2 className="reviews__heading">ALUMNI SPEAKS</h2>

          <div className="reviews__carousel">
            <img src="./btn-prev.png" alt="btn-prev" className="prev" />
            <Swiper
              slidesPerView={1}
              spaceBetween={30}
              slidesPerGroup={1}
              loop={true}
              loopFillGroupWithBlank={true}
              navigation={{
                nextEl: '.next',
                prevEl: '.prev',
              }}
              modules={[Navigation]}
              className="mySwiper"
              breakpoints={{
                // when window width is >= 768px
                768: {
                  slidesPerView: 2,
                },
              }}
            >
              <SwiperSlide>
                <div className="reviews__carousel__item">
                  <div className="reviews__carousel__item__stars">
                    <img
                      src="./star.png"
                      alt=""
                      className="reviews__carousel__item__stars__star"
                    />
                    <img
                      src="./star.png"
                      alt=""
                      className="reviews__carousel__item__stars__star"
                    />
                    <img
                      src="./star.png"
                      alt=""
                      className="reviews__carousel__item__stars__star"
                    />
                    <img
                      src="./star.png"
                      alt=""
                      className="reviews__carousel__item__stars__star"
                    />
                    <img
                      src="./star.png"
                      alt=""
                      className="reviews__carousel__item__stars__star"
                    />
                  </div>
                  <p className="reviews__carousel__item__details">
                    Lorem Ipsum is simply dummy text of the printing and
                    typesetting industry. Lorem Ipsum has been the industry's
                    standard dummy text ever since the 1500s, when an unknown
                    printer took a galley of type and scrambled it to form a
                    great text body.
                  </p>
                  <h2 className="reviews__carousel__item__name">ABC</h2>
                </div>
              </SwiperSlide>
              <SwiperSlide>
                {' '}
                <div className="reviews__carousel__item">
                  <div className="reviews__carousel__item__stars">
                    <img
                      src="./star.png"
                      alt=""
                      className="reviews__carousel__item__stars__star"
                    />
                    <img
                      src="./star.png"
                      alt=""
                      className="reviews__carousel__item__stars__star"
                    />
                    <img
                      src="./star.png"
                      alt=""
                      className="reviews__carousel__item__stars__star"
                    />
                    <img
                      src="./star.png"
                      alt=""
                      className="reviews__carousel__item__stars__star"
                    />
                    <img
                      src="./star.png"
                      alt=""
                      className="reviews__carousel__item__stars__star"
                    />
                  </div>
                  <p className="reviews__carousel__item__details">
                    Lorem Ipsum is simply dummy text of the printing and
                    typesetting industry. Lorem Ipsum has been the industry's
                    standard dummy text ever since the 1500s, when an unknown
                    printer took a galley of type and scrambled it to
                  </p>
                  <h2 className="reviews__carousel__item__name">ABC</h2>
                </div>
              </SwiperSlide>
              <SwiperSlide>
                {' '}
                <div className="reviews__carousel__item">
                  <div className="reviews__carousel__item__stars">
                    <img
                      src="./star.png"
                      alt=""
                      className="reviews__carousel__item__stars__star"
                    />
                    <img
                      src="./star.png"
                      alt=""
                      className="reviews__carousel__item__stars__star"
                    />
                    <img
                      src="./star.png"
                      alt=""
                      className="reviews__carousel__item__stars__star"
                    />
                    <img
                      src="./star.png"
                      alt=""
                      className="reviews__carousel__item__stars__star"
                    />
                    <img
                      src="./star.png"
                      alt=""
                      className="reviews__carousel__item__stars__star"
                    />
                  </div>
                  <p className="reviews__carousel__item__details">
                    Lorem Ipsum is simply dummy text of the printing and
                    typesetting industry. Lorem Ipsum has been the industry's
                    standard dummy text ever since the 1500s, when an unknown
                    printer took a galley of type and scrambled it to
                  </p>
                  <h2 className="reviews__carousel__item__name">ABC</h2>
                </div>
              </SwiperSlide>
              <SwiperSlide>
                {' '}
                <div className="reviews__carousel__item">
                  <div className="reviews__carousel__item__stars">
                    <img
                      src="./star.png"
                      alt=""
                      className="reviews__carousel__item__stars__star"
                    />
                    <img
                      src="./star.png"
                      alt=""
                      className="reviews__carousel__item__stars__star"
                    />
                    <img
                      src="./star.png"
                      alt=""
                      className="reviews__carousel__item__stars__star"
                    />
                    <img
                      src="./star.png"
                      alt=""
                      className="reviews__carousel__item__stars__star"
                    />
                    <img
                      src="./star.png"
                      alt=""
                      className="reviews__carousel__item__stars__star"
                    />
                  </div>
                  <p className="reviews__carousel__item__details">
                    Lorem Ipsum is simply dummy text of the printing and
                    typesetting industry. Lorem Ipsum has been the industry's
                    standard dummy text ever since the 1500s, when an unknown
                    printer took a galley of type and scrambled it to
                  </p>
                  <h2 className="reviews__carousel__item__name">ABC</h2>
                </div>
              </SwiperSlide>
            </Swiper>
            <img src="./btn-next.png" alt="" className="next" />
          </div>
          <a
            href="https://www.instagram.com/ecesociety/"
            target="_blank"
            className="btn btn-primary"
          >
            Follow Us
          </a>
        </section>
      </main>
    </>
  );
}
import './HomePage.scss';
import Ticker from '../../components/Ticker/Ticker';

export default HomePage;

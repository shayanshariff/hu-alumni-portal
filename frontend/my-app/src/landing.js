import { Link } from "react-router-dom";
function Landing() {
  return (
    <>
    
    
  <style
    dangerouslySetInnerHTML={{
      __html:
        " .topbar{background: #5c2568;} .header{background: #854593;} .hero{background: #854593;}"
    }}
  />
  <style
    dangerouslySetInnerHTML={{
      __html: " .hero .icon-box{background: #794086;}"
    }}
  />
  <style
    dangerouslySetInnerHTML={{ __html: " .footer{background: #854593;} " }}
  />
  <style
    dangerouslySetInnerHTML={{
      __html: " .contact .info-container{background: #5c2568;} "
    }}
  />
  <style
    dangerouslySetInnerHTML={{
      __html: " .contact .info-item{background:#854593;} "
    }}
  />

  <header id="header" className="header d-flex align-items-center">
    <div className="container-fluid container-xl d-flex align-items-center justify-content-between">
      <a href="{{url_for('home')}}" className="logo d-flex align-items-center">
        {/* Uncomment the line below if you also wish to use an image logo */}
        {/* <img src="assets/img/logo.png" alt=""> */}
        <h1>
          Habib University: Liberal Arts &amp; Sciences<span>.</span>
        </h1>
      </a>

      <i className="mobile-nav-toggle mobile-nav-show bi bi-list" />
      <i className="mobile-nav-toggle mobile-nav-hide d-none bi bi-x" />
    </div>
  </header>
  {/* End Header */}
  {/* End Header */}
  {/* ======= Hero Section ======= */}
  <section id="hero" className="hero">
    <div className="container position-relative">
      <div className="row gy-5" data-aos="fade-in">
        <div className="col-lg-6 order-2 order-lg-1 d-flex flex-column justify-content-center text-center text-lg-start">
          <h2>
            Welcome to <span>HU Alumni Portal</span>
          </h2>
          <p>Pleases click on get started to login into your account.</p>
          <div className="d-flex justify-content-center justify-content-lg-start">
          <Link to={"/login"}  className="btn-get-started">Get Started</Link>
          </div>
        </div>
        <div className="col-lg-6 order-1 order-lg-2">
          <img
            src="../img/hero-img.svg"
            className="img-fluid"
            alt=""
            data-aos="zoom-out"
            data-aos-delay={100}
          />
        </div>
      </div>
    </div>
    <div className="icon-boxes position-relative">
      <div className="container position-relative">
        <div className="row gy-4 mt-5">
          <div
            className="col-xl-3 col-md-6"
            data-aos="fade-up"
            data-aos-delay={100}
          >
            <div className="icon-box">
              <div className="icon">
                <span
                  data-purecounter-start={0}
                  data-purecounter-end="{{total}}"
                  data-purecounter-duration={1}
                  className="purecounter"
                />
              </div>
              <h4 className="title">
                <p>Active users</p>
              </h4>
            </div>
          </div>
          {/*End Icon Box */}
          <div
            className="col-xl-3 col-md-6"
            data-aos="fade-up"
            data-aos-delay={200}
          >
            <div className="icon-box">
              <div className="icon">
                <span
                  data-purecounter-start={0}
                  data-purecounter-end="{{resolved}}"
                  data-purecounter-duration={1}
                  className="purecounter"
                />
              </div>
              <h4 className="title">
                <p>New Posts</p>
              </h4>
            </div>
          </div>
          {/*End Icon Box */}
          <div
            className="col-xl-3 col-md-6"
            data-aos="fade-up"
            data-aos-delay={300}
          >
            <div className="icon-box">
              <div className="icon">
                <span
                  data-purecounter-start={0}
                  data-purecounter-end="{{pending}}"
                  data-purecounter-duration={1}
                  className="purecounter"
                />
              </div>
              <h4 className="title">
                <p>Total Users</p>
              </h4>
            </div>
          </div>
          {/*End Icon Box */}
        </div>
      </div>
    </div>
  </section>
  {/* End Hero Section */}
  <main id="main">
    {/* ======= Frequently Asked Questions Section ======= */}
    <section id="faq" className="faq">
      <div className="container" data-aos="fade-up">
        <div className="row gy-4">
          <div className="col-lg-4">
            <div className="content px-xl-5">
              <h3>
                Frequently Asked <strong>Questions</strong>
              </h3>
              <p>These are some FAQS you might have.</p>
            </div>
          </div>
          <div className="col-lg-8">
            <div
              className="accordion accordion-flush"
              id="faqlist"
              data-aos="fade-up"
              data-aos-delay={100}
            >
              <div className="accordion-item">
                <h3 className="accordion-header">
                  <button
                    className="accordion-button collapsed"
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#faq-content-1"
                  >
                    <span className="num">1.</span>
                    Does the website have different dashboards for students and
                    alumni?
                  </button>
                </h3>
                <div
                  id="faq-content-1"
                  className="accordion-collapse collapse"
                  data-bs-parent="#faqlist"
                >
                  <div className="accordion-body">
                    Yes and no. Since students have an option to use the student
                    forum, they'll have an extra tab for that. Whereas, the
                    Alumni will only be able to access the Alumni Portal.
                  </div>
                </div>
              </div>
              {/* # Faq item*/}
              <div className="accordion-item">
                <h3 className="accordion-header">
                  <button
                    className="accordion-button collapsed"
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#faq-content-2"
                  >
                    <span className="num">2.</span>
                    Can only Habib Alumni use the portal?
                  </button>
                </h3>
                <div
                  id="faq-content-2"
                  className="accordion-collapse collapse"
                  data-bs-parent="#faqlist"
                >
                  <div className="accordion-body">
                    Only students currently studying at Habib University,
                    students who have graduated and faculty members teaching at
                    Habib University will be able to access the Forum.
                  </div>
                </div>
              </div>
              {/* # Faq item*/}
              <div className="accordion-item">
                <h3 className="accordion-header">
                  <button
                    className="accordion-button collapsed"
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#faq-content-3"
                  >
                    <span className="num">3.</span>
                    How can I post something on the forum?
                  </button>
                </h3>
                <div
                  id="faq-content-3"
                  className="accordion-collapse collapse"
                  data-bs-parent="#faqlist"
                >
                  <div className="accordion-body">
                    To make a new post, just click on the new post button and
                    write your post. You can also add images and videos to your
                    post.
                  </div>
                </div>
              </div>
              {/* # Faq item*/}
              <div className="accordion-item">
                <h3 className="accordion-header">
                  <button
                    className="accordion-button collapsed"
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#faq-content-4"
                  >
                    <span className="num">4.</span>
                    What is the purpose of this portal?
                  </button>
                </h3>
                <div
                  id="faq-content-4"
                  className="accordion-collapse collapse"
                  data-bs-parent="#faqlist"
                >
                  <div className="accordion-body">
                    This portal is used to connnect students with Alumni.
                  </div>
                </div>
              </div>
              {/* # Faq item*/}
              <div className="accordion-item">
                <h3 className="accordion-header">
                  <button
                    className="accordion-button collapsed"
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#faq-content-5"
                  >
                    <span className="num">5.</span>
                    Can a student log in as an admin?
                  </button>
                </h3>
                <div
                  id="faq-content-5"
                  className="accordion-collapse collapse"
                  data-bs-parent="#faqlist"
                >
                  <div className="accordion-body">
                    No, only an admin can do that since they'd have a specific
                    email and a password that only they would know.
                  </div>
                </div>
              </div>
              {/* # Faq item*/}
            </div>
          </div>
        </div>
      </div>
    </section>
    {/* End Frequently Asked Questions Section */}
    {/* ======= Contact Section ======= */}
    <section id="contact" className="contact">
      <div className="container" data-aos="fade-up">
        <div className="section-header">
          <h2>Contact</h2>
          <p>To contact Habib University, use the given methods below</p>
        </div>
        <style
          dangerouslySetInnerHTML={{ __html: " .col-lg-4{margin:auto;} " }}
        />
        <style
          dangerouslySetInnerHTML={{
            __html:
              " .contact .info-container{border-top-right-radius: 10px; border-bottom-right-radius: 10px;} "
          }}
        />
        <div className="row gx-lg-0 gy-4">
          <div className="col-lg-4">
            <div className="info-container d-flex flex-column align-items-center justify-content-center">
              <div className="info-item d-flex">
                <i className="bi bi-geo-alt flex-shrink-0" />
                <div>
                  <h4>Location:</h4>
                  <p>
                    Habib University, Block 18, Gulistan-e-Jauhar, University
                    Avenue، Off Shahrah-e-Faisal Rd, Karachi - 75290, Sindh,
                    Pakistan
                  </p>
                </div>
              </div>
              {/* End Info Item */}
              <div className="info-item d-flex">
                <i className="bi bi-envelope flex-shrink-0" />
                <div>
                  <h4>Email:</h4>
                  <p>alumni.portal@habib.edu.pk</p>
                </div>
              </div>
              {/* End Info Item */}
              <div className="info-item d-flex">
                <i className="bi bi-phone flex-shrink-0" />
                <div>
                  <h4>Call:</h4>
                  <p>+92 21 1110 42242 (HABIB)</p>
                </div>
              </div>
              {/* End Info Item */}
              <div className="info-item d-flex">
                <i className="bi bi-clock flex-shrink-0" />
                <div>
                  <h4>Open Hours:</h4>
                  <p>Mon-Fri: 9AM - 5PM</p>
                </div>
              </div>
              {/* End Info Item */}
            </div>
          </div>
        </div>
      </div>
    </section>
    {/* End Contact Section */}
  </main>
  {/* End #main */}
  {/* ======= Footer ======= */}
  <footer id="footer" className="footer">
    <div className="container">
      <div className="row gy-4">
        <div className="col-lg-5 col-md-12 footer-info">
          <a
            href="{{url_for('home')}}"
            className="logo d-flex align-items-center"
          >
            <span>HU Alumni Portal</span>
          </a>
          <p>This is a prototype website only.</p>
          <div className="social-links d-flex mt-4">
            <a href="https://twitter.com/habibuniversity" className="twitter">
              <i className="bi bi-twitter" />
            </a>
            <a
              href="https://www.facebook.com/HabibUniversity"
              className="facebook"
            >
              <i className="bi bi-facebook" />
            </a>
            <a
              href="https://instagram.com/habibuniversity"
              className="instagram"
            >
              <i className="bi bi-instagram" />
            </a>
            <a
              href="https://www.linkedin.com/company/habib-university/"
              className="linkedin"
            >
              <i className="bi bi-linkedin" />
            </a>
          </div>
        </div>
        <div className="col-lg-2 col-6 footer-links">
          <h4>Useful Links</h4>
          <ul>
            <li>
              <a href="#hero">Home</a>
            </li>
            <li>
              <a href="#faq">FAQ</a>
            </li>
            <li>
              <a href="#contact">Contact Us</a>
            </li>
            <li>
              <a href="https://habib.edu.pk/">Habib University</a>
            </li>
          </ul>
        </div>
        <div className="col-lg-2 col-6 footer-links">
          <h4>Services</h4>
          <ul>
            <li>
              <a href="/#">Student Profile</a>
            </li>
            <li>
              <a href="/#">Alumni Profile</a>
            </li>
            <li>
              <a href="/#">Student Forum</a>
            </li>
            <li>
              <a href="/#">Alumni Forum</a>
            </li>
          </ul>
        </div>
        <div className="col-lg-3 col-md-12 footer-contact text-center text-md-start">
          <h4>Contact Us</h4>
          <p>
            Habib University <br />
            Block 18, Gulistan-e-Jauhar
            <br />
            University Avenue
            <br />
            Karachi, Sindh, Pakistan <br />
            <br />
            <strong>Phone:</strong> +92 21 1110 42242 (HABIB)
            <br />
            <strong>Email:</strong> alumni.portal@habib.edu.pk
            <br />
          </p>
        </div>
      </div>
    </div>
  </footer>
 
</>
  );
}

export default Landing;
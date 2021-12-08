import React from "react";
import "../Footer/Footer.css";
const Footer = () => {
  return (
    <footer className="site-footer    ">
      <div className="container">
        <div className="row">
          <div className="col-sm-12 col-md-6">
            <h6>About</h6>
            <p className="text-justify">
              Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet consectetur
              adipisicing elit. Numquam, voluptatum perferendis non, magni
              temporibus iusto voluptates doloribus exercitationem fugit esse
              quis ullam recusandae aspernatur suscipit eum, eligendi expedita
              amet qui? Obcaecati accusantium magnam libero laudantium ex at,
              aliquid amet tempore neque esse ea facere doloremque assumenda
              veritatis iure corrupti tenetur natus ipsa voluptas quibusdam
              repellendus quod excepturi atque. Minus magnam ipsam in, laborum
              quae assumenda dolores, ullam maiores neque architecto repudiandae
              velit quod, deleniti rerum voluptas repellat dignissimos ipsum
              exercitationem!
            </p>
          </div>

          <div className="col-xs-6 col-md-3">
            <h6>Categories</h6>
            <ul className="footer-links">
              <li>
                <a href="#">Home</a>
              </li>

              <li>
                <a href="#">Service</a>
              </li>
              <li>
                <a href="#">Item</a>
              </li>
              <li>
                <a href="#">UI Design</a>
              </li>
              <li>
                <a href="#">Templates</a>
              </li>
            </ul>
          </div>

          <div className="col-xs-6 col-md-3">
            <h6>Quick Links</h6>
            <ul className="footer-links">
              <li>
                <a href="#">About Us</a>
              </li>
              <li>
                <a href="#">Contact Us</a>
              </li>
              <li>
                <a href="#">Contribute</a>
              </li>
              <li>
                <a href="#">Privacy Policy</a>
              </li>
              <li>
                <a href="#">Sitemap</a>
              </li>
            </ul>
          </div>
        </div>
      </div>
      <div className="container">
        <div className="row">
          <div className="col-md-8 col-sm-6 col-xs-12">
            <p className="copyright-text">
              Copyright &copy; 2021 All Rights Reserved by
              <a href="#">
                {" "}
                <span className="text-primary">Mahmudul Hasan</span>
              </a>
              .
            </p>
          </div>

          <div className="col-md-4 col-sm-6 col-xs-12">
            <ul className="social-icons">
              <li>
                <a className="facebook" href="#">
                  <i className="fa fa-facebook"></i>
                </a>
              </li>
              <li>
                <a className="twitter" href="#">
                  <i className="fa fa-twitter"></i>
                </a>
              </li>
              <li>
                <a className="dribbble" href="#">
                  <i className="fa fa-dribbble"></i>
                </a>
              </li>
              <li>
                <a className="linkedin" href="#">
                  <i className="fa fa-linkedin"></i>
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
//   https://www.devwares.com/docs/contrast/react/components/footer
//https://www.bootstrapdash.com/bootstrap-footer-examples/

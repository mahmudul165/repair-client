import React from "react";
import "../Footer/Footer.css";
const Footer = () => {
  return (
    <footer class="site-footer">
      <div class="container">
        <div class="row">
          <div class="col-sm-12 col-md-6">
            <h6>About</h6>
            <p class="text-justify">
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

          <div class="col-xs-6 col-md-3">
            <h6>Categories</h6>
            <ul class="footer-links">
              <li>
                <a href="#">Food</a>
              </li>

              <li>
                <a href="#">Ingredient</a>
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

          <div class="col-xs-6 col-md-3">
            <h6>Quick Links</h6>
            <ul class="footer-links">
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
      <div class="container">
        <div class="row">
          <div class="col-md-8 col-sm-6 col-xs-12">
            <p class="copyright-text">
              Copyright &copy; 2021 All Rights Reserved by
              <a href="#">
                {" "}
                <span className="text-primary">Mahmudul Hasan</span>
              </a>
              .
            </p>
          </div>

          <div class="col-md-4 col-sm-6 col-xs-12">
            <ul class="social-icons">
              <li>
                <a class="facebook" href="#">
                  <i class="fa fa-facebook"></i>
                </a>
              </li>
              <li>
                <a class="twitter" href="#">
                  <i class="fa fa-twitter"></i>
                </a>
              </li>
              <li>
                <a class="dribbble" href="#">
                  <i class="fa fa-dribbble"></i>
                </a>
              </li>
              <li>
                <a class="linkedin" href="#">
                  <i class="fa fa-linkedin"></i>
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

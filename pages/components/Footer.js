import { Container } from "@mui/material";
import Image from "next/image";
import React from "react";
import Styles from "../../styles/Footer.module.css";

const Footer = () => {
  return (
    <>
      <footer>
        <div className={Styles.footer_area}>
          <div className={Styles.footer_div}>
            <Container fixed>
              {/* <div className={Styles.footer_div_all}>
              <div className={Styles.footer_div_one}>
                <Image
                  loader={() => image}
                  unoptimized={true}
                  alt="Image"
                  width={80}
                  height={40}
                  priority
                  src="https://cdn.pixabay.com/photo/2016/12/26/18/33/logo-1932539__340.png"
                />

                <p>
                  more recently with desktop publishing software like versions
                </p>
                <p>4188 North Street</p>
                <p>Eastern Standard Time (EST)</p>
              </div>
              <div>
                <h6>Support</h6>
                <p>Pricing</p>
                <p>Documentation</p>
                <p>Sitemap</p>
                <p>Documentation</p>
                <p>Documentation</p>
              </div>
              <div>
                <h6>Company</h6>
                <p>About Us</p>
                <p>Partners</p>
                <p>Testomonials</p>
                <p>Portfolio</p>
              </div>
              <div>
                <h6>Company</h6>
                <p>About Us</p>
                <p>Partners</p>
                <p>Testomonials</p>
                <p>Portfolio</p>
              </div>
              <div>
                <h6>Subscribe To Our Newsletter</h6>
                <p>
                  more recently with desktop publishing <br />
                  like Aldus PageMaker including
                </p>
                <div>
                  <input type="email" placeholder="Enter Your Mail" />
                  <button>Subscribe</button>
                </div>
              </div>
            </div> */}
              <div className={Styles.footer_div_two}>
                <div>@2021 Crimson, Inc All rights reserved</div>
                <div>
                  <svg
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M18 2H15C13.6739 2 12.4021 2.52678 11.4645 3.46447C10.5268 4.40215 10 5.67392 10 7V10H7V14H10V22H14V14H17L18 10H14V7C14 6.73478 14.1054 6.48043 14.2929 6.29289C14.4804 6.10536 14.7348 6 15 6H18V2Z"
                      stroke="white"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                  <svg
                    width="20"
                    height="22"
                    viewBox="0 0 20 22"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M14 10V6M19 1H1V17H6V21L10 17H15L19 13V1ZM9 10V6V10Z"
                      stroke="white"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                  <svg
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M16 8C17.5913 8 19.1174 8.63214 20.2426 9.75736C21.3679 10.8826 22 12.4087 22 14V21H18V14C18 13.4696 17.7893 12.9609 17.4142 12.5858C17.0391 12.2107 16.5304 12 16 12C15.4696 12 14.9609 12.2107 14.5858 12.5858C14.2107 12.9609 14 13.4696 14 14V21H10V14C10 12.4087 10.6321 10.8826 11.7574 9.75736C12.8826 8.63214 14.4087 8 16 8V8Z"
                      stroke="white"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                    <path
                      d="M6 9H2V21H6V9Z"
                      stroke="white"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                    <path
                      d="M4 6C5.10457 6 6 5.10457 6 4C6 2.89543 5.10457 2 4 2C2.89543 2 2 2.89543 2 4C2 5.10457 2.89543 6 4 6Z"
                      stroke="white"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                  <svg
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M16 21.9999V18.1299C16.0375 17.6531 15.9731 17.1737 15.811 16.7237C15.6489 16.2737 15.3929 15.8634 15.06 15.5199C18.2 15.1699 21.5 13.9799 21.5 8.51994C21.4997 7.12376 20.9627 5.78114 20 4.76994C20.4559 3.54844 20.4236 2.19829 19.91 0.999938C19.91 0.999938 18.73 0.649938 16 2.47994C13.708 1.85876 11.292 1.85876 9 2.47994C6.27 0.649938 5.09 0.999938 5.09 0.999938C4.57638 2.19829 4.54414 3.54844 5 4.76994C4.03013 5.78864 3.49252 7.1434 3.5 8.54994C3.5 13.9699 6.8 15.1599 9.94 15.5499C9.611 15.8899 9.35726 16.2953 9.19531 16.7399C9.03335 17.1844 8.96681 17.658 9 18.1299V21.9999M9 18.9999C4 20.4999 4 16.4999 2 15.9999L9 18.9999Z"
                      stroke="white"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </div>
              </div>
            </Container>
          </div>

          {/* <div className="footer-area-two">
          <div className="footer-two">
            <div>
              <img src="./Image/Group 62.png" alt="" />
              <p>
                more recently with desktop <br />
                publishing software like versions
              </p>
              <p>4188 North Street</p>
              <p>Eastern Standard Time (EST)</p>
            </div>
            <div>
              <svg
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M18 2H15C13.6739 2 12.4021 2.52678 11.4645 3.46447C10.5268 4.40215 10 5.67392 10 7V10H7V14H10V22H14V14H17L18 10H14V7C14 6.73478 14.1054 6.48043 14.2929 6.29289C14.4804 6.10536 14.7348 6 15 6H18V2Z"
                  stroke="white"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
              </svg>
              <svg
                width="20"
                height="22"
                viewBox="0 0 20 22"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M14 10V6M19 1H1V17H6V21L10 17H15L19 13V1ZM9 10V6V10Z"
                  stroke="white"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
              </svg>
              <svg
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M16 8C17.5913 8 19.1174 8.63214 20.2426 9.75736C21.3679 10.8826 22 12.4087 22 14V21H18V14C18 13.4696 17.7893 12.9609 17.4142 12.5858C17.0391 12.2107 16.5304 12 16 12C15.4696 12 14.9609 12.2107 14.5858 12.5858C14.2107 12.9609 14 13.4696 14 14V21H10V14C10 12.4087 10.6321 10.8826 11.7574 9.75736C12.8826 8.63214 14.4087 8 16 8V8Z"
                  stroke="white"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
                <path
                  d="M6 9H2V21H6V9Z"
                  stroke="white"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
                <path
                  d="M4 6C5.10457 6 6 5.10457 6 4C6 2.89543 5.10457 2 4 2C2.89543 2 2 2.89543 2 4C2 5.10457 2.89543 6 4 6Z"
                  stroke="white"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
              </svg>
              <svg
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M16 21.9999V18.1299C16.0375 17.6531 15.9731 17.1737 15.811 16.7237C15.6489 16.2737 15.3929 15.8634 15.06 15.5199C18.2 15.1699 21.5 13.9799 21.5 8.51994C21.4997 7.12376 20.9627 5.78114 20 4.76994C20.4559 3.54844 20.4236 2.19829 19.91 0.999938C19.91 0.999938 18.73 0.649938 16 2.47994C13.708 1.85876 11.292 1.85876 9 2.47994C6.27 0.649938 5.09 0.999938 5.09 0.999938C4.57638 2.19829 4.54414 3.54844 5 4.76994C4.03013 5.78864 3.49252 7.1434 3.5 8.54994C3.5 13.9699 6.8 15.1599 9.94 15.5499C9.611 15.8899 9.35726 16.2953 9.19531 16.7399C9.03335 17.1844 8.96681 17.658 9 18.1299V21.9999M9 18.9999C4 20.4999 4 16.4999 2 15.9999L9 18.9999Z"
                  stroke="white"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
              </svg>
            </div>
            <div className="footer-three-div">
              <div>
                <h6>Support</h6>
                <p>Pricing</p>
                <p>Documentation</p>
                <p>Sitemap</p>
                <p>Documentation</p>
                <p>Documentation</p>
              </div>
              <div>
                <h6>Company</h6>
                <p>About Us</p>
                <p>Partners</p>
                <p>Testomonials</p>
                <p>Portfolio</p>
              </div>
              <div>
                <h6>Company</h6>
                <p>About Us</p>
                <p>Partners</p>
                <p>Testomonials</p>
                <p>Portfolio</p>
              </div>
            </div>
            <div>
              <h5>Subscribe To Our Newsletter</h5>
              <p>
                more recently with desktop publishing <br />
                like Aldus PageMaker including
              </p>
              <div className="text-center">
                <input
                  type="email"
                  name=""
                  id=""
                  placeholder="Enter Your Mail"
                />
                <br />
                <button>Subscribe</button>
              </div>
            </div>
            <div className="footer-end-text">
              @2021 Crimson, Inc All rights reserved
            </div>
          </div>
        </div> */}
        </div>
      </footer>
    </>
  );
};

export default Footer;

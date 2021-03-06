import React from 'react';
import contact from '../../images/contact.png'

const Contact = () => {
   return (
      <div className="contact">
         <div className="contact-bg">
            <div className="container-fluid px-0">
               <div className="row justify-content-center align-items-center">
                  <div className="col-lg-6 mb-5 mb-lg-0">
                     <img className="img-fluid" src={contact} alt="" />
                  </div>
                  <div className="col-lg-6">
                     <div className="contact-box">
                        <div className="px-lg-3">
                           <div className="header-text">
                              <h3>Get In Touch</h3>
                              <p>Feel free to contact us.</p>
                           </div>
                           <form action="">
                              <div className="form-group">
                                 <input type="text" className="form-control" placeholder="Name" />
                              </div>
                              <div className="form-group">
                                 <input type="email" className="form-control" placeholder="Email" />
                              </div>
                              <div className="form-group">
                                 <textarea className="form-control" cols="30" rows="3" placeholder="Describe"></textarea>
                              </div>
                              <div className="form-group mb-0">
                                 <button className="submit-btn">SEND</button>
                              </div>
                           </form>
                        </div>
                     </div>
                  </div>
               </div>
            </div>
         </div>
      </div>
   );
};

export default Contact;
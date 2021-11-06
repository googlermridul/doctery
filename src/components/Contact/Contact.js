import React from 'react';
import contact from '../../images/contact.png'

const Contact = () => {
   return (
      <div className="contact">
         <div className="contact-bg">
            <div className="container-fluid px-0">
               <div className="row justify-content-center align-items-center">
                  <div className="col-lg-6 mb-5 mb-md-0">
                     <img className="img-fluid" src={contact} alt="" />
                  </div>
                  <div className="col-lg-6">
                     <div className="text-box">
                        <h2>Get In Touch</h2>
                        <p>Nulla lacinia sapien a diam ullamcorper, sed congue leo vulputate.</p>
                        <form action="">
                           <div className="form-group">
                              {/* <label htmlFor="">Name</label> */}
                              <input type="text" className="form-control" placeholder="Name" />
                           </div>
                           <div className="form-group">
                              {/* <label htmlFor="">Email</label> */}
                              <input type="email" className="form-control" placeholder="Email" />
                           </div>
                           <div className="form-group">
                              {/* <label htmlFor="">Message</label> */}
                              <textarea className="form-control" cols="30" rows="3" placeholder="Content"></textarea>
                           </div>
                           <div className="form-group mb-0">
                              {/* <input className="submit-btn" type="button" value="Send" /> */}
                              <button className="submit-btn">SEND</button>
                           </div>
                        </form>
                     </div>
                  </div>
               </div>
            </div>
         </div>
      </div>
   );
};

export default Contact;
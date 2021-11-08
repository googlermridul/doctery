import React from 'react';
import contact from '../../images/contact.png'

const Appointment = () => {
   return (
      <div className="contact appointment">
         <div className="contact-bg appointment-bg">
            <div className="container-fluid px-0">
               <div className="row justify-content-center align-items-center">
                  <div className="col-lg-6 mb-5 mb-lg-0">
                     <img className="img-fluid" src={contact} alt="" />
                  </div>
                  <div className="col-lg-6">
                     <div className="contact-box">
                        <div className="px-lg-3">
                           <div className="header-text">   
                              <h2>Make An Appointment</h2>
                              <p>Make An Appointment For Emergency.</p>
                           </div>
                           <form action="">
                              <div className="row">
                                 <div className="col form-group">
                                    <input type="text" className="form-control" placeholder="Name" />
                                 </div>
                                 <div className="col form-group">
                                    <input type="number" className="form-control" placeholder="Phone" />
                                 </div>
                              </div>
                              <div className="row">
                                 <div className="col form-group">
                                    <input type="date" className="form-control" placeholder="Date" />
                                 </div>
                                 <div className="col form-group">
                                    <input type="time" className="form-control" placeholder="Time" />
                                 </div>
                              </div>
                              <div className="row">
                                 <div className="col form-group">
                                    <select className="form-select" placeholder="Department">
                                       <option value="1">Select Department</option>
                                       <option value="2">Cardiology</option>
                                       <option value="3">Urology</option>
                                       <option value="4">Neurology</option>
                                    </select>
                                 </div>
                                 <div className="col form-group">
                                    <select className="form-select" placeholder="Doctors">
                                       <option value="1">Select Doctors</option>
                                       <option value="2">Quazi Tarikul Islam</option>
                                       <option value="3">Lutfor Rahman</option>
                                       <option value="4">Syed Atiqul Haq</option>
                                    </select>
                                 </div>
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

export default Appointment;
import React from 'react';
import bgImg from './../../assets/img2.jpg';
const Admin = () => {

    function handleSubmit(e) {
        
    }

  return (
      <section>
            <div className="register">
                <div className="col-1">
                    <h2> Admin&nbsp;Sign&nbsp;In</h2>
                    <span>Blockchain&nbsp;in&nbsp;Action</span>

                    <form id='form' className='flex flex-col'>
                        <input id='uname' type='text' placeholder="Username"/>
                        <input id='pword' type='password' placeholder="Password"/>

                        <button className="btn" onClick={handleSubmit}>Sign In</button>
                    </form>
                </div>
                <div className="col-2">
                    <img src={bgImg} alt="" />
                </div>

            </div>
        </section>
  )
}
export default Admin;
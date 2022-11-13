import React from 'react';
import bgImg from './../../assets/img2.jpg';
const User = () => {
    return (
        <div className="register">
                <div className="col-1">
                    <h2> User&nbsp;Sign&nbsp;In</h2>
                    <span>Blockchain&nbsp;in&nbsp;Action</span>

                    <form id='form' className='flex flex-col'>
                        <input type='text' placeholder="Username"/>
                        <input type='password' placeholder="Password"/>

                        <button className="btn">Sign In</button>
                    </form>
                </div>
                <div className="col-2">
                    <img src={bgImg} alt="" />
                </div>

            </div>
    )
}

export default User;
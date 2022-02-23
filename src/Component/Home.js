import React from 'react'
import { Link } from 'react-router-dom'
import imagemy from './../assets/hero-carousel-3.svg'
import randomuser from './../assets/icons8-find-user-male-50.png'
import meme from './../assets/icons8-happy-50.png'
import passwordimg from './../assets/icons8-no-key-50.png'


const Home = () => {
    return (
        <>




            <div className='d-flex flex-wrap px-5'>
                <div className=" text-center mx-auto my-auto  mw-50">
                    <h1 className='mytext mt-4 text-primary' >Welcome to Online Utility</h1>
                    <h4 className='fmb'>We provide you one click utility  </h4>

                </div>
                <div className=" m-auto px-4 py-5  mw-50 mh-25">
                    <img id='Homepageimg' src={imagemy} alt="" />
                </div>
            </div>



            <div id="featured-services" className="featured-services">
                <div className="container ">

                    <div className="row gy-4 ">

                        <div className="col-xl-3 col-md-6 d-flex" data-aos="zoom-out">
                            <div className="service-item position-relative">
                                <div className="icon"><img className='allicons' src={passwordimg} alt="" /></div>
                                <h4><Link to="/passwordgenerator" className="stretched-link">Password Generator</Link></h4>
                                <p>You can Generate Strong password</p>
                            </div>
                        </div>

                        <div className="col-xl-3 col-md-6 d-flex" data-aos="zoom-out" data-aos-delay="200">
                            <div className="service-item position-relative">
                                <div className="icon"><img className='allicons' src={meme} alt="" /></div>
                                <h4><Link to="/meme" className="stretched-link">Mems</Link></h4>
                                <p>Everytime you will get new meme with image</p>
                            </div>
                        </div>

                        <div className="col-xl-3 col-md-6 d-flex" data-aos="zoom-out" data-aos-delay="400">
                            <div className="service-item position-relative">
                                <div className="icon"><img src={randomuser} className='allicons' alt="" /></div>
                                <h4><Link to="/randomuser" className="stretched-link">Random user</Link></h4>
                                <p>You can generate random user details</p>
                            </div>
                        </div>


                    </div>

                </div>

            </div>

        </>
    )
}

export default Home
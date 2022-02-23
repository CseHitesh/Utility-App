import React, { useState } from 'react'

const PasswordGen = () => {
    const [pslength, setpslength] = useState(8)
    const [genpascode, setgenpasscode] = useState('');
    const [upChacked, setupChecked] = useState(false);
    const [chrChacked, setchrChecked] = useState(false);
    const [numChacked, setnumChecked] = useState(false);
    const [clipstatus, setclipstatus] = useState(false);


    //generating password 

    const genpassword = async () => {

        const password = await fetch(`${process.env.REACT_APP_GEN_PASSWORD_API}?${numChacked ? "num=true" : ''}&${chrChacked ? "char=true" : ''}&${upChacked ? "caps=true" : ''}&len=${pslength}`)

        const jsondata = await password.json();
    

        setgenpasscode(jsondata.data)
    }

    const copytoclipboard = () => {
        navigator.clipboard.writeText(genpascode);
        setclipstatus(true)

    }

    return (
        <>


            {clipstatus ?
                <div className="alert alert-success" role="alert">
                    password copied to clipboard
                    <button className='text-success bg-transparent float-right' onClick={() => { setclipstatus(false) }}>x</button>
                </div>



                : ''

            }

            <div className=" container  pt-5 mt-5">


                <div className="row my-2">
                    <div className="col-12 text-center">
                        <h1 className='font-mobile'> Generate a secure password</h1>

                    </div>

                </div>
                <div className="row  text-center">


                    <div className='mx-auto col-12'>



                        <input type="text" value={genpascode} className='mx-auto col-6' />

                        <button onClick={copytoclipboard}>copy password</button>
                    </div>




                </div>
                <div className="row ">
                    <div className="col-12 text-center my-2">

                        <h3 className='font-mobile'>Customize your password</h3>

                    </div>
                </div>
                <div className="row ">
                    <div className="col-6 ">
                        <h4 className='d-inline my-auto fmb'>Password length</h4>

                        <select name="" id="" value={pslength} onChange={e => setpslength(e.target.value)}>
                            <option value="8" default>8</option>
                            <option value="16">16</option>
                            <option value="32">32</option>
                            <option value="64">62</option>
                        </select>

                    </div>
                    <div className="col-6 ">

                        <div className='mx-auto '>




                            <div className="form-check">
                                <input className="form-check-input"

                                    checked={chrChacked}
                                    onChange={(e) => {
                                        setchrChecked(e.target.checked)
                                    }}
                                    type="checkbox" value="" id="flexCheckChecked" />
                                <label className="form-check-label" htmlFor="flexCheckChecked">
                                    Charcters
                                </label>
                            </div>




                            <div className="form-check">
                                <input className="form-check-input"

                                    checked={upChacked}
                                    onChange={(e) => {
                                        setupChecked(e.target.checked)
                                    }}
                                    type="checkbox" value="" id="flexCheckChecked" />
                                <label className="form-check-label" htmlFor="flexCheckChecked">
                                    Uppercase
                                </label>
                            </div>



                            <div className="form-check">
                                <input className="form-check-input"

                                    checked={numChacked}
                                    onChange={(e) => {
                                        setnumChecked(e.target.checked)
                                    }}
                                    type="checkbox" value="" id="flexCheckChecked" />
                                <label className="form-check-label" htmlFor="flexCheckChecked">
                                    Numbers
                                </label>
                            </div>












                        </div>

                    </div>

                </div>


                <div className="row ">
                    <button className='mx-auto bg-primary text-white rounded-2 border mt-3 px-3 py-2' onClick={genpassword}>Generate password</button>
                </div>
            </div>

        </>
    )
}

export default PasswordGen
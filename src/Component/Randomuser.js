import React, { useEffect, useState } from "react";

const Randomuser = () => {
    const [randomuser, setrandomuser] = useState({
        results: [
            {
                gender: "",
                name: { title: "", first: "", last: "" },
                location: {
                    street: { number: '', name: "" },
                    city: "",
                    state: "",
                    country: "",
                    postcode: '',
                    coordinates: { latitude: "", longitude: "" },
                    timezone: {
                        offset: "",
                        description: "",
                    },
                },
                email: "",
                login: {
                    uuid: "",
                    username: "",
                    password: "",
                    salt: "",
                    md5: "",
                    sha1: "",
                    sha256:
                        "",
                },
                dob: { date: "", age: '' },
                registered: { date: "", age: '' },
                phone: "",
                cell: "",
                id: { name: "", value: "" },
                picture: {
                    large: "",
                    medium: "",
                    thumbnail: "",
                },

            },
        ],

    });

    const myrs = randomuser.results[0];


    //generating random user details
    const genUser = async () => {

        const randomuserformapi = await fetch(process.env.REACT_APP_RANDOMUSER_API);

        const jsondata = await randomuserformapi.json();



        setrandomuser(jsondata);

    };

    useEffect(() => {
        genUser()

    }, []);

    return (
        <>


            <div className="container">
                <div className="text-center border pb-3 ">
                    <img
                        className="rounded-circle border-dark outline-primary border border-primary my-3 "
                        src={myrs.picture.large}
                        alt="my image"
                    />
                    <div className="d-flex flex-column   my-3 m-auto">

                        <button className="w-25  bg-primary text-white m-auto" onClick={genUser}>new user</button>

                    </div>
                </div>

                <table className="table table-striped ">
                    <thead>
                        <tr>
                            <th scope="col">#</th>
                            <th scope="col">Field</th>
                            <th scope="col">Value</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <th scope="row" >1</th>
                            <td>Firstname</td>
                            <td>{myrs.name.first}</td>
                        </tr>
                        <tr>
                            <th scope="row">2</th>
                            <td>Lastname</td>
                            <td>{myrs.name.last}</td>
                        </tr>
                        <tr>
                            <th scope="row">3</th>
                            <td>Dob</td>
                            <td> {myrs.dob.date.slice(0, 10)}</td>
                        </tr>


                        <tr>
                            <th scope="row">4</th>
                            <td>age</td>
                            <td> {myrs.dob.age}</td>
                        </tr>
                        <tr>
                            <th scope="row">5</th>
                            <td>Street</td>
                            <td> {myrs.location.street.number + '\t' + myrs.location.street.name}</td>
                        </tr>
                        <tr>
                            <th scope="row">6</th>
                            <td>city</td>
                            <td> {myrs.location.city}</td>
                        </tr>
                        <tr>
                            <th scope="row">7</th>
                            <td>state</td>
                            <td> {myrs.location.state}</td>
                        </tr>
                        <tr>
                            <th scope="row">8</th>
                            <td>country</td>
                            <td> {myrs.location.country}</td>
                        </tr>
                        <tr>
                            <th scope="row">9</th>
                            <td>postcode</td>
                            <td> {myrs.location.postcode}</td>
                        </tr>
                        <tr>
                            <th scope="row">10</th>
                            <td>email</td>
                            <td> {myrs.email}</td>
                        </tr>
                        <tr>
                            <th scope="row">11</th>
                            <td>username</td>
                            <td> {myrs.login.username}</td>
                        </tr>

                        <tr>
                            <th scope="row">12</th>
                            <td>password</td>
                            <td> {myrs.login.password}</td>
                        </tr>
                        <tr>
                            <th scope="row">13</th>
                            <td>phone</td>
                            <td> {myrs.phone}</td>
                        </tr>

                    </tbody>
                </table>
            </div>
        </>
    );
};

export default Randomuser;

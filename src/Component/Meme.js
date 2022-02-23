import React, { useEffect, useState } from "react";


const Meme = () => {
    const [meme, setmeme] = useState({
        url: "",
    });
    const getmeme = async () => {
        const respone = await fetch(`${process.env.REACT_APP_MEME_API}`);


        const parsedData = await respone.json();
        const url = parsedData;
        setmeme(url);
    };

    useEffect(() => {
        getmeme();
    }, []);

    return (
        <div className="container d-flex flex-column mt-5   ">
            <img
                id="myimg"
                className=""
                src={meme.url}
                alt=""
            />

            <button
                onClick={getmeme}
                className="mx-auto my-2 bg-primary border rounded px-4 py-2 text-white"
            >
                New meme
            </button>


        </div>
    );
};

export default Meme;

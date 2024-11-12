import React, { useEffect, useState } from "react";
import Cards from '../component/cards';
import axios from "axios";
import { Link } from "react-router-dom";
//import listdata from '../assets/data/listdata.json';

function Courselist() {
  const [book, setBook] = useState([]);
  
  useEffect(() => {
    const getBook = async () => {
      try {
        const res = await axios.get("https://back-p5iq.onrender.com/book");
        console.log(res.data);
        setBook(res.data);
      } catch (error) {
        console.log(error);
      }
    };
    getBook();
  }, []);

  return (
    <>
      <div className="max-w-screen-2xl container mx-auto md:px-20 px-4">
        <div className="mt-28 items-center justify-center text-center">
          <h1 className="text-2xl md:text-4xl">
            We're delighted to have you{" "}
            <span className="text-purple-500"> Here! :)</span>
          </h1>
          <p className="mt-12">
           Whether you're an avid reader or just starting your reading journey, we have something for everyone. From insightful free books to premium paid options, our collection is designed to help you expand your knowledge, enhance your skills, and fuel your curiosity.
          </p>
          <Link to="/">
            <button className="mt-6 bg-purple-500 text-white px-4 py-2 rounded-md hover:bg-pink-700 duration-300">
              Back
            </button>
          </Link>
        </div>
        <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-40">
          {book.map((item) => (
            <Cards key={item.id} item={item} />
          ))}
        </div>
      </div>
    </>
  );
}

export default Courselist;

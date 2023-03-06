import React, { useState, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { Link } from "react-router-dom";
import { BsYoutube, BsSearch } from "react-icons/bs";

export default function Header() {
  const navigate = useNavigate();
  const { keyword } = useParams();
  const [inpText, setInpText] = useState("");

  const handleChange = e => {
    setInpText(e.target.value);
  };

  const handleSubmit = e => {
    e.preventDefault();
    navigate(`/videos/${inpText}`);
  };

  useEffect(() => setInpText(keyword || ""), [keyword]);

  return (
    <header
      id="header"
      className="w-full flex items-center p-4 text-2xl border-b border-zinc-600 mb-4"
    >
      <h1 className="header_logo">
        <Link to="/" className="flex items-center">
          <BsYoutube className="text-4xl text-brand" />
          <span className="font-bold ml-2 text-3xl">Youtube</span>
        </Link>
      </h1>
      <div className="header_search w-full">
        <form onSubmit={handleSubmit} className="w-full flex justify-center">
          <input
            type="text"
            value={inpText}
            placeholder="Search"
            onChange={handleChange}
            className="w-7/12 p-2 pl-5 outline-none bg-black text-gray-500"
          />
          <button type="submit" className="bg-zinc-600 px-4" title="Search">
            <BsSearch />
          </button>
        </form>
      </div>
    </header>
  );
}

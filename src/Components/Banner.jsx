import React from 'react';

const Banner = () => {
    return (
        <div className="hero  min-h-[500px]" style={{backgroundImage: 'url(https://img.freepik.com/free-photo/tree-grows-coin-glass-jar-with-copy-space_35913-2508.jpg?size=626&ext=jpg&ga=GA1.1.1721789589.1710523714&semt=sph)'}}>
  <div className="hero-overlay bg-opacity-10"></div>
  <div className="hero-content text-center text-neutral-content">
    <div className="">
      <h1 className="mb-5 text-5xl text-red-500 font-bold">I Grow By Helping People In Need</h1>
     
      <div className="join ">
  <input className="input  join-item" placeholder="Search here"/>
  <button className="btn btn-secondary join-item rounded-r-full">Search</button>
</div>
    </div>
  </div>
</div>
    );
};

export default Banner;
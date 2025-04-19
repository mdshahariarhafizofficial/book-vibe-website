import React from 'react';
import bannerImg from '../../assets/banner-book.png'

const Banner = () => {
    return (
        <div>
            <div className="banner rounded-xl bg-[#F3F3F3] px-32 py-20 flex justify-between items-center">
                <div>
                    <h2 className='text-6xl font-bold'>Books to freshen up <br/>your bookshelf</h2>
                    <button className='bg-[#23BE0A] px-6 py-3 rounded-lg text-white font-bold mt-10'>View The List</button>
                </div>
                <div>
                    <img src={bannerImg} alt="" />
                </div>
            </div>
        </div>
    );
};

export default Banner;
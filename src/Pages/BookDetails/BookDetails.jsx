import React from 'react';
import { useLoaderData, useParams } from 'react-router';

const BookDetails = () => {
    const {id} = useParams();
    const loadBookDetails = useLoaderData();
    const BookData = loadBookDetails.find( book => book.bookId === parseFloat(id));
    const {yearOfPublishing, totalPages, tags, review, rating, publisher, image, category, bookName, author} = BookData;
    
    return (
        <div>
            <div className='p-7'>
                <h2 className='text-4xl font-semibold text-center'>Book Details</h2>
                <div className='border-t-4 border-[#23BE0A] w-44 mx-auto mt-2'></div>
            </div>
            <div className='grid grid-cols-1 lg:grid-cols-2 gap-12 py-5'>
                <div className='p-20 bg-gray-100 rounded-xl'>
                    <img className='w-full rounded-xl' src={image} alt="" />
                </div>
                <div>
                    <h2 className='text-4xl font-bold'>{bookName}</h2>
                    <p className='text-lg font-medium text-[#13131380] my-4'>By: {author}</p>
                    <div className='py-3 border-y-2 border-gray-200'>
                        <p className='text-lg font-medium text-[#13131380]'>{category}</p>
                    </div>
                    <p className='my-4'><span className='font-bold text-xl'>Review :</span> <span className='text-[#13131390] '> {review}</span></p>
                    <div className='py-4 border-b-2 border-gray-200'>
                        <h2 className='font-bold text-2xl mb-3'>Tags :</h2>
                        {
                            tags.map(tag=> <div key={tag}  className="mr-5 bg-[#F3F3F3] border-0 text-[#23BE0A] font-medium badge badge-outline">#{tag}</div>)
                        }
                    </div>
                    <div className='py-4'>
                        <p className='mb-3 flex'><span className='w-[30%] text-lg font-medium text-[#13131370]'>Number of Pages :</span> <span className='w-[70%] text-lg font-bold '>{totalPages}</span></p>
                        <p className='mb-3 flex'><span className='w-[30%] text-lg font-medium text-[#13131370]'>Publisher :</span> <span className='w-[70%] text-lg font-bold '>{publisher}</span></p>
                        <p className='mb-3 flex'><span className='w-[30%] text-lg font-medium text-[#13131370]'>Year of Publishing :</span> <span className='w-[70%] text-lg font-bold '>{yearOfPublishing}</span></p>
                        <p className='mb-3 flex'><span className='w-[30%] text-lg font-medium text-[#13131370]'>Rating :</span> <span className='w-[70%] text-lg font-bold '>{rating}</span></p>

                    </div>
                    <div className='flex gap-5'>
                        <button className='btn px-8'>Read</button>
                        <button className='btn bg-[#50B1C9] text-white px-8 '>Wishlist</button>
                    </div>
                </div>
            </div>         
        </div>
    );
};

export default BookDetails;         
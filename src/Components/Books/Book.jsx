import { Star } from "lucide-react";
import React from "react";
import { Link } from "react-router";

const Book = ({ bookInfo }) => {
  // console.log(bookInfo);
  
  const { bookId,bookName, image, rating, category, tags, yearOfPublishing, publisher } = bookInfo;

  return (
    <Link to={`/bookdetails/${bookId}`}>
      <div>
        <div className="card bg-base-100 w-96 shadow-sm border border-gray-200 p-6">
          <figure className="bg-[#F3F3F3] p-8 rounded-lg">
            <img className="w-[134px h-[166px] object-f" 
              src={image}
              alt="Book Image"
            />
          </figure>
          <div className="card-body p-0">
          <div className="card-actions mt-5">
              {
                  tags.map(tag=> <div key={tag}  className="bg-[#F3F3F3] border-0 text-[#23BE0A] font-medium badge badge-outline">{tag}</div>)
              }
              
            </div>

            <h2 className="card-title text-2xl mt-3">
              {bookName}
              <div className="badge bg-[#23BE0A] text-white">{yearOfPublishing}</div>
            </h2>
            <p className="font-medium text-gray-500">
              By: {publisher}
            </p>
            <div className="flex justify-between items-center border-t-2 border-dashed border-gray-400 pt-4">
              <p className="font-medium text-gray-500">
                  {category}
              </p>
              <div className="flex items-center gap-2">
                  <p className="font-medium text-gray-500">
                      {rating}
                  </p>
                  <span>
                      <Star size={22} color="#23BE0A"></Star>
                  </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Link>
  );
};

export default Book;

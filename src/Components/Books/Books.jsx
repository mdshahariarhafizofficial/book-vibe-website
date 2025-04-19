import React, {} from 'react';
import Book from './Book';

const Books = ({booksData}) => {

    // Data Load by useEffect()
        // const [allBooks, setAllBooks] = useState([]);
        // useEffect(()=>{
        //     fetch('booksData.json').then(res => res.json())
        //     .then(data => setAllBooks(data))
        // },[]);
        // console.log(allBooks);
    
    return (
        <div className='py-20'>
            <h2 className='text-5xl font-bold text-center'>Books</h2>
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 my-10'>
                {
                    booksData.map(bookInfo => <Book
                        key={bookInfo.bookId} 
                        bookInfo = {bookInfo}
                    ></Book>)
                }
            </div>
        </div>
    );
};

export default Books;
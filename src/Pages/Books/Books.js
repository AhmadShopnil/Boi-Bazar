import React, { useState } from 'react';
import { useLoaderData } from 'react-router-dom';
import BookCard from '../Shared/BookCard/BookCard';
import CategoryMenu from '../Shared/CategoryMenu';
import BookingModal from './BookingModal';

const Books = () => {
    const books = useLoaderData();


    return (
        <div className='min-h-screen'>
            <CategoryMenu></CategoryMenu>

            {
                books.data?.length ?
                    <>
                        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 justify-center'>
                            {
                                books.data?.map(book => <BookCard key={book._id} book={book} ></BookCard>)
                            }
                        </div>
                    </>
                    :
                    <>
                        {/* <h2 className='text-3xl text-center font-bold'>No Books in this Categories</h2> */}
                        <progress className="progress w-56"></progress>
                    </>
            }

        </div>
    );
};

export default Books;
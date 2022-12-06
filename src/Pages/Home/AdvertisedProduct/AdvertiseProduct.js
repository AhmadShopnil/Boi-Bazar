import React, { useState } from 'react';
import BookCard from '../../Shared/BookCard/BookCard';


const AdvertiseProduct = () => {
    const [books, setBooks] = useState([])
    const [advertiseItem, setAdverTiseItem] = useState([])


    fetch('https://boi-bazar-server.vercel.app/getAdvertised')
        .then(res => res.json())
        .then(data => {
            if (data.status) {
                setBooks(data.data)
                handleAdverTise(data.data)
            }
        })
        .catch(error => console.error(error))


    const handleAdverTise = (data) => {

        const newbookCollection = data?.filter(book => book?.status !== "Sold")
        setAdverTiseItem(newbookCollection)
    }


    return (
        <>
            {
                advertiseItem?.length ?
                    <>
                        <div className='my-20 '>
                            <h2 className='text-3xl text-center font-semibold my-16'>Advertised Products</h2>

                            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 justify-center ' >
                                {
                                    advertiseItem?.map(book => <BookCard key={book._id} book={book}></BookCard>)
                                }
                            </div>
                        </div>
                    </>
                    :
                    <>

                    </>
            }
        </>


    );
};

export default AdvertiseProduct;
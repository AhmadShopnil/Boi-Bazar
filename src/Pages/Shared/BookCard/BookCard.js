import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import toast from 'react-hot-toast';
import BookingModal from '../../Books/BookingModal';
import useVerify from '../../../hooks/useVerify';

const BookCard = ({ book, reportItem }) => {
    const [modal, setModal] = useState(false)
    const [isVerify] = useVerify(book?.sellerEmail);

    // change date format
    const date = new Date(book?.time);
    const options = { day: 'numeric', month: 'long', year: 'numeric' };
    const formattedDate = date.toLocaleDateString('en-US', options);

    // report item
    const handleReportItem = () => {
        const id = book._id
        // reportItem(book._id)
        fetch(`https://boi-bazar-server.vercel.app/setReportItem${id}`)
            .then(res => res.json())
            .then(data => {
                toast.success('Report Success')
            })
            .catch(error => console.error(error))
    }

    const handleSetModal = () => {
        setModal(true)
    }

    return (
        <div className="card  md:w-96  bg-base-100 shadow-xl mx-4 rounded-lg ">
            <img className='mt-8 h-64 rounded-t-lg' src={book?.photo} alt="Shoes" />
            <div className="card-body">
                <h2 className="card-title">
                    {book?.productName}
                    <div className="badge badge-secondary">{book?.status}</div>
                </h2>
                <p className='font-semibold'>Publish Time : {formattedDate}</p>
                {/* <p className='font-semibold'>Location :  {book.location}</p> */}
                {/* <p className='font-semibold'>Seller Email :  {book.sellerEmail}</p> */}
                {/* <p className='font-semibold'>Seller Number :  {book.sellerPhoneNumber}</p> */}
                <p className='font-semibold'>Original Price :  {book?.originalPrice}</p>
                <p className='font-semibold'>Used Year :  {book?.usedYear}</p>

                <div className='flex  items-center gap-1 '>
                    <span className='font-semibold text-xl'>Seller Name :  {book?.sellerName}
                    </span>
                    {isVerify && <div className="avatar">
                        <div className="w-5 h-5 rounded-full">
                            <img src="https://cdn-icons-png.flaticon.com/128/6520/6520110.png" alt="" />
                        </div>
                    </div>}
                </div>

                <div className="card-actions justify-end">
                    <div className="badge badge-outline p-4"> ${book?.price}</div>
                    <div>
                        {
                            book?.status === "Sold" ?
                                <>
                                    <button className="btn btn-outline btn-primary btn-sm " disabled
                                    >Stock Out</button>
                                </>
                                :
                                <>
                                    <label onClick={handleSetModal} className="btn btn-outline btn-primary btn-sm" htmlFor="my-modal-6" >Book Now</label>
                                </>
                        }

                    </div>
                    <div className="badge badge-outline p-4"> <button onClick={handleReportItem}>Report</button></div>
                </div>
            </div>

            {
                modal && <BookingModal book={book} setModal={setModal}></BookingModal>
            }

        </div>
    );
};

export default BookCard;
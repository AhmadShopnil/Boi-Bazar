import React, { useContext, useState } from 'react';
import { AuthContext } from '../../context/AuthProvider';
import toast from 'react-hot-toast';

const BookingModal = ({ book, setModal }) => {
    const { user } = useContext(AuthContext)


    const handleBooking = (event) => {
        event.preventDefault()
        const form = event.target
        const buyerPhone = form.buyerPhone.value
        const meetingLocation = form.meetingLocation.value


        const bookingInfo = {
            productName: book.productName,
            productId: book._id,
            productPrice: book.price,
            productPhoto: book.photo,
            buyerName: user?.displayName,
            buyerEmail: user?.email,
            buyerPhone,
            meetingLocation,
            status: 'Pay'
        }

        fetch('https://boi-bazar-server.vercel.app/bookings', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(bookingInfo)
        })
            .then(res => res.json())
            .then(data => {
                if (data.status) {
                    setModal(false)
                    toast.success('Booking Success')
                }
            })
    }


    return (
        <div>

            {/* The button to open modal */}
            {/* <label htmlFor="my-modal-6" className="btn">open modal</label> */}

            {/* Put this part before </body> tag */}
            <input type="checkbox" id="my-modal-6" className="modal-toggle" />
            <div className="modal modal-bottom sm:modal-middle">
                <div className="modal-box">


                    <h3 className='text-pink-400 text-3xl font-semibold'>Product: {book.productName}</h3>
                    <h3 className=' text-pink-400 text-2xl font-semibold'>Price: ${book.price}</h3>
                    <u className=' text-2xl my-2'>Buyer Information:</u>
                    <h2 className=' '>Name: {user?.displayName}</h2>
                    <h2 className=''>Email: {user?.email}</h2>
                    <form onSubmit={handleBooking} className='my-4 grid gap-2'>
                        <input name='buyerPhone' type="text" placeholder='Phone Number' className="input input-bordered input-info w-full max-w-xs" />
                        <input name='meetingLocation' type="text" placeholder="Meeting Location" className="input input-bordered input-info w-full max-w-xs" />
                        <div className="modal-action">

                            {/* <label htmlFor="my-modal-6" className="btn"><input  type="submit" value="Submit" /></label> */}

                            <input className='btn' htmlFor="my-modal-6" type="submit" value="Submit" >

                            </input>



                        </div>

                    </form>


                    <label htmlFor="my-modal-6" className="btn btn-sm btn-circle absolute right-2 top-2">✕</label>
                </div>
            </div>


        </div>
    );
};

export default BookingModal;
import React from 'react';
import { useLoaderData } from 'react-router-dom';
import { loadStripe } from '@stripe/stripe-js';
import { Elements } from '@stripe/react-stripe-js';
import CheckOutForm from './CheckOutForm';

const stripePromise = loadStripe('pk_test_51M90A7GfcQjkzvArDAoarFhR6Kaa5XzmwkYcqMSfS6rctQOHesTlZMVijPFhl2ojMGGedXqLdyemzogla3ZdKdz500KnhJ43m1');



const Payment = () => {
    const { data } = useLoaderData();


    return (
        <div>
            <h2 className='text-2xl font-bold'>Product Name:  {data.productName}</h2>
            <h3 className='text-xl font-semibold'>Price:  ${data.productPrice}</h3>




            <div className='w-96 my-12'>
                <Elements stripe={stripePromise}>
                    <CheckOutForm
                        data={data}
                    />
                </Elements>
            </div>


        </div>
    );
};

export default Payment;
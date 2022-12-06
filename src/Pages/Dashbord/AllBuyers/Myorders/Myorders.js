import React, { useContext, useEffect, useState } from 'react';
import { AuthContext } from '../../../../context/AuthProvider';
import OrdersTableRow from './OrdersTableRow';

const Myorders = () => {
    const { user } = useContext(AuthContext)
    const [myOrders, setMyOrders] = useState([])
    const buyerEmail = user?.email
    const [refresh, setRefresh] = useState(false)
    const [error, setError] = useState(null)

    useEffect(() => {
        fetch(`https://boi-bazar-server.vercel.app/bookings?email=${buyerEmail}`, {
            headers: {
                authorization: `Bearer ${localStorage.getItem('token')}`
            }
        })
            .then(res => res.json())
            .then(data => {
                if (data.status) {
                    setMyOrders(data.data)
                    setError(null)
                }
                else {
                    setError(data.message)
                }
            })
            .catch(error => console.error(error))
    }, [refresh])


    const payment = () => {

    }

    return (
        <div>
            {
                error ?
                    <>
                        <h2 className='text-3xl font-bold text-center'>{error}</h2>
                    </>
                    :
                    <>
                        <div>
                            <h2 className='text-3xl text-center font-semibold mb-10'>My Orders</h2>
                            <div className="overflow-x-auto w-full">
                                <table className="table w-full">
                                    <thead>
                                        <tr>
                                            <th>Product </th>
                                            <th>Price</th>

                                            <th>Action</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        {
                                            myOrders?.map(myOrder => <OrdersTableRow key={myOrder._id} myOrder={myOrder}></OrdersTableRow>)
                                        }
                                    </tbody>
                                </table>
                            </div>

                        </div>
                    </>
            }

        </div>





    );
};

export default Myorders;
import React, { useEffect, useState } from 'react';
import BuyerTableRow from './BuyerTableRow';
import toast from 'react-hot-toast';

const AllBuyers = () => {
    const [buyers, setBuyers] = useState([])
    const [refresh, setRefresh] = useState(false)

    useEffect(() => {
        fetch('https://boi-bazar-server.vercel.app/users?role=Buyer', {
            headers: {
                authorization: `Bearer ${localStorage.getItem('token')}`
            }
        })
            .then(res => res.json())
            .then(data => {
                if (data.status) {
                    setBuyers(data.data)
                }
            })

    }, [refresh])


    const deleteBuyer = (id) => {
        const DeleteConfirm = window.confirm('Are you sure want to delete ?')

        if (DeleteConfirm) {
            fetch(`https://boi-bazar-server.vercel.app/user/${id}`, {
                method: 'DELETE',
                headers: {
                    authorization: `Bearer ${localStorage.getItem('token')}`
                }
            })
                .then(res => res.json())
                .then(data => {
                    if (data.status) {
                        setRefresh(!refresh)
                        toast.success('Delete Success')
                    }
                })
                .catch(error => console.error(error))
        }
    }


    return (
        <div>
            <h2 className='text-3xl text-center font-semibold mb-10'>All Buyers</h2>

            <div className="overflow-x-auto w-full">
                <table className="table w-full">

                    <thead>
                        <tr>

                            <th>Name</th>
                            <th>Email</th>
                            <th>Action</th>

                        </tr>
                    </thead>
                    <tbody>

                        {
                            buyers?.map(buyer => <BuyerTableRow key={buyer._id} buyer={buyer} deleteBuyer={deleteBuyer}></BuyerTableRow>)
                        }

                    </tbody>

                </table>
            </div>

        </div>
    );
};

export default AllBuyers;
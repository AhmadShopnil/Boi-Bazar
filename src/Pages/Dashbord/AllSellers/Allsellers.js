import React, { useEffect, useState } from 'react';
import SellerTableRow from './SellerTableRow';
import toast from 'react-hot-toast';


const Allsellers = () => {
    const [sellers, setSellers] = useState([])
    const [refresh, setRefresh] = useState(false)

    console.log(sellers)

    useEffect(() => {
        fetch('https://boi-bazar-server.vercel.app/users?role=Seller', {
            headers: {
                authorization: `Bearer ${localStorage.getItem('token')}`
            }
        })
            .then(res => res.json())
            .then(data => {

                console.log(data)
                if (data.status) {
                    setSellers(data.data)
                }
            })
            .catch(error => console.Console.log(error))

    }, [refresh])


    const deleteSeller = (id) => {
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

    const setVerified = (id) => {

        fetch(`https://boi-bazar-server.vercel.app/setVerify${id}`, {
            headers: {
                authorization: `Bearer ${localStorage.getItem('token')}`
            }
        })
            .then(res => res.json())
            .then(data => {
                setRefresh(!refresh)
            })
            .catch(error => console.error(error))

    }


    return (
        <div>
            <h2 className='text-3xl text-center font-semibold mb-10'>All Sellers</h2>
            <div className="overflow-x-auto w-full">
                <table className="table w-full">
                    <thead>
                        <tr>
                            <th>Name</th>
                            <th>Email</th>
                            <th>Verify</th>
                            <th>Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            sellers?.map(seller => <SellerTableRow key={seller._id} seller={seller} deleteSeller={deleteSeller} setVerified={setVerified}></SellerTableRow>)
                        }

                    </tbody>

                </table>
            </div>

        </div>
    );
};

export default Allsellers;
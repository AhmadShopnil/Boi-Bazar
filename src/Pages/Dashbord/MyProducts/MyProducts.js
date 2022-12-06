import React, { useContext, useEffect, useState } from 'react';
import { AuthContext } from '../../../context/AuthProvider';
import toast from 'react-hot-toast';


const MyProducts = () => {
    const [books, setBooks] = useState([])
    const [refresh, setRefresh] = useState(false)
    const { user } = useContext(AuthContext)
    const email = user?.email

    useEffect(() => {
        fetch(`https://boi-bazar-server.vercel.app/books?email=${email}`, {
            headers: {
                authorization: `Bearer ${localStorage.getItem('token')}`
            }
        })
            .then(res => res.json())
            .then(data => {
                if (data.status) {
                    setBooks(data.data)
                }
            })
            .catch(error => console.error(error))
    }, [refresh])


    const handleAdvertise = (id) => {
        fetch(`https://boi-bazar-server.vercel.app/setAdvertise${id}`)
            .then(res => res.json())
            .then(data => {
                setRefresh(!refresh)
            })
            .catch(error => console.error(error))
    }


    const deleteProduct = (id) => {
        const DeleteConfirm = window.confirm('Are you sure want to delete ?')
        if (DeleteConfirm) {
            fetch(`https://boi-bazar-server.vercel.app/myProduct/${id}`, {
                method: 'DELETE'
            })
                .then(res => res.json())
                .then(data => {
                    if (data.status) {
                        toast.success('Delete Success')
                        setRefresh(!refresh)
                    }
                })
                .catch(error => console.error(error))
        }
    }

    return (
        <div>
            <h2 className='text-center font-bold text-3xl mb-10'>My Products</h2>
            {
                books?.length ?
                    <>
                        <div className="overflow-x-auto">
                            <table className="table w-full">
                                <thead>
                                    <tr>
                                        <th></th>
                                        <th>Product Name</th>
                                        <th>Price</th>
                                        <th>Status</th>
                                        <th>Advertise</th>
                                        <th>Action</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {
                                        books?.map((book, i) => {
                                            return <tr key={book._id} className="hover">
                                                <th>{i + 1}</th>
                                                <td>{book.productName}</td>
                                                <td>{book.price} </td>
                                                <td>available</td>
                                                {
                                                    book?.Advertise === true ?
                                                        <>
                                                            <td>Advertised</td>
                                                        </>
                                                        :
                                                        <>
                                                            <td><button onClick={() => handleAdvertise(book._id)} className='btn btn-sm'>Set Advertise</button></td>
                                                        </>
                                                }
                                                <td><button onClick={() => deleteProduct(book._id)} className='btn btn-sm'>Delete</button></td>
                                            </tr>
                                        })
                                    }
                                </tbody>
                            </table>
                        </div>





                    </>
                    :
                    <>
                        <h2 className='text-2xl text-center font-semibold'>You do not added any product</h2>
                    </>
            }


        </div>
    );
};

export default MyProducts;
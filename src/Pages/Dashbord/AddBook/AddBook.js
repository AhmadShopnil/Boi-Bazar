import React, { useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import { AuthContext } from '../../../context/AuthProvider';
import toast from 'react-hot-toast';

const AddBook = () => {
    const { user } = useContext(AuthContext)
    const userEmail = user?.email
    const sellerName = user?.displayName
    const time = new Date().toISOString();
    const navigate = useNavigate()

    const handleAddBook = (event) => {
        event.preventDefault()
        const form = event.target;
        const productName = form.productName.value
        const price = form.price.value
        const originalPrice = form.originalPrice.value
        const usedYear = form.usedYear.value
        const photo = form.photo.value
        const condition = form.condition.value
        const description = form.description.value
        const location = form.location.value
        const category = form.category.value
        const purchaseDate = form.purchaseDate.value
        const sellerPhoneNumber = form.sellerPhoneNumber.value
        const sellerEmail = form.sellerEmail.value

        const productInfo = {
            productName,
            price,
            originalPrice,
            photo,
            usedYear,
            condition,
            description,
            location,
            purchaseDate,
            category,
            sellerPhoneNumber,
            sellerEmail,
            sellerName,
            time,
            status: 'Available'

        }
        // console.log(productInfo)


        fetch('https://boi-bazar-server.vercel.app/addbook', {
            method: 'POST',
            headers: {
                'content-type': 'application/json',

            },
            body: JSON.stringify(productInfo)
        })
            .then(res => res.json())
            .then(data => {
                if (data.status) {
                    toast.success('Book Added success')
                    form.reset()
                    navigate('/dashbord/myproducts')
                }
            })
            .catch(err => console.error(err))




    }



    return (
        <div className=''>
            <h2 className='text-center text-2xl mb-6'>Add a Book for sale</h2>

            <form onSubmit={handleAddBook} className='flex flex-wrap justify-center gap-4' >

                <input type="text" name='productName' placeholder="Product Name" className="input input-bordered input-info w-full max-w-xs" required />
                <input type="text" name='price' placeholder="Selling Price" className="input input-bordered input-info w-full max-w-xs" required />
                <input type="text" name='originalPrice' placeholder="Original Price" className="input input-bordered input-info w-full max-w-xs" required />
                <input type="text" name='condition' placeholder="Condition" className="input input-bordered input-info w-full max-w-xs" required />
                <input type="text" name='photo' placeholder="Photo" className="input input-bordered input-info w-full max-w-xs" required />
                <input type="text" name='location' placeholder="Location" className="input input-bordered input-info w-full max-w-xs" required />
                <input type="text" name='description' placeholder="Description" className="input input-bordered input-info w-full max-w-xs" required />
                <input type="text" name='usedYear' placeholder="Used Year" className="input input-bordered input-info w-full max-w-xs" required />
                <input type="text" name='purchaseDate' placeholder="Purchase Date" className="input input-bordered input-info w-full max-w-xs" required />
                <select name='category' className="select select-info w-full max-w-xs">

                    <option selected>SSC</option>
                    <option>HSC</option>
                    <option>STORY</option>
                </select>
                <input type="text" name='sellerPhoneNumber' placeholder="Phone Number" className="input input-bordered input-info w-full max-w-xs" required />
                <input type="text" name='sellerEmail' placeholder="Seller Email" className="input input-bordered input-info w-full max-w-xs" defaultValue={userEmail} disabled required />

                <input className=' btn w-full  max-w-xs' type="submit" value="Add Product" />
            </form>
        </div>
    );
};

export default AddBook;
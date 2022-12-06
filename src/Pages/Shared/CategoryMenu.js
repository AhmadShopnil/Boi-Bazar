import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

const CategoryMenu = () => {
    const [categories, setCategories] = useState([])

    // console.log(categories)

    useEffect(() => {
        fetch('https://boi-bazar-server.vercel.app/categories')
            .then(res => res.json())
            .then(data => {
                if (data.status) {
                    // console.log(data.data)
                    setCategories(data.data)
                }

            })
            .catch(error => console.error(error))
    }, [])



    return (
        <div className='w-100 flex justify-center'>

            <div className=''>
                <ul className="menu menu-vertical lg:menu-horizontal bg-base-100 rounded-box p-3">



                    {
                        categories?.map(category => <li key={category._id} className='p-2'><Link to={`/books/${category.categoryName}`}>{category.categoryName}</Link></li>)
                    }


                </ul>

            </div>




        </div>
    );
};

export default CategoryMenu;
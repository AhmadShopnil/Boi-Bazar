import React, { useEffect, useState } from 'react';

const useVerify = (email) => {
    const [isVerify, setIsVerify] = useState(null)

    useEffect(() => {

        if (email) {
            fetch(`https://boi-bazar-server.vercel.app/isVerify/${email}`)
                .then(res => res.json())
                .then(data => {
                    setIsVerify(data.isVerify)

                })
                .catch(error => console.error(error))

        }

    }, [isVerify])

    return [isVerify]
};

export default useVerify;
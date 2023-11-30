import React, { useEffect, useState } from 'react'
import Menu from '../components/Menu'
import { useGetCountryQuery } from '../api/AuthenticationApi'

const HomePage = () => {
    const { data, isSuccess } = useGetCountryQuery()

    const [countries, setCountries] = useState([])
    // useEffect(() => {
    //     if (isSuccess == true) {
    //         setCountries(data)
    //         console.log(countries);

    //         const sortedCountries = countries.sort((a, b) => {
    //             const nameA = a.name.common.toUpperCase();
    //             const nameB = b.name.common.toUpperCase();
    //             if (nameA < nameB) {
    //                 return -1;
    //             }
    //             if (nameA > nameB) {
    //                 return 1;
    //             }
    //             return 0;
    //         });
    //         setCountries(sortedCountries)

    //     }


    // }, [data, isSuccess]);

    return (
        <div>
            <Menu />

            {
                isSuccess && (
                    <>
                        {
                            data.map((country, key) => (
                                <div key={key}>
                                    <div className="text-2xl font-bold p-3">
                                        {/* {country.name} */}
                                        {country.name.common}
                                        <img src={country.flags.png} alt="" />
                                    </div>
                                </div>
                            ))
                        }
                    </>
                )
            }
        </div>
    )
}

export default HomePage
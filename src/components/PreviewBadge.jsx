import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { useGetParticipantsDetailsQuery } from '../api/ParticipantApi'
import { Skeleton } from '@mui/material'
import QRCode from 'react-qr-code'
import { useGetCountryQuery } from '../api/AuthenticationApi'
import logo from '../assets/logo.jpg'
import logo2 from '../assets/logos.jpg'
import images from '../assets/images'
import { FUNCTIONS } from '../static/others'
import PreviewBagdeSleleton from '../MySleletons/PreviewBagdeSleleton'
import { PDFViewer } from '@react-pdf/renderer'
import CardTemplate1 from '../pdf/CardTemplate1'
// import 'https://cdn.tailwindcss.com'

const FirstPrivilege = [1, 2, 3, 4, 5]
const FirstPrivilege2 = [6, 7, 8, 9, 10]
const PreviewBadge = () => {
    const handlePrint = () => {
        const printContents = document.getElementById('card');
        const originalContents = document.body.innerHTML;
        document.body.innerHTML = printContents.innerHTML;

        window.print();

        document.body.innerHTML = originalContents;
    }
    console.log('DL2', FUNCTIONS["Délégation"]['Officiel'])
    const { data: countries, isLoading: countriesLoading, isSuccess: countriesSuccess } = useGetCountryQuery()
    const { id } = useParams()
    const { data, isLoading, isSuccess } = useGetParticipantsDetailsQuery(id)
    const [category, setCategory] = useState('')
    const [countriesOkay, setCountriesOkay] = useState(false)
    useEffect(() => {
        // setCategory(data.function)
    }, [data])
    console.log(data);
    const [countrieFlags, setCountrieFlags] = useState(null)
    useEffect(() => {
        // console.log(data);
        if (isSuccess && countriesSuccess && countries) {
            const countriesWithFlags = {};
            countries.forEach(country => {
                const countryName = country.name.common;
                const countryFlag = country.flags?.svg; // Utilise l'opérateur de chaînage optionnel pour éviter les erreurs
                // console.log('Country :', country.flags);
                const countryFlagImg = country.flags?.png; // Utilise l'opérateur de chaînage optionnel pour éviter les erreurs

                // Stocke le drapeau du pays s'il est disponible
                if (countryFlag) {
                    countriesWithFlags[countryName] = [countryFlag, countryFlagImg];
                }
            });

            // Met à jour l'état avec les drapeaux des pays
            setCountrieFlags(countriesWithFlags);
        }
    }, [isSuccess, countriesSuccess, countries])

    return (
        <div className='' >
            <button onClick={handlePrint} className='p-3 bg-blue-600 text-white w-[170px]' > Print </button>
            {
                isLoading && (
                    <PreviewBagdeSleleton />
                )
            }

            {
                isSuccess && (
                    <div id="card" className='flex justify-between  divide-x-2 w-full p-3' >
                        <div className="w-full p-3 flex justify-center">
                            <div className={`${FUNCTIONS[data.category][data.function].color}  w-full p-3 py-9 h-[600px] flex flex-col gap-y-5`}>
                                <div className="m-auto h-1/4 bg-white/75 w-5/6 flex p-3 gap-4">
                                    <p className='text-xl font-semibold' >
                                        23 <sup>ième</sup> championnats d’Afrique d’athlétisme Senior « Douala 24 »
                                    </p>
                                    <img src={logo} className='h-full' alt="" />
                                </div>
                                <div className="m-auto bg-white/75 h-3/4 w-5/6 relative">
                                    <div className="flex ">
                                        <img className='w-[130px] h-[130px]' src={data.photo} />
                                        <div className=" ml-3 flex flex-col">
                                            <p className='font-semibold' > {data.name} </p>
                                            <p> {data.surname} </p>
                                            <p className=''> {data.category} </p>
                                            <p> {data.country}
                                                {data && data.function && countries && !countriesLoading && countriesSuccess && countrieFlags && (
                                                    // Vérifie que toutes les données nécessaires sont disponibles avant d'afficher le drapeau du pays du participant
                                                    <img width={50} src={countrieFlags[data.country][1]} alt="Country Flag" />
                                                )}
                                            </p>

                                        </div>
                                    </div>
                                    <div className="m-auto text-center mt-3 text-bold text-2xl">
                                        {data.function.toUpperCase()}
                                    </div>
                                    <div>
                                        <div className="w-full grid grid-cols-5 gap-3 mb-3 mt-4 ">
                                            {
                                                FirstPrivilege.map((el, key) => (
                                                    <div key={key} className={` w-full h-10 flex justify-center items-center ${FUNCTIONS[data.category][data.function].access.indexOf(el) != -1 && "bg-white"}`} >
                                                        {FUNCTIONS[data.category][data.function].access.indexOf(el) != -1 && (<div className='font-bold'> {el} </div>)}
                                                    </div>
                                                ))
                                            }
                                        </div>
                                        <div className="w-full grid grid-cols-5 gap-3 ">
                                            {
                                                FirstPrivilege2.map((el, key) => (
                                                    <div key={key} className={` w-full h-10 flex justify-center items-center ${FUNCTIONS[data.category][data.function].access.indexOf(el) != -1 && "bg-white"}`} >
                                                        {FUNCTIONS[data.category][data.function].access.indexOf(el) != -1 && (<div className='font-bold'> {el} </div>)}
                                                    </div>
                                                ))
                                            }
                                        </div>
                                        <div className="flex justify-between items-center p-3">
                                            <QRCode
                                                value={data.id}
                                                size={100}
                                            />
                                            <div className="font-semibold">
                                                {data.activity}
                                            </div>
                                            <div className="text-semibold">
                                                {FUNCTIONS[data.category][data.function].privileges.toString()}
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="w-full p-3 flex justify-center">
                            <div className={`${FUNCTIONS[data.category][data.function].color}  w-full p-3 py-9 h-[600px] flex flex-col gap-y-5 relative`}>
                                <div className="flex justify-between gap-2 text-white text-sm">
                                    <div className="w-full">
                                        <p>1 : Tribune	présidentielle</p>
                                        <p>2 : Tribune	officielle</p>
                                        <p>3 : échauffement	et	coulisses</p>
                                        <p>4 : Terrains,	piste,	salles</p>
                                        <p>5 : Zone	mixte</p>
                                    </div>
                                    <div className="w-full">
                                        <p>6 : Centre	et	tribune	de	presse</p>
                                        <p>7 : Zone	télévision</p>
                                        <p>8 :Centre	médical</p>
                                        <p>9 :  Tribune	participants</p>
                                        <p>10 : Direction	des	épreuves</p>
                                    </div>
                                </div>
                                <div className="grid grid-cols-5 w-full gap-3 items-center">
                                    <img src={images.logoOrange} alt="orange" className='w-full' />
                                    <img src={images.logoCrtv} alt="orange" className='w-full' />
                                    <img src={images.logoMadiba} alt="orange" className='w-full' />
                                    <img src={images.logoPmuc} alt="orange" className='w-full' />
                                    <img src={images.logoPrudential} alt="orange" className='w-full' />
                                </div>
                                <div className="absolute bottom-0 text-white text-[13px] text-justify left-0 right-0 p-10">
                                    La carte d'accréditation demeure la propriété du CIJF et peut m'être retirée avec effet immédiat à la seule discrétion du CIJF. En faisant usage de cette carte, j'accepte d'être filmé notamment par la télévision, photographié identifié ou enregistré de toute autre manière pendant les jeux de la Francophonie, dans les conditions et pour les fins autorisées actuellement ou à l'avenir par le CIJF pour la promotion des Jeux. J'accepte de n'utiliser que mon usage per-sonnel, et à des fins non commerciales, les photographies que je prendrai et les films que je réaliserai pendant les compétitions, y compris celles et ceux sur les stades sauf autorisation écrite préalable du CIJF.
                                </div>
                            </div>
                        </div>


                    </div>
                )

            }
            {
                data && data.function && countries && !countriesLoading && countriesSuccess && countrieFlags &&  (
                    <PDFViewer width={'100%'} height={'800'} >
                        <CardTemplate1 data={[data]} flags={countrieFlags} />
                    </PDFViewer>
                )
            }
        </div>
    )
}

export default PreviewBadge
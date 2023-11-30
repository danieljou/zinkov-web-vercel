import { IconButton, InputAdornment, TextField } from '@mui/material'
import React, { useEffect, useState } from 'react'
import { FiEye } from "react-icons/fi";
import { FiEyeOff } from "react-icons/fi";
import { useLoginMutation } from '../api/AuthenticationApi';
import { toast } from 'react-toastify';
import { useLocation, useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { loginSuccess } from '../slices/AuthSlice';
const Login = () => {

    const navigate = useNavigate()
    const location = useLocation()
    const dispatch = useDispatch()

    const [formData, setFormData] = useState({
        username: '',
        password: ''
    })
    const [isError, setIsError] = useState({
        username: false,
        password: false,
        message: ''
    })
    const [login] = useLoginMutation()
    const [passwordHide, setPasswordHide] = useState(true)
    const searchParams = new URLSearchParams(location.search)
    const next = searchParams.get('next') || ""
    const handleSubmit = async (e) => {
        e.preventDefault()
        console.log(isError);
        if (isError.password || isError.username) {

            setIsError({ ...isError, message: 'Remplissez tous les champs' })
        }
        else {
            const res = await login({ data: formData })
            if (res.data) {
                toast('Authentification effectéue avec succèss', {
                    type: 'success'
                })
                console.log(res.data);
                localStorage.setItem('user', JSON.stringify(res.data))
                dispatch(loginSuccess(res.data))
                // if (res.data.token.info.is_superuser === true) {
                //     next == "" && setNext("/redirect")
                // }
                // else if (res.data.token.user.is_cc === true) {
                //     next == "" && setNext("/commissaire")
                // }
                // else {
                //     setNext('/Unauthorized')
                // }

                console.log("NEXT : ", next);
                // console.log(res.data.token.user)
                // (user != null) navigate(`/redirect/${next !== "" && (`"?next?"${next}`)})
                navigate(`/redirect`)

            }
            else if (res.error) {
                if (res.error.status === 400) {
                    toast("Login ou mot de passe incorrect", {
                        type: 'error'
                    })
                    setFormError(true)
                }
                else {
                    toast("Une erreur est survenue", {
                        type: 'error'
                    })
                }
            }
        }

    }



    useEffect(() => {
        let user = null;
        try {
            user = localStorage.getItem("user");
        } catch {
            user = null;
        }

        if (user != null) navigate(`/redirect`)


    }, [])

    return (
        <div className='' >
            {/* <div className="flex items-center justify-center h-screen">
                <div className="relative">
                    <div className="h-24 w-24 rounded-full border-t-8 border-b-8 border-gray-200"></div>
                    <div className="absolute top-0 left-0 h-24 w-24 rounded-full border-t-8 border-b-8 border-blue-500 animate-spin">
                    </div>
                </div>
            </div> */}
            <section className="bg-gray-50 dark:bg-gray-900">
                <div className="flex flex-col items-center justify-center px-6 py-8 mx-auto md:h-screen lg:py-0">
                    <a href="#" className="flex items-center mb-6 text-2xl font-semibold text-gray-900 dark:text-white">
                        <span className='text-amber-600' >Z</span>inKov
                    </a>
                    <div className="w-full bg-white rounded-lg shadow dark:border md:mt-0 sm:max-w-md xl:p-0 dark:bg-gray-800 dark:border-gray-700">
                        <div className="p-6 space-y-4 md:space-y-6 sm:p-8">
                            <h1 className="text-xl font-bold leading-tight tracking-tight text-gray-900 md:text-2xl dark:text-white">
                                Connectez vous à votre compte
                            </h1>
                            {
                                isError.message !== '' &&
                                (
                                    <div className="w-full">

                                    </div>
                                )
                            }
                            <form className="space-y-4 md:space-y-6" action="" onSubmit={handleSubmit} >
                                <div>
                                    <label htmlFor="email" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Votre nom d'utilisateur</label>
                                    <TextField
                                        placeholder='username'
                                        size='small'
                                        fullWidth
                                        variant='outlined'
                                        type='text'
                                        error={isError.username}
                                        value={formData.username}
                                        onChange={(e) => setFormData({ ...formData, username: e.currentTarget.value })}
                                    />
                                </div>
                                <div>
                                    <label htmlFor="password" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Password</label>
                                    <TextField
                                        placeholder='****************'
                                        size='small'
                                        fullWidth
                                        variant='outlined'
                                        type={passwordHide ? 'password' : 'text'}
                                        error={isError.password}
                                        value={formData.password}
                                        onChange={(e) => setFormData({ ...formData, password: e.currentTarget.value })}
                                        InputProps={{
                                            endAdornment:
                                                <InputAdornment position="end">
                                                    <IconButton onClick={() => setPasswordHide(!passwordHide)} >
                                                        {passwordHide ? <FiEye scale={0.5} /> : <FiEyeOff />}

                                                    </IconButton>
                                                </InputAdornment>,
                                        }}
                                    />
                                </div>

                                <div className="flex items-center justify-between">
                                    <a href="#" className="text-sm font-medium text-blue-600 hover:underline dark:text-blue-500">Mot de passe oublié?</a>
                                </div>
                                <button type="submit" className="w-full text-white bg-blue-700 hover:bg-blue-700  focus:outline-none font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Se Connecter</button>
                                <p className="text-sm font-light text-gray-500 dark:text-gray-400">
                                    Vous n'avez pas encore de compte ? <a href="#" className="font-medium text-blue-600 hover:underline dark:text-blue-500">Enregistrez-vous</a>
                                </p>
                            </form>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    )
}

export default Login
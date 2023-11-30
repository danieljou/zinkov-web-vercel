import React, { useEffect, useState } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
import FormTemplate from "../components/Forms/FormTemplate";
import { TextField } from "@mui/material";
// import { useResetPasswordMutation } from "../api/Authentication";
import { toast } from "react-toastify";
import { useDispatch } from "react-redux";
import { logout } from "../slices/AuthSlice";
import { useResetPasswordMutation } from "../api/AuthenticationApi";

const ResetPwd = () => {
    const { uid, token } = useParams();
    const [resetPassword] = useResetPasswordMutation()
    const navigate = useNavigate();
    const dispatch = useDispatch();

    const [formData, setformData] = useState({
        password: "",
        confirm_password: "",
    });

    const handleSubmit = async (e) => {
        e.preventDefault();
        if (
            formData.password !== formData.confirm_password ||
            (formData.password.length || formData.confirm_password.length) < 1
        ) {
            // setError(true)
            // setMessage('Les deux mots de passe ne correspondent pas')
            toast("Les deux mots de passe ne sont pas identique", {
                type: "error",
            });
        } else {
            const res = await resetPassword({
                uid: uid,
                token: token,
                data: formData,
            });
            console.log(res);
            if (res.data) {
                toast("Votre mot de passe à été réinitialiser avec succès", {
                    type: "success",
                });
                navigate("/login");
                // setError(false)
                // setIsSuccess(true)
            } else {
                toast("Token non valide", {
                    type: "error",
                });
                // setError(true)
                // setMessage('Token invalide')
            }
        }
    };

    useEffect(() => {
        try {
            localStorage.removeItem("user");
        } catch (error) { }
        dispatch(logout());
    }, []);

    return (
        <section className="bg-gray-50 dark:bg-gray-900">
            <div className="flex flex-col items-center justify-center px-6 py-8 mx-auto md:h-screen lg:py-0">
                <a href="#" className="flex items-center mb-6 text-2xl font-semibold text-gray-900 dark:text-white">
                    <span className='text-amber-600' >Z</span>inKov
                </a>
                <div className="w-full bg-white rounded-lg shadow dark:border md:mt-0 sm:max-w-md xl:p-0 dark:bg-gray-800 dark:border-gray-700">
                    <div className="p-6 space-y-4 md:space-y-6 sm:p-8">
                        <h1 className="text-xl font-bold leading-tight tracking-tight text-gray-900 md:text-2xl dark:text-white">
                            Reinitialisez votre mot de passe
                        </h1>

                        <form className="space-y-4 md:space-y-6" action="" onSubmit={handleSubmit} >
                            <div>
                                <FormTemplate label="Password">
                                    <TextField
                                        variant="outlined"
                                        type="password"
                                        value={formData.password}
                                        placeholder="Mot de passe"
                                        fullWidth
                                        onChange={(target) => {
                                            setformData({
                                                ...formData,
                                                password: target.currentTarget.value,
                                            });
                                        }}
                                        sx={{
                                            marginTop: "4px",
                                        }}
                                    />
                                </FormTemplate>
                                <FormTemplate label="Confirm password">
                                    <TextField
                                        type="password"
                                        variant="outlined"
                                        value={formData.confirm_password}
                                        placeholder="Confirmer le mot de passe"
                                        fullWidth
                                        onChange={(target) => {
                                            setformData({
                                                ...formData,
                                                confirm_password: target.currentTarget.value,
                                            });
                                        }}
                                        sx={{
                                            marginTop: "4px",
                                        }}
                                    />
                                </FormTemplate>
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
    );
};

export default ResetPwd;

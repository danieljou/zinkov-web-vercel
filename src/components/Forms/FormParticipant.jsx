import React, { useState } from 'react'
import FormTemplate from '../Forms/FormTemplate';
import { MenuItem, Select, TextField } from '@mui/material';
import { toast } from 'react-toastify';
import { RiLoaderLine } from 'react-icons/ri';
import { DelegationCategoriesFunctions } from '../../static/static';
import { useAddDelegationParticipantMutation } from '../../api/ParticipantApi';
import { useNavigate } from 'react-router-dom';
import { useSelector } from 'react-redux';
const FormParticipant = () => {
    const userTypes = [
        'Chef de délégation',
        'Jury / Organisme de contrôle',
        'Media'
    ]
    const [createParticipant] = useAddDelegationParticipantMutation()
    const country = useSelector((state) => state.auth.user_infos.country)
    const [formData, setFormData] = useState({
        name: '',
        surname: '',
        photo: '',
        category: 'Délégation',
        function: '',
        country: country,
        activity: '',
    })
    const [disable, setDisable] = useState(false)
    const navigate = useNavigate()
    const handleChoose = (e) => {
        // // console.log(e.target);
        if (e.target.files[0]) {
            const reader = new FileReader();
            reader.readAsDataURL(e.target.files[0]);
            reader.onload = () => {
                setFormData({ ...formData, photo: reader.result });
            };
        }
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setDisable(true)
        console.log(formData);
        const res = await createParticipant({ data: formData });
        if (res.error) {
            console.log(res.error);
            if (res.error.status === 400) {
                toast("Verifiez tous les champs", { type: 'error' })
            }
            else {
                toast("Une erreur esr survenu", { type: 'error' })
            }
        } else if (res.data) {
            toast("Utilisateur ajouté avec succès", { type: 'success' })
            navigate('/team-manager/officials')

        }
        setDisable(false)
    }


    return (
        <div>
            <form action="" onSubmit={handleSubmit} className='my-5 px-10 shadow-lg py-5 rounded-lg border-lg' >
                <div className="text-xl font-semibold w-full">
                    Ajouter un membre à votre délégation
                </div>

                <img src={formData?.photo || ''} alt='Image' className='w-[200px] h-[200px] object-contain rounded-full ring-4 ring-gray-100' />
                <FormTemplate label='Selectionnez une photo (datant de moins de 6 mois)' >
                    <TextField
                        required
                        variant='outlined'
                        placeholder='Entrez le nom '
                        fullWidth
                        type='file'
                        onChange={handleChoose}

                    />
                </FormTemplate>
                <div className="flex justify-center w-full gap-x-5">
                    <div className="w-full">
                        {/* <Form */}
                        <FormTemplate label='Nom' >
                            <TextField
                                required
                                variant='outlined'
                                placeholder='Entrez le nom '
                                fullWidth
                                type='text'
                                onChange={(e) => setFormData({ ...formData, name: e.currentTarget.value })}
                                value={formData.name}
                            />
                        </FormTemplate>
                    </div>
                    <div className="w-full">
                        <FormTemplate label='Prénom' >
                            <TextField
                                variant='outlined'
                                placeholder='Entrez le prénom '
                                fullWidth
                                type='text'
                                onChange={(e) => setFormData({ ...formData, surname: e.currentTarget.value })}
                                value={formData.surname}
                            />
                        </FormTemplate>
                    </div>
                </div>
                <FormTemplate label='Pays' >
                    <TextField
                        required
                        variant='outlined'
                        fullWidth
                        disabled
                        type='text'
                        value={formData.country}
                    />
                </FormTemplate>
                <FormTemplate label="Epreuve" >
                    <TextField
                        required
                        variant='outlined'
                        placeholder='Epreuve'
                        fullWidth
                        type='text'
                        onChange={(e) => setFormData({ ...formData, activity: e.currentTarget.value })}
                        value={formData.activity}
                    />
                </FormTemplate>

                <FormTemplate label="Catégotie" >
                    <TextField
                        variant='outlined'
                        disabled
                        fullWidth
                        value='Délégation'
                    />
                </FormTemplate>

                <FormTemplate label="Fonction">
                    <Select
                        placeholder="Selectionnez le type d'utilisateur"
                        value={formData.rule}
                        fullWidth
                        onChange={(e) =>
                            setFormData({ ...formData, function: e.target.value })
                        }
                    >

                        {DelegationCategoriesFunctions.map((user, key) => (<MenuItem key={key} value={user}>{user}</MenuItem>))}
                    </Select>
                </FormTemplate>
                <button
                    disabled={disable}
                    type='submit' className='w-full mt-3 bg-blue-500 text-white py-3 font-bold' >
                    {disable ? <RiLoaderLine /> : 'VALIDER'}
                </button>
            </form>
        </div >
    )
}

export default FormParticipant
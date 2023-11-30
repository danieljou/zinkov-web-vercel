import React, { useEffect, useState } from 'react'
import FormTemplate from '../Forms/FormTemplate';
import { Autocomplete, MenuItem, Select, TextField } from '@mui/material';
import { useCreateUserMutation } from '../../api/UserApi';
import { toast } from 'react-toastify';
import { RiLoaderLine } from 'react-icons/ri';
import { useGetCountryQuery } from '../../api/AuthenticationApi';

const FormUser = ({ refetch }) => {

    const { data, isSuccess } = useGetCountryQuery()
    const [countries, setCountries] = useState([])
    useEffect(() => {
        console.log(data);
        if (isSuccess && data) {
            let tab = []
            data.forEach(element => {
                // const updatedArray = [...countries, element.name.common];
                // console.log("U¨DAE", updatedArray);
                tab.push(element.name.common)

            });
            setCountries([...countries, ...tab]);
            // console.log('Countries : ', countries);
        }
    }, [data])

    const userTypes = [
        'Chef de délégation',
        'Jury / Organisme de contrôle',
        'Media'
    ]
    const [createUser] = useCreateUserMutation()
    const [formData, setFormData] = useState({
        username: '',
        last_name: '',
        first_name: '',
        email: '',
        rule: '',
        country: ''
    })
    const [disable, setDisable] = useState(false)
    const handleSubmit = async (e) => {
        e.preventDefault();
        setDisable(true)
        console.log(formData);
        const res = await createUser({ data: formData });
        // const res = null;
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
            if (refetch) {
                refetch()
            }

        }
        setDisable(false)
    }
    return (
        <div>
            <form action="" onSubmit={handleSubmit}>
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
                                onChange={(e) => setFormData({ ...formData, first_name: e.currentTarget.value })}
                                value={formData.first_name}
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
                                onChange={(e) => setFormData({ ...formData, last_name: e.currentTarget.value })}
                                value={formData.last_name}
                            />
                        </FormTemplate>
                    </div>
                </div>
                <FormTemplate label='Email' >
                    <TextField
                        required
                        variant='outlined'
                        placeholder='exemple@gmail.com'
                        fullWidth
                        type='email'
                        onChange={(e) => setFormData({ ...formData, email: e.currentTarget.value })}
                        value={formData.email}
                    />
                </FormTemplate>
                <FormTemplate label="Nom d' utilisateur" >
                    <TextField
                        required
                        variant='outlined'
                        placeholder='username'
                        fullWidth
                        type='text'
                        onChange={(e) => setFormData({ ...formData, username: e.currentTarget.value })}
                        value={formData.username}
                    />
                </FormTemplate>

                <FormTemplate label="Type de d'utilisateur">
                    <Select
                        // label="Selectionnez le type d'utilisateur"
                        placeholder="Selectionnez le type d'utilisateur"
                        // labelId="demo-simple-select-label"
                        // id="demo-simple-select"
                        value={formData.rule}
                        fullWidth
                        //   defaultValue={"GUEST"}
                        // label="Age"
                        onChange={(e) =>
                            setFormData({ ...formData, rule: e.target.value })
                        }
                    >

                        {userTypes.map((user, key) => (<MenuItem key={key} value={user}>{user}</MenuItem>))}
                    </Select>
                </FormTemplate>

                <Autocomplete
                    value={formData.country}
                    onChange={(target, value) => {
                        setFormData({
                            ...formData,
                            country: value,
                        });
                    }}
                    options={countries}
                    renderInput={(params) => (
                        <TextField
                            {...params}
                            type="text"
                            variant="outlined"
                            placeholder="Selecrionnez le pays"
                            fullWidth
                            sx={{
                                marginTop: "4px",
                            }}
                            // label="Select an option"
                            id="myInput"
                        />
                    )}
                />
                <button
                    disabled={disable}
                    type='submit' className='w-full mt-3 bg-blue-500 text-white py-3 font-bold' >
                    {disable ? <RiLoaderLine /> : 'VALIDER'}
                </button>
            </form>
        </div >
    )
}

export default FormUser
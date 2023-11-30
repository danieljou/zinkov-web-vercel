import React, { useState } from 'react'
import { useGetUsersQuery } from '../../api/UserApi'
import { Link } from 'react-router-dom'
import { Box, Dialog, IconButton, Skeleton } from '@mui/material'
import { DataGrid, frFR } from '@mui/x-data-grid'
import FormUser from '../../components/Admin/FormUser'
import { IoClose } from 'react-icons/io5'

const User = () => {
    const { data, isLoading, isSuccess, refetch } = useGetUsersQuery()
    console.log(data);
    const [showForm, setShowForm] = useState(false)
    const columns = [
        { field: 'last_name', headerName: 'Nom', flex: 1, },
        { field: 'first_name', headerName: 'Prénom', flex: 1, },
        { field: 'username', headerName: 'Nom d\'utilisateur', flex: 1, },
        // { field: 'prenom', headerName: 'Option', flex: 1, },
        // Add more columns as needed
    ];
    return (
        <div className='' >
            <h1 className="text-3xl font-bold">
                Utilisateurs
                <hr />
            </h1>
            <div className="flex justify-end my-5">
                <button
                    onClick={() => setShowForm(!showForm)}
                    type='button'
                    className='px-10 bg-blue-600 text-white py-3 text-2xl rounded-lg' > Créer  </button>
            </div>
            <h1 className="text-2xl font-bold">
                Liste des utilisateurs
            </h1>
            <Box>
                {
                    !isLoading && isSuccess ?
                        (
                            <div className='my-3'>
                                <DataGrid
                                    localeText={frFR.components.MuiDataGrid.defaultProps.localeText}
                                    rows={data}
                                    columns={columns}
                                    pageSize={5}
                                // checkboxSelection
                                />
                            </div>
                        )
                        :
                        (
                            <>
                                <div className="flex gap-2">
                                    <Skeleton className='w-full mb-2' height={200} />
                                    <Skeleton className='w-full mb-2' height={200} />
                                </div>
                                <Skeleton className='w-full mb-2' height={200} />
                            </>
                        )
                }
            </Box>

            <Dialog open={showForm}

                maxWidth
            >
                <div className="p-10">
                    <div className="flex justify-center">
                        <div className="text-2xl text-semi-bold w-full">
                            Ajouter un utilisateur
                        </div>
                        <IconButton
                            onClick={() => setShowForm(false)}
                        >
                            <IoClose className='text-red' />
                        </IconButton>
                    </div>
                    <hr className='my-3' />
                    <FormUser refetch={refetch} />
                </div>
            </Dialog>
        </div>
    )
}

export default User
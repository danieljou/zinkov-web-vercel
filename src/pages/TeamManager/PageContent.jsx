import { Box, Dialog, IconButton, Skeleton } from '@mui/material'
import React, { useState } from 'react'
import { IoClose } from 'react-icons/io5'
import FormParticipant from '../../components/Forms/FormParticipant'
import { Link } from 'react-router-dom'
import { useGetDelegationParticipantQuery } from '../../api/ParticipantApi'
import { DataGrid, frFR } from '@mui/x-data-grid'
import { DelegationCategoriesFunctions } from '../../static/static'

const PageContent = ({ type, title }) => {
    const { data, isLoading, isSuccess, refetch } = useGetDelegationParticipantQuery({ type: DelegationCategoriesFunctions.indexOf(type) })
    const [showForm, setShowForm] = useState(false)

    const ParticipantImage = (params) => {
        const photo = params.row.photo
        return (
            <div className='p-2' >
                <img src={photo} className='w-[50px] h-[50px] rounded-full' alt='' />
            </div>
        )
    }
    const columns = [
        { field: 'Photo', headerName: 'Photo', flex: 1, renderCell: ParticipantImage, height: 70 },
        { field: 'name', headerName: 'Nom', flex: 1, },
        { field: 'surname', headerName: 'Prénom', flex: 1, },
        { field: 'activity', headerName: 'Epreuve', flex: 1, },
        // { field: 'prenom', headerName: 'Option', flex: 1, },
        // Add more columns as needed
    ];

    return (
        <div>
            <h1 className='text-4xl font-semibold' > {title && title} </h1>
            <div className="flex justify-end">
                <Link
                    to={'/team-manager/create'}
                    className='bg-blue-500 px-5 py-3 text-white rounded-sm'>
                    Ajouter
                </Link>
            </div>

            <Dialog
                open={showForm}
                fullWidth
                maxWidth
            >
                <div className="p-5">
                    <div className="flex justify-end">
                        <div className="text-xl font-semibold w-full">
                            Ajouter un membre à votre délégation
                        </div>
                        <div className="">

                            <IconButton
                                onClick={() => setShowForm(false)}
                            >
                                <IoClose />
                            </IconButton>
                        </div>
                    </div>
                    <FormParticipant />
                </div>
            </Dialog>

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
        </div >
    )
}

export default PageContent
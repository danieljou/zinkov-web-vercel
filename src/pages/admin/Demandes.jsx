import React from 'react'
import { useGetParticipantsQuery } from '../../api/ParticipantApi'
import { Box, IconButton, Skeleton } from '@mui/material'
import { DataGrid, frFR } from '@mui/x-data-grid'
import { FiEye } from 'react-icons/fi'
import { Link } from 'react-router-dom'

const Demandes = () => {

    const ParticipantImage = (params) => {
        const photo = params.row.photo
        return (
            <div className='p-2' >
                <img src={photo} className='w-[50px] h-[50px] rounded-full' alt='' />
            </div>
        )
    }
    const ParticipantOptions = (params) => {
        const id = params.row.id
        return (
            <div className='p-2' >
                <Link to={`/admin/preview/${id}`} >
                    <IconButton>
                        <FiEye />
                    </IconButton>
                </Link>
            </div>
        )
    }
    const columns = [
        { field: 'Photo', headerName: 'Photo', flex: 1, renderCell: ParticipantImage, height: 70 },
        { field: 'name', headerName: 'Nom', flex: 1, },
        { field: 'surname', headerName: 'Prénom', flex: 1, },
        { field: 'activity', headerName: 'Epreuve', flex: 1, },
        { field: 'category', headerName: 'Categorie', flex: 1, },
        { field: 'function', headerName: 'Fonction', flex: 1, },
        { field: 'country', headerName: 'Pays', flex: 1, },
        { field: 'option', headerName: 'Option', flex: 1, renderCell: ParticipantOptions },
        // { field: 'prenom', headerName: 'Option', flex: 1, },
        // Add more columns as needed
    ];

    const { data, isLoading, isSuccess } = useGetParticipantsQuery()
    return (
        <div>
            <h1 className="text-semibold text-2xl">
                Liste des demandes d'accréditation
            </h1>

            <Box>
                {
                    !isLoading && isSuccess ?
                        (
                            <div className='my-3'>
                                <DataGrid
                                    rowSelection={false}
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

        </div>
    )
}

export default Demandes
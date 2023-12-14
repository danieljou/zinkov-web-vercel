
export const DELEGATION = {
    'Officiel': {
        color: 'bg-red-500',
        access: [2, 9],
        privileges: []
    },
    "Membre	du	gouvernement": {
        color: 'bg-red-500',
        access: [2, 9],
        privileges: []
    },
    "Chef de délégation": {
        color: 'bg-red-500',
        access: [2, 3, 4, 9],
        privileges: ['R', 'V', 'N', 'T']
    },
    "Administratif": {
        color: 'bg-amber-300',
        access: [9],
        privileges: ['R', 'N', 'T']
    },
    'Chef de mission': {
        color: 'bg-amber-300',
        access: [3, 4, 9],
        privileges: ['R', 'N', 'T']
    },
    "Entraîneur": {
        color: 'bg-amber-300',
        access: [3, 4, 9],
        privileges: ['R', 'N', 'T']
    },
    "Technique": {
        color: 'bg-amber-300',
        access: [2, 3, 4, 9],
        privileges: ['R', 'N', 'T']
    },
    "Médical": {
        color: 'bg-amber-300',
        access: [3, 4, 8, 9],
        privileges: ['R', 'N', 'T']
    },
    "Compétiteur": {
        color: 'bg-amber-300',
        access: [3, 4, 8, 9],
        privileges: ['R', 'N', 'T']
    },
}

export const FUNCTIONS = {
    "Délégation": DELEGATION
}
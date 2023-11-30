import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const ParticipantApi = createApi({
    reducerPath: "ParticipantApi",
    baseQuery: fetchBaseQuery({
        baseUrl: import.meta.env.VITE_BACKEND_URL,
        prepareHeaders: (headers) => {
            const user = localStorage.getItem("user");
            if (user) {
                const userParsed = JSON.parse(user);
                // console.log("USER PARSED ", userParsed);
                headers.set("authorization", `Bearer ${userParsed.token.access}`);
                headers.set("Content-type", "application/json");
                // // console.log(headers.get("authorization"));
            }
            return headers;
        },
    }),
    endpoints: (builder) => ({
        getDelegationParticipant: builder.query({
            query: ({ type }) => `get_delegation_participant/${type}/`
        }),
        getParticipants: builder.query({
            query: () => `get_participant/`
        }),
        getParticipantsDetails: builder.query({
            query: (id) => `get_participant/${id}/`
        }),
        addDelegationParticipant: builder.mutation({
            query: ({ data }) => {
                return (
                    {
                        url: 'add_delegation_participant/',
                        method: 'POST',
                        body: data
                    }
                )
            }
        })

    }),


    //
});

export const {

    useGetDelegationParticipantQuery,
    useAddDelegationParticipantMutation,
    useGetParticipantsQuery,
    useGetParticipantsDetailsQuery
} = ParticipantApi;

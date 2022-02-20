import Head from 'next/head';
import { useCallback, useEffect, useState } from 'react'
import { useRouter } from 'next/router'

import { setAuthToken } from '../lib/ApolloClient.js'
import { gql, useMutation } from '@apollo/client'
import { validate } from 'email-validator'


import Loader from '../components/ui/Loader/Loader'
import Input from '../components/ui/Input/Input'
import Button from '../components/ui/Button/Button'

import VideoSection from '../components/dashboard/VideoSection'
import AsideBar from '../components/ui/AsideBar/AsideBar';

const Dashboard = () => {
    const [loading, setLoading] = useState(true)


    return (
        <div className='container-dash'>
        { !loading ? <LoadingScreen /> : <></>}
        <Head>
          <title>Tribe Video App</title>
          <meta name="description" content="Tribe video app for uploading watching videos" />
          <link rel="icon" href="/profile.png" />
        </Head>

        <AsideBar />

        <VideoSection />


      </div>
    )
}


export default Dashboard;

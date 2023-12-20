import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom'
import Login from './pages/Login'
import { ToastContainer } from 'react-toastify'
import HomePage from './pages/HomePage'
import "react-toastify/dist/ReactToastify.css";
import RedirectUser from './utils/RedirectUser'
import IsAuthenticated from './utils/IsAuthenticated'
import { useDispatch } from 'react-redux'
import { loginSuccess } from './slices/AuthSlice'
import AdminIndex from './pages/admin/AdminIndex'
import TeamManagerIndex from './pages/TeamManager/TeamManagerIndex'
import DashLayout from './components/Admin/DashLayout'
import User from './pages/admin/User'
import Demandes from './pages/admin/Demandes'
import ResetPwd from './pages/ResetPwd'
import PageContent from './pages/TeamManager/PageContent'
import FormParticipant from './components/Forms/FormParticipant'
import PreviewBadge from './components/PreviewBadge'
import Preveiw from './pdf/Preveiw'



function App() {
  const dispatch = useDispatch();
  let user = null;
  try {
    user = localStorage.getItem("user");
  } catch {
    user = null;
  }

  if (user != null) {
    // console.log("  CONECTED USER  : ", JSON.parse(user).token);
    dispatch(loginSuccess(JSON.parse(user)));
    // navigate('/dashboard');
    // setIsLogin(true)
    // document.location.href = '/dashboard'
  }

  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path='/' Component={Login} />
          <Route path='/redirect' element={<RedirectUser />} />
          <Route path='/login' Component={Login} />
          <Route
            path="/reset-password-confirm/:uid/:token/"
            Component={ResetPwd}
          />
          <Route path='/admin' element={
            <IsAuthenticated>
              <DashLayout />
            </IsAuthenticated>
          } >
            <Route exact path="" element={<Navigate to="dash" />} />
            <Route path='dash' Component={AdminIndex} />
            <Route path='users' Component={User} />
            <Route path='demandes' Component={Demandes} />
            <Route path='preview/:id' Component={PreviewBadge} />
            <Route path='academie' Component={Preveiw} />
          </Route>
          <Route path='/team-manager' element={
            <IsAuthenticated>
              <DashLayout />
            </IsAuthenticated>
          }>
            <Route exact path="" element={<Navigate to="dash" />} />
            <Route path='dash' Component={TeamManagerIndex} />
            <Route path='create' Component={FormParticipant} />
            <Route path='officials' element={<PageContent title={'Officiels'} type={'Officiel'} />} />
            <Route path='goverment' element={<PageContent title={'Membres du gouvernement'} type={'Membre	du	gouvernement'} />} />
            <Route path='chief-delegation' element={<PageContent title={'Chefs de délégation'} type={'Chef de délégation'} />} />
            <Route path='chief-mission' element={<PageContent title={'Chefs de missions'} type={'Chef	de	mission'} />} />
            <Route path='staff' element={<PageContent title={'Administratifs'} type={'Administratif'} />} />
            <Route path='chief-trainner' element={<PageContent title={'Entraînneur'} type={'Entraîneur'} />} />
            <Route path='technical-team' element={<PageContent title={'Equipe technique'} type={'Technique'} />} />
            <Route path='medical' element={<PageContent title={'Equipe médicale'} type={'Médical'} />} />
            <Route path='runners' element={<PageContent title={'Competiteurs'} type={'Compétiteur'} />} />
          </Route>
        </Routes>
        <ToastContainer />
      </BrowserRouter>
    </div>
  )
}

export default App

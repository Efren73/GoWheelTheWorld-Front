import * as React from "react"
import { BrowserRouter, Routes, Route } from "react-router-dom"
import {Login, Signup, Admin, MainScreenTO, Question, TourCompleted, AdminSummary, UserSettingsTO, NotFound, UserSettingsAdmin} from './pages'
import { Cart, Description, Multiple, Price, GroupPrivate, UploadPhotos, Meeting, Stops, Languages, Restrictions, ChildPolicy, Assistance, Transportation, Restrooms, Places, Equipment, Faqs, WhatsIncluded, EndPoint, CancelatioPolicy } from "./components"
import {useState, useEffect} from "react"




export const App = () => (
  <BrowserRouter>
    <Routes>
      <Route path="/" element = {<Login />}/>
      <Route path="/login"  element={<Login />} />
      <Route path="signup" element={<Signup />} />
      <Route path="admin/:id" element={<Admin />} />
      <Route path="tour-operator/:id" element={<MainScreenTO />} />
      <Route path="tour-operator/:id/tour-completed/:tourId" element={<TourCompleted />} />
      <Route path="admin/:id/AdminSummary/:tourId" element={<AdminSummary/>} />

      <Route path="admin/:id/Settings" element={<UserSettingsAdmin/>} />
      <Route path="tour-operator/:id/Settings" element={<UserSettingsTO/>} />


      <Route path="tour-operator/:id/question/:tourId/*" element={<Question />}>
        <Route path="name-of-tour" element={<Cart />} />
        <Route path="type-of-tour" element={<Multiple />} />
        <Route path="group-private" element={<GroupPrivate />} />
        <Route path="price" element={<Price />} />
        <Route path="description" element={<Description />} />
        <Route path="upload-photos" element={<UploadPhotos />} />
        <Route path="meeting-point" element={<Meeting />} />
        <Route path="end-point" element={<EndPoint />} />
        <Route path="stops" element={<Stops />} />
        <Route path="languages" element={<Languages />} />
        <Route path="restrictions" element={<Restrictions />} />
        <Route path="children-policy" element={<ChildPolicy />} />
        <Route path="whats-included-general" element={<WhatsIncluded />} />
        <Route path="whats-included-food" element={<WhatsIncluded />} />
        <Route path="whats-included-transport" element={<WhatsIncluded />} />
        <Route path="whats-included-accessibility" element={<WhatsIncluded />} />
        <Route path="assistance" element={<Assistance />} />
        <Route path="transportation" element={<Transportation />} />
        <Route path="restrooms" element={<Restrooms />} />
        <Route path="places" element={<Places />} />
        <Route path="equipment" element={<Equipment />} />
        <Route path="faqs" element={<Faqs />} />
        <Route path="cancelation-policy" element={<CancelatioPolicy />} />
      </Route>
      <Route path="*" element={<NotFound />} />
    </Routes>
  </BrowserRouter>
)
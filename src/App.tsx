import * as React from "react"
import {
  ChakraProvider,
  Box,
  Text,
  VStack,
  Code,
  Grid, 
  theme,
  Switch,
} from "@chakra-ui/react"
import { ColorModeSwitcher } from "./ColorModeSwitcher"
import { Logo } from "./Logo"
import { BrowserRouter, Routes, Route, Link } from "react-router-dom"
import {Login, Signup, Admin, MainScreenTO, Question, TourCompleted, AdminSummary, UserSettings} from './pages'
import { Cart, Description, LateralMenu, Multiple, Price, Summary, GroupPrivate, UploadPhotos, Meeting, Stops, Languages, Restrictions, ChildPolicy, Assistance, Transportation, Restrooms, Places, Equipment, Faqs, WhatsIncluded, EndPoint, CancelatioPolicy } from "./components"
import TopMenu from "./components/TopMenu"

export const App = () => (
  <BrowserRouter>
{ /*   <LateralMenu />
    <Summary /> */}
    <Routes>
      <Route path="/"/>
      <Route path="login"  element={<Login />}  />
      <Route path="signup" element={<Signup />} />
      <Route path="admin" element={<Admin />} />
      <Route path="tour-operator/:id" element={<MainScreenTO />} />
      <Route path="tour-operator/:id/tour-completed/:tourId" element={<TourCompleted />} />
      <Route path="admin/AdminSummary/:tourId" element={<AdminSummary/>} />

      <Route path="admin/Settings" element={<UserSettings/>} />
      <Route path="tour-operator/:id/Settings" element={<UserSettings/>} />


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
        <Route path="whats-included/:category" element={<WhatsIncluded />} />
        <Route path="assistance" element={<Assistance />} />
        <Route path="transportation" element={<Transportation />} />
        <Route path="restrooms" element={<Restrooms />} />
        <Route path="places" element={<Places />} />
        <Route path="equipment" element={<Equipment />} />
        <Route path="faqs" element={<Faqs />} />
        <Route path="cancelation-policy" element={<CancelatioPolicy />} />
      </Route>
      <Route path="*" element={<div>Not found</div>} />
    </Routes>
  </BrowserRouter>
)
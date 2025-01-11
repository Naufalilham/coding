import React from "react";
import { SiTruenas } from "react-icons/si";
import { Navigate, Route, Routes } from "react-router";
import { BrowserRouter } from "react-router-dom";
import LoginPage from "../pages/auth/login";
import Homepage from "../pages/home";

export default function AppRoutes() {
    return (
        <BrowserRouter
            future={{ v7_relativeSplatPath: true, v7_startTransition: true }}>
            <Routes>
                <Route index element={<Navigate to="/home" />}></Route>

                <Route path="/auth">
                    <Route index element={<Navigate to="login" />} />

                    <Route path="login" element={<LoginPage/>}/>
                </Route>

                <Route path="/home" element={<Homepage/>}/>
            </Routes>
        </BrowserRouter>
    );
}

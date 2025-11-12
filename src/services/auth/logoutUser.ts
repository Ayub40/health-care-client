"use server"

import { redirect } from "next/navigation";
import { deleteCookie } from "./tokenHandlers";

export const logoutUser = async () => {
    await deleteCookie("accessToken");
    await deleteCookie("refreshToken");

    redirect("/login?loggedOut=true");
}

// kivave server action theke client e redirect korte hoy
// server component er search Params theke kivabe query parameter ber korte hoy 
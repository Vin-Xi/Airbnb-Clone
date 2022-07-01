import { createAction } from "@reduxjs/toolkit";
import { IListing } from "../../Components/Lister/listings";
export const save = createAction<IListing>("save/add")
export const del = createAction<IListing>("save/del")
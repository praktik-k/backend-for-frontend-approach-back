import { Router } from "express";
import { getAllCountries, getCountriesByCode, getCountryByName } from "../controlers/countries";

 const router = Router()

router.get('/', getAllCountries)

router.get('/name/:name', getCountryByName)

router.get('/alpha', getCountriesByCode)

export default router
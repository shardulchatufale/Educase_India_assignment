import express from "express";
import { addSchool, listSchools } from "../Conntroller/SchoolController.js";

const router = express.Router();

router.post("/addSchool", addSchool);
router.get("/listSchools", listSchools);

export default router;

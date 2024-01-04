import { Router } from "express";
import { getAllLesson, getLessonById, postLesson, updateLesson, deleteLesson } from "../controllers/lesson.js";

const router = new Router();

// Lesson get all
router.get("/lessons", getAllLesson)
router.get("/lesson/:id", getLessonById)
router.post("/lesson", postLesson)
router.put("/lesson/:id", updateLesson)
router.delete("/lesson/:id", deleteLesson)

export default router
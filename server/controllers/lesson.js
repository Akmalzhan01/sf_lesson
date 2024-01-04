import Lesson from "../models/Lesson.js";



// getAllLesson
export const getAllLesson = async (req, res) => {
  try {
    const allLessons = await Lesson.find()
    res.json(allLessons)
  } catch (error) {
    res.json({ message: "Error getting" })
  }
}

// getLessonById
export const getLessonById = async (req, res) => {
  try {
    const lesson = await Lesson.findById(req.params.id)
    res.json(lesson)
  } catch (error) {
    res.json({ message: "Error getting" })
  }
}

// post lesson
export const postLesson = async (req, res) => {
  const newPostLesson = new Lesson(req.body)
  try {
    const post = await newPostLesson.save()
    res.json(post)
  } catch (error) {
    res.json({ message: "Error posting" })
  }
}

// update lesson
export const updateLesson = async (req, res) => {
  try {
    const updateLesson = await Lesson.updateOne({ _id: req.params.id }, { $set: req.body })
    res.json(updateLesson)
  } catch (error) {
    res.json({ message: "Error updating" })
  }
}

// delete lesson
export const deleteLesson = async (req, res) => {
  try {
    const deleteLesson = await Lesson.deleteOne({ _id: req.params.id})
    res.json(deleteLesson)
  } catch (error) {
    res.json({ message: "Error deleting"})
  }
}
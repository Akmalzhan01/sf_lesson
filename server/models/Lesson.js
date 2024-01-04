import mongoose from "mongoose";

const LessonSchema = new mongoose.Schema({
  count: {
    type: String,
    required: true,
  },
  imgUrl1: {
    type: String,
    required: true,
  },
  imgUrl2: {
    type: String,
    required: true,
  },
  videoUrl1: {
    type: String,
    required: true,
  },
  videoUrl2: {
    type: String,
  },
},
  { timestamps: true }
)

export default mongoose.model("Lesson", LessonSchema)
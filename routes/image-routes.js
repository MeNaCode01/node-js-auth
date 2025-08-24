import express from "express";
import authMiddleware from "../middleware/auth-middleware.js";
import adminMiddleware from "../middleware/admin-middleware.js";
import uploadMiddleware from "../middleware/upload-middleware.js";
import {
  uploadImageController,
  fetchImagesController,
  deleteImageController,
} from "../controllers/image-controller.js";

const router = express.Router();

// Upload image
router.post(
  "/upload",
  authMiddleware,
  adminMiddleware,
  uploadMiddleware.single("image"),
  uploadImageController
);

// Get all images
router.get("/get", authMiddleware, fetchImagesController);

// Delete image route
router.delete("/:id", authMiddleware, adminMiddleware, deleteImageController);

export default router;

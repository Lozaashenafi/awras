import { NextFunction, Request, Response } from "express";
import { prisma } from "../../config/prisma.js";

const courseController = {
  createCourse: async (req: Request, res: Response, next: NextFunction) => {
    try {
      const course = await prisma.course.create({
        data: {
          courseName: req.body.course.courseName,
          categoryId: req.body.course.categoryId,
          price: req.body.course.price,
          instructorId: req.body.course.instructorId,
          imageUrl: req.body.course.imageUrl,
        },
      });
    
      await prisma.courseInfo.create({
        data: {
          courseId: course.id,
          prerequisite: req.body.courseInfo.prerequisite,
          description: req.body.courseInfo.description,
          objectives: {
            create: req.body.courseInfo.objectives.map((obj: string) => ({ objective: obj })),
          },
        },
      });
      await prisma.courseIntro.create({
        data: {
          courseId: course.id,
          videoUrl: req.body.courseIntro.videoUrl,
          outline: req.body.courseIntro.outline,
        },
      });
      for (const section of req.body.sections) {
        const createdSection = await prisma.section.create({
          data: {
            courseId: course.id,
            sectionName: section.sectionName,
            objective: section.objective,
            position: section.position,
          },
        });

        if (section.videos) {
          await prisma.video.createMany({
            data: section.videos.map((video: { videoUrl: string, description: string }) => ({
              sectionId: createdSection.id,
              videoUrl: video.videoUrl,
              description: video.description,
            })),
          });
        }
        if (section.pdfs) {
          await prisma.pdf.createMany({
            data: section.pdfs.map((pdf: { pdfUrl: string, description: string }) => ({
              sectionId: createdSection.id,
              pdfUrl: pdf.pdfUrl,
              description: pdf.description,
            })),
          });
        }
      }

      return res.status(200).json({
        success: true,
        message: 'Course created successfully!',
        data: course,
      });
    } catch (error) {
      next(error);
    }
  },
};

export default courseController;

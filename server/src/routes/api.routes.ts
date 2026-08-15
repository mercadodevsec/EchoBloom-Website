import { Router } from 'express';
import { contactSchema } from '../schemas.js';
import { createContactSubmission, createInternApplication } from '../services/submission.service.js';
import { validateBody, errorHandler } from '../middleware/errorHandler.js';
import { uploadResume } from '../middleware/upload.js';

export const apiRouter = Router();

apiRouter.get('/health', (_req, res) => {
  res.json({ ok: true });
});

apiRouter.post('/contact', validateBody(contactSchema), async (req, res, next) => {
  try {
    const submission = await createContactSubmission(req.body);
    res.status(201).json({ id: submission.id, status: 'received' });
  } catch (error) {
    next(error);
  }
});

apiRouter.post('/intern/applications', (req, res, next) => {
  uploadResume(req, res, async (uploadError) => {
    if (uploadError) {
      return next(uploadError);
    }

    if (!req.file) {
      return res.status(400).json({ error: 'Resume file is required.' });
    }

    try {
      const application = await createInternApplication(req.body, req.file);
      res.status(201).json({ id: application.id, status: 'submitted' });
    } catch (error) {
      next(error);
    }
  });
});

apiRouter.use(errorHandler);

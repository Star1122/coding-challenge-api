import { Router } from 'express';
import fetchRoutes from './fetch.route';

const router = Router();

router.use('/api', fetchRoutes);

export default router;

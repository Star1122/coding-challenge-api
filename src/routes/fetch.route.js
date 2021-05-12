import { Router } from "express";
import getUrlContent from '../controllers/fetch.controller';

const router = Router();

router.get('/get-url-content', getUrlContent);

export default router;

import {Router} from "express";
import QRScanController from "../../packages/qr_scan/QRScanController.js";

const qrRouter = Router()

qrRouter.get('/:id', QRScanController.scan)


export default qrRouter
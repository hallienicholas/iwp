import * as express from 'express';
import 
const router = express.Router();

router.get('/api/hello', (req, res, next) => {
    res.json('World');
});

router.get('/api/iwp_sensor_data', async (req, res) => {

})

export default router;
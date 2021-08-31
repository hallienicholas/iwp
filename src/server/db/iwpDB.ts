import { Connection } from './index';

export const all = async() => {
    return new Promise((resolve, reject) => {
        Connection.query('SELECT * from iwp_sensor_data', (err, results) => {
            if(err){
                return reject(err);
            }
            resolve(results);
        });
    });
}

export default {
    all
}
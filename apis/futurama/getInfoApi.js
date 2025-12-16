import http from 'k6/http';
import { check, sleep } from 'k6';
import { assertStatus } from '../../utils/httpUtils.js';
import { ENV } from '../../utils/env.js';

export const options = {
    executor: 'ramping-vus',
    startVUs: 1,
    stages: [
        { duration: '5s', target: 10 },
        // { duration: '30s', target: 10 },
        // { duration: '30s', target: 20 },
        // { duration: '30s', target: 20 },
        // { duration: '30s', target: 30 },
        // { duration: '30s', target: 30 },
        // { duration: '30s', target: 40 },
        // { duration: '30s', target: 40 },
        // { duration: '30s', target: 50 },
        // { duration: '30s', target: 50 }
    ]
};

export function getInfoApi() {
    const res = http.get(`${ENV.BASE_URL_FUTURAMA}/info`);
    assertStatus(res, 'get_info: status 200', 200);
    console.log(res.body);
    check(res, {
        'Respuesta contiene datos': (r) => JSON.parse(r.body)?.length > 0
    });
    sleep(1);
}

import { check } from 'k6';
import { ENV } from './env.js';

export const HEADERS = {
    'x-api-key': ENV.API_KEY
};

export function assertStatus(res, name, status) {
    check(res, { [name]: (r) => r.status === status });
}

export function loginReqres() {
    const payload = JSON.stringify({ email: ENV.EMAIL, password: ENV.PASSWORD });
    const res = http.post(`${ENV.BASE_URL_REQRES}/api/login`, payload, {headers: HEADERS});
    check(res, {
        'login status 200': (r) => r.status === 200,
        'token exists': (r) => JSON.parse(r.body).token !== undefined,
    });
    const token = JSON.parse(res.body).token;
    return token;
}

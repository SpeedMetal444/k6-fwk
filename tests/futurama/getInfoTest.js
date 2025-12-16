import { options as infoOptions, getInfoApi } from '../../apis/futurama/getInfoApi.js';

export const options = {
    scenarios: {
        get_info: {
            ...infoOptions,
            exec: 'getInfoApi'
        }
    },
    thresholds: {
        'http_req_duration': ['p(95)<500'],
        'http_req_failed': ['rate<0.01'],
    },
};

export { getInfoApi };

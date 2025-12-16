import { options as episodesOptions, getEpisodesApi } from '../../apis/futurama/getEpisodesApi.js';

export const options = {
    scenarios: {
        get_episodes: {
            ...episodesOptions,
            exec: 'getEpisodesApi'
        }
    },
    thresholds: {
        'http_req_duration': ['p(95)<500'],
        'http_req_failed': ['rate<0.01'],
    },
};

export { getEpisodesApi };

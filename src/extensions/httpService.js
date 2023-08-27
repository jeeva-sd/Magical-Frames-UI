import axios from 'axios';

class HttpService {
    constructor() {
        const instance = axios.create({
            baseURL: true ? 'https://magical-frames-api.onrender.com/' : 'http://localhost:3000/',
            timeout: 300000,
        });

        this.instance = instance;
        this.pendingRequests = new Map();
    }

    cancelPendingRequests(url) {
        if (this.pendingRequests.has(url)) {
            const cancelToken = this.pendingRequests.get(url);
            cancelToken.cancel('Request cancelled due to duplication');
        }
        this.pendingRequests.delete(url);
    }

    request(config) {
        this.cancelPendingRequests(config.url);

        const source = axios.CancelToken.source();
        this.pendingRequests.set(config.url, source);

        config.cancelToken = source.token;
        return this.instance.request(config)
            .then((response) => {
                this.pendingRequests.delete(config.url);
                return response;
            })
            .catch((error) => {
                if (axios.isCancel(error)) {
                    console.log('Request cancelled:', error.message);
                } else {
                    console.error('Request error:', error);
                }
                throw error;
            });
    }

    get(url, config) {
        return this.request({ ...config, method: 'get', url });
    }

    post(url, data, config) {
        return this.request({ ...config, method: 'post', url, data });
    }

    put(url, data, config) {
        return this.request({ ...config, method: 'put', url, data });
    }

    delete(url, data, config) {
        return this.request({ ...config, method: 'delete', url, data });
    }
}

export default new HttpService();

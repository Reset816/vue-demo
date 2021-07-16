import {
    post
} from '../http';

export default {
    auth(data) {
        return new Promise((resolve, reject) => {
            // post('/oauth/token', data)
            //     .then(res => {
            //         resolve(res);
            //     })
            //     .catch(error => {
            //         reject(error);
            //     });
            setTimeout(() => {
                resolve({
                    code: 200,
                    message: '请求成功',
                    data: {
                        access_token: 'adeffDFGgadfff'
                    }
                });
            }, 1000);
        });
    }
};
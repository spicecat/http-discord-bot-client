import Cookies from 'js-cookie';
import superagent from 'superagent';
import Cache from 'superagent-cache';
import Throttle from 'superagent-throttle';
import dotenvJSON from 'dotenv-json';

dotenvJSON();

const throttle = new Throttle({
    active: true,
    rate: 2,
    ratePer: 1000,
    concurrent: 1,
});

export const createEndpoint = (path) => (op, endpoint = '', data = false) => {
    let request = superagent[op](`${data?.server}${path}${endpoint}`)
        .set('Content-Type', 'application/json')
        .use(throttle.plugin);

    if (data)
        if (op === 'get' || op === 'delete') request = request.query(data);
        else if (op === 'post' || op === 'patch') request = request.send(data);

    return request;
};
import { createEndpoint } from 'services/api';

const botAPI = createEndpoint('/bot');

const getCommands = () => botAPI('get');
const sendSlash = botAPI('post',);

export { getCommands, sendSlash };
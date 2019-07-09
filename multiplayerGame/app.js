"use strict";

import Home         from "./views/Home.js";
import Rankings     from './views/Rankings.js';
import Tournament     from './views/Tournament.js';
import Error404     from './views/Error404.js';
import Utils        from './assets/utils/utils.js';

// List of supported routes. Any url other than these routes will throw a 404 error
const routes = {
    '/'             : Home
    , '/rankings'      : Rankings
    , '/tournament'      : Tournament
};

const router = async () => {
    const content = null || document.querySelector('#content');

    let request = Utils.parseRequestURL();
    let parsedURL = (request.resource ? '/' + request.resource : '/') + (request.verb ? '/' + request.verb : '');
    let page = routes[parsedURL] ? routes[parsedURL] : Error404;
    content.innerHTML = await page.render();
    await page.after_render();
};
window.addEventListener('hashchange', router);
window.addEventListener('load', router);

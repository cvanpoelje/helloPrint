"use strict";

import Home         from "./views/Home.js";
import Error404     from './views/Error404.js';
import Rankings     from './views/Rankings.js';
import Utils        from './assets/utils/utils.js';

// List of supported routes. Any url other than these routes will throw a 404 error
const baseUrl = "/helloPrint/multiPlayerGame";
const routes = {
    [baseUrl+'/']               : Home
    , [baseUrl+'/Rankings']     : Rankings
    // , '/p/:id'      : PostShow
    // , '/register'   : Register
};

const router = async () => {
    // Lazy load view element:
    const content = null || document.querySelector('#content');

    // Get the parsed URl from the addressbar
    let request = Utils.parseRequestURL();

    // Parse the URL and if it has an id part, change it with the string ":id"
    let parsedURL = (request.resource ? baseUrl + request.resource : '/') + (request.id ? '/:id' : '') + (request.verb ? '/' + request.verb : '')

    // Get the page from our hash of supported routes.
    // If the parsed URL is not in our list of supported routes, select the 404 page instead
    let page = routes[parsedURL] ? routes[parsedURL] : Error404
    content.innerHTML = await page.render();
    await page.after_render();
};
// Listen on hash change:
window.addEventListener('hashchange', router);

// Listen on page load:
window.addEventListener('load', router);

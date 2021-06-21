import 'react';
import 'react-dom';
import component from './component';
import { bake } from './shake';
import './main.css';
bake();

document.body.appendChild(component());

/*

    surviveJS

    env variables chapter 

    DefinePlugin can allow webpack 
    to pick the right code to load based on environment 

    if (process.env.NODE_ENV === 'production') {
        module.exports = require('./store.prod');
    } else {
        module.exports = require('./store.dev');
    }

    which paths of the source are included in the build.

    (EnvironmentPlugin can also be used, which maps the system
        level env variables to the source 
        (vs doing it through your code))

    DP operates based on free variables and replaces them as webpack 
    analyzes the source code. 

    *ensure build has good cache invalidation - don't want to save
    old builds into the cache and send that to users...
        -> include hashes to generated filenames in next chapter..

        -> client can notice if assets have changed and fetch
        updated versions.
*/

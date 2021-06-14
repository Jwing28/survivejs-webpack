import 'react';
import 'react-dom';
import component from './component';
import { bake } from './shake';
import './main.css';
bake();

document.body.appendChild(component());

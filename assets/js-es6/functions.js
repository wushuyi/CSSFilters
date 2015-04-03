/**
 * Created by shuyi.wu on 2015/4/3.
 */
import {vendorPrefixCss, vendorPrefixJs} from './util/vendorPrefix';

let imgEl = document.getElementById('test-img');
let filtersEl = document.getElementById('filters');
let options = {
    blur: 0,
    brightness: 0,
    contrast: 0,
    grayscale: 0,
    'hue-rotate': 0,
    invert: 0,
    opacity: 0,
    saturate: 0,
    sepia: 0,
    dropShadow: {
        X: 0,
        Y: 0,
        radius: 0,
        R: 0,
        G: 0,
        B: 0,
        A: 0.01
    }
};
let dropShadow = options.dropShadow;

let optionsChange = function () {
    var opt = options;
    var optDS = opt.dropShadow;
    var style = '';
    if (opt.blur) {
        style += 'blur(' + opt.blur + 'px) ';
    }
    if (opt.brightness) {
        style += 'brightness(' + opt.brightness + '%) ';
    }
    if (opt.contrast) {
        style += 'contrast(' + opt.contrast + '%) ';
    }
    if (opt.grayscale) {
        style += 'grayscale(' + opt.grayscale + '%) ';
    }
    if (opt['hue-rotate']) {
        style += 'hue-rotate(' + opt['hue-rotate'] + 'deg) ';
    }
    if (opt.invert) {
        style += 'invert(' + opt.invert + '%) ';
    }
    if (opt.opacity) {
        style += 'opacity(' + opt.opacity + '%) ';
    }
    if (opt.saturate) {
        style += 'saturate(' + opt.saturate + '%) ';
    }
    if (opt.sepia) {
        style += 'sepia(' + opt.sepia + '%)';
    }
    if (optDS.X || optDS.Y || optDS.radius || optDS.R || optDS.G || optDS.B || optDS.A) {
        style += 'drop-shadow( ' + optDS.X + 'px ' + optDS.Y + 'px ' + optDS.radius + 'px ' +
        'rgba(' + optDS.R + ',' + optDS.G + ',' + optDS.B + ', ' + optDS.A + '))';
    }
    imgEl.style[vendorPrefixJs + 'Filter'] = style;
    filtersEl.textContent = vendorPrefixCss + 'filter: ' + style;
};


let gui = new dat.GUI();

gui.add(options, 'blur', 0, 100).step(1).onChange(optionsChange);
gui.add(options, 'brightness', 0, 100).step(1).onChange(optionsChange);
gui.add(options, 'contrast', 0, 100).step(1).onChange(optionsChange);
gui.add(options, 'grayscale', 0, 100).step(1).onChange(optionsChange);
gui.add(options, 'hue-rotate', 0, 100).step(1).onChange(optionsChange);
gui.add(options, 'invert', 0, 100).step(1).onChange(optionsChange);
gui.add(options, 'opacity', 0, 100).step(1).onChange(optionsChange);
gui.add(options, 'saturate', 0, 100).step(1).onChange(optionsChange);
gui.add(options, 'sepia', 0, 100).step(1).onChange(optionsChange);

let f2 = gui.addFolder('drop-shadow');
f2.add(dropShadow, 'X', -50, 50).step(1).onChange(optionsChange);
f2.add(dropShadow, 'Y', -50, 50).step(1).onChange(optionsChange);
f2.add(dropShadow, 'radius', 0, 100).step(1).onChange(optionsChange);
f2.add(dropShadow, 'R', 0, 100).step(1).onChange(optionsChange);
f2.add(dropShadow, 'G', 0, 100).step(1).onChange(optionsChange);
f2.add(dropShadow, 'B', 0, 100).step(1).onChange(optionsChange);
f2.add(dropShadow, 'A', 0, 1).step(0.01).setValue(0).onChange(optionsChange);
f2.open();
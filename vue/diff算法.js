var el = require("./element.js")
var ul = el('div', { id: 'virtual-dom' }, [
    el('p', {}, ['Virtual DOM']),
    el('ul', { id: 'list' }, [
        el('li', { class: 'item' }, ['Item 1']),
        el('li', { class: 'item' }, ['Item 2']),
        el('li', { class: 'item' }, ['Item 3'])
    ]),
    el('div', {}, ['Hello World'])
])
console.log(ul)
var ulRoot = ul.render();
document.body.appendChild(ulRoot);

var diff = require("list-diff2")

var ul1 = el('div', { id: 'virtual-dom' }, [
    el('p', {}, ['Virtual DOM']),
    el('ul', { id: 'list' }, [
        el('li', { class: 'item' }, ['Item 1']),
        el('li', { class: 'item' }, ['Item 2']),
        el('li', { class: 'item' }, ['Item 3'])
    ]),
    el('div', {}, ['Hello World'])
])
var ul2 = el('div', { id: 'virtual-dom' }, [
    el('p', {}, ['Virtual DOM']),
    el('ul', { id: 'list' }, [
        el('li', { class: 'item' }, ['Item 21']),
        el('li', { class: 'item' }, ['Item 23'])
    ]),
    el('p', {}, ['Hello World'])
])
var patches = diff(ul1, ul2);
console.log('patches:', patches);
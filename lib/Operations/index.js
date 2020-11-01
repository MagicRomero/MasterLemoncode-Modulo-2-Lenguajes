"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Merge = exports.Clone = exports.Concat = exports.Last = exports.Init = exports.Tail = exports.Head = void 0;
exports.Head = (target) => {
    const [head] = target;
    return head;
};
exports.Tail = (target) => {
    const [first, ...rest] = target;
    return rest;
};
exports.Init = (target) => target.slice(0, -1);
exports.Last = (target) => [...target].pop();
exports.Concat = (source, ...arrays) => [].concat(...source, ...arrays);
exports.Clone = (source) => (Object.assign({}, source));
exports.Merge = (source, toMerge) => (Object.assign(Object.assign({}, source), toMerge));

const writing = {
    update: function (el, binding, vnode) {
        console.log(el.value);
        el.style.width = el.value.length * 8 + 'px';
    }
}


export default {
    writing
}

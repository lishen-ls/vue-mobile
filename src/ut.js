export default {
    debounce(fn, delay = 300) {
        var time;
        return function () {
            if (time) {
                clearTimeout(time);
            }
            time = setTimeout(() => {
                fn.apply(this, arguments);
            }, delay);
        };
    },
    throttle(fn, delay = 300) {
        let canRun = true;
        return function () {
            if (!canRun) return;
            canRun = false;
            setTimeout(() => {
                fn.apply(this, arguments);
                canRun = true;
            }, delay);
        };
    }
}
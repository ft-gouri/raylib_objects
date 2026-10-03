function transform(i) {
    const rem = i % 10;
    const quot = (i / 10) >> 0;

    const toggle = quot % 2;
    const x = toggle * (9 - rem) + (1 - toggle) * rem;
    const y = 9 - quot;
    return { x, y };
}

// 0 = {x:0, y:9}
// 9 = {x:9, y:9}
// 10 = {x:9, y:8}
// 19 = {x:0, y:8}
// 20 = {x:0, y:7}
// 29 = {x:9, y:7}

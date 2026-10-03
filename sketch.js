const r = require('raylib');

function running() {
    return !r.WindowShouldClose();
}

let move = 2;
let change = 10;

const winRect = {
    x: 0,
    y: 0,
    width: 100,
    height: 500,
};
const noRed = {
    r: 255,
    g: 255,
    b: 255,
    a: 255,
};
const white = {
    r: 255,
    g: 255,
    b: 255,
    a: 1,
};
const black = {
    r: 0,
    g: 0,
    b: 0,
    a: 255,
};
const yellow = {
    r: 2,
    g: 55,
    b: 174,
    a: 255,
};
const buttonPosition = {
    x: 100,
    y: 100,
};
const buttonSize = {
    x: 200,
    y: 50,
};

function setup() {
    r.SetTraceLogLevel(r.LOG_NONE);
    r.InitWindow(500, 500, 'Particle Scanner');
    r.SetTargetFPS(60);
}

function draw() {
    r.BeginDrawing();
    //r.ClearBackground(white);
    r.DrawRectangleRec(winRect, yellow);
    // r.DrawRectangle(0, 0, 500, 500, white);
    // r.DrawRectangleLines(
    //     winRect.x,
    //     winRect.y,
    //     winRect.width,
    //     winRect.height,
    //     black,
    // );
    // r.DrawRectangleV(buttonPosition, buttonSize, yellow);
    r.EndDrawing();
}
function update() {
    yellow.r += change;
    yellow.b += change;
    yellow.g += change;
    change = yellow.r > 255 || yellow.r < 1 ? -change : change;
    winRect.x >= 500 ? (winRect.x = -winRect.width) : (winRect.x += move);
}
function teardown() {
    r.CloseWindow();
}

module.exports = {
    running,
    setup,
    draw,
    update,
    teardown,
};

const r = require('raylib');

const window = {
    x: 50,
    y: 50,
    width: 400,
    height: 300,
};

const color = {
    r: 50,
    g: 150,
    b: 220,
    a: 255,
};

function setup() {
    r.InitWindow(500, 400, 'Colored Window');
    r.SetTargetFPS(60);
}

function draw() {
    r.BeginDrawing();
    r.ClearBackground(r.BLACK);

    r.DrawRectangleRec(window, color);

    r.DrawRectangleLines(
        window.x,
        window.y,
        window.width,
        window.height,
        r.WHITE,
    );

    r.EndDrawing();
}

function teardown() {
    r.CloseWindow();
}

setup();

while (!r.WindowShouldClose()) {
    draw();
}

teardown();

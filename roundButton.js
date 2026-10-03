const r = require('raylib');

const button = {
    x: 50,
    y: 60,
    width: 200,
    height: 80,
    roundness: 0.5,
};

function setup() {
    r.InitWindow(300, 200, 'Rounded Button');
    r.SetTargetFPS(60);
}

function draw() {
    r.BeginDrawing();
    r.ClearBackground(r.WHITE);

    r.DrawRectangleRounded(button, button.roundness, 10, r.BLUE);

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

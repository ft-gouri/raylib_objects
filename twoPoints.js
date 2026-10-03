const r = require('raylib');

const leftPoint = {
    x: 50,
    y: 100,
};

const rightPoint = {
    x: 250,
    y: 100,
};

function setup() {
    r.InitWindow(300, 300, 'Two Points');
    r.SetTargetFPS(60);
}

function draw() {
    r.BeginDrawing();
    r.ClearBackground(r.BLACK);

    r.DrawCircleV(leftPoint, 20, r.RED);
    r.DrawCircleV(rightPoint, 20, r.BLUE);

    r.DrawLineV(leftPoint, rightPoint, r.WHITE);

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

const r = require('raylib');

const target = {
    x: 400,
    y: 200,
    radius: 80,
};

function setup() {
    r.InitWindow(800, 400, 'Simple Target');
    r.SetTargetFPS(60);
}

function draw() {
    r.BeginDrawing();
    r.ClearBackground(r.WHITE);

    r.DrawCircle(target.x, target.y, target.radius, r.RED);
    r.DrawCircle(target.x, target.y, target.radius / 2, r.WHITE);
    r.DrawCircle(target.x, target.y, target.radius / 4, r.RED);

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

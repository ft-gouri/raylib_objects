const r = require('raylib');

const ball = {
    x: 400,
    y: 200,
    radius: 30,
    color: r.RED,
};

function setup() {
    r.InitWindow(800, 400, 'Ball');
    r.SetTargetFPS(60);
}

function draw() {
    r.BeginDrawing();
    r.ClearBackground(r.WHITE);

    r.DrawCircle(ball.x, ball.y, ball.radius, ball.color);

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

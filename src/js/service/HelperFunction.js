export function getRandomHexColor() {
    const randomColor = Math.floor(Math.random() * 0xFFFFFF);
    return randomColor;
}

export function polygonArea(vertices) {
    let area = 0;
    const n = vertices.length;
    for (let i = 0; i < n; i++) {
        const j = (i + 1) % n;
        area += vertices[i].x * vertices[j].y;
        area -= vertices[j].x * vertices[i].y;
    }
    area = Math.abs(area) / 2;
    return area;
}


export function calculateTotalArea(shapes) {
    return Math.floor(shapes.reduce((total, shape) => total + shape.getArea(), 0));
}
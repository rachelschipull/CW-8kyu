//Write a function that returns the total surface area and volume of a box as an array: [area, volume]

function getSize(width, height, depth) {
    let area = (depth * width + depth * height + width * height) * 2
    let volume = width * height * depth
    return [area, volume]
}
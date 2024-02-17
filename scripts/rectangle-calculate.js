
function calculateRectangleArea()
{
    const rectangleWidth = parseFloat(document.getElementById('rectangle-width').value);
    console.log(rectangleWidth);

    const rectangleLength = parseFloat(document.getElementById('rectangle-length').value);
    console.log(rectangleLength);

    // calculating rectangle area
    const rectangleArea = rectangleLength * rectangleWidth;
    console.log('Area of the rectangle is: ' + rectangleArea);

    // display rectangle area
    const areaSpan = document.getElementById('area-span');
    areaSpan.innerText = rectangleArea;
}
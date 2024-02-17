// 1. get base value of the triangle
// 2. added an id in the base input field
// 3. use getElementById to access the input field
// 4. get value from the input field (value is string now)
// 5. convert the value to a number, use parseFloat as the value can be a fraction



function calculateTriangleArea()
{
    const triangleBaseInput = document.getElementById('triangle-base');
    const triangleBaseText = triangleBaseInput.value;
    const triangleBase = parseFloat(triangleBaseText);
    // console.log(triangleBase);

    const triangleHeightInput = document.getElementById('triangle-height');
    const triangleHeightText = triangleHeightInput.value;
    const triangleHeight = parseFloat(triangleHeightText);
    // console.log(triangleHeight);

    // calculating triangle area
    const triangleArea = 0.5 * triangleBase * triangleHeight;
    console.log('Area of the triangle is: ' + triangleArea);

    // display triangle area
    const areaSpan = document.getElementById('area-span');
    areaSpan.innerText = triangleArea;
}
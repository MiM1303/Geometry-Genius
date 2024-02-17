function calculateTriangleArea()
{
    const base = getInputValue('triangle-base');
    const height = getInputValue('triangle-height');

    const area = 0.5 * base * height;
    displayArea(area);

}

function calculateRectangleArea()
{
    const width = getInputValue('rectangle-width');
    const length = getInputValue('rectangle-length');

    const area = width * length;
    displayArea(area);

}

function calculateParallelogramArea()
{
    const base = getInputValue('parallelogram-base');
    const height = getInputValue('parallelogram-height');

    const area = base * height;
    displayArea(area);

}

function calculateRhombusArea()
{
    const d1 = getInputValue('rhombus-d1');
    const d2 = getInputValue('rhombus-d2');

    const area = 0.5 * d1 * d2;
    displayArea(area);

}

function calculatePentagonArea()
{
    const perimeter = getInputValue('pentagon-perimeter');
    const apothem = getInputValue('pentagon-apothem');

    const area = 0.5 * perimeter * apothem;
    displayArea(area);

}

function calculateEllipseArea()
{
    const aAxis = getInputValue('ellipse-a-axis');
    const bAxis = getInputValue('ellipse-b-axis');

    console.log(Math.PI);
    const area = Math.PI * aAxis * bAxis;
    displayArea(area);

}



function getInputValue(inputId)
{
    return parseFloat(document.getElementById(inputId).value);
}

function displayArea(area)
{
    document.getElementById('area-span').innerText = area;
}
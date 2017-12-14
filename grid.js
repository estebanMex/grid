var baseGrid = 23;
var body = document.body;
var firtsTile = '.tile:first-child';
var secondTile = '.tile:nth-child(2)';
var thirdTile = '.tile:nth-child(2)';
var pageContent = '.page-content';
var tileTarget = pageContent;
var elementTarget = document.querySelector(tileTarget);
var infosElementtarget = elementTarget.getBoundingClientRect();
var colorGuide = '#' + Math.floor(Math.random() * 16777215).toString(16);


// clean elements existants
$('.guide, .numGuide').remove();

function createNumberGuide(baseGrid, posLeft, id) {
    var numGuide = document.createElement('div');
    var styles = [];
    var left = 'left: ' + posLeft + 'px;';
    var bottom = id % 2 < 1 ? 30 : 0;
    //var colorNum = id % 2 < 1 ? 'black' : 'white';
    var colorNum = 'black';
    var width = infosElementtarget.width / baseGrid;
    styles.push('position:fixed;', 'bottom:' + bottom + 'px;','font-size:'+((width / 3) *2 )+'px;', 'background: rgba(0, 244, 15, 0.36);', 'width:' + width + 'px;', 'height:30px;', 'text-align:center;', 'line-height:30px;', 'text-shadow: white 0 0 10px;', 'color: ' + colorNum + ';', 'z-index: 9999999999 !important;', left);

    numGuide.classList.add('numGuide');
    var id = document.createTextNode(id + 1);
    numGuide.appendChild(id);
    numGuide.setAttribute('style', styles.join(' '));

    return $(numGuide);
}

function createGuide(left) {
    var guide = document.createElement('div');
    var styles = [];
    var left = 'left: ' + left + 'px;';

    styles.push('position:absolute;', 'opacity: 0.5;', 'top:0;', ' z-index: 99999999999 !important;', 'border: 1px solid ' + colorGuide + ';', 'height:100%;', left);

    guide.classList.add('guide');
    guide.setAttribute('style', styles.join(' '));

    return guide;
}

function generateGuides(targetElem, baseGrid) {
    baseGrid = baseGrid || 32;
    var guides = [];
    var numbers = [];
    var tempPos;
    var left = targetElem.left;
    var space = targetElem.width / baseGrid;

    for (var i = 0; i <= baseGrid; i++) {
        tempPos = left + (space * i);
        guides.push(createGuide(tempPos));

        if ( i <= (baseGrid-1)) {
            numbers.push(createNumberGuide(baseGrid, tempPos, i));
        }
    }

    return {
        'guides': guides,
        'numbers': numbers
    };
}
var grid = generateGuides(infosElementtarget, baseGrid);
$('body').append(grid.guides);
$('body').append(grid.numbers);


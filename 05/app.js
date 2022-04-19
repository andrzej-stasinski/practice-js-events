console.log('ZAD 5')

const stats = {
    paragraphs: {
        'p1': 0,
    },
    links: {
        '/dolor.html': 0,
    }
};

/* tutaj umieść swój kod */


// A
// -------------
const links = document.querySelectorAll('.link')
console.log(links)

let countLink = 0
const clickLink = function(e) {
    e.preventDefault()
    e.stopPropagation()
    console.log(this.tagName)
    countLink++
    console.log('count A', countLink)
}

links.forEach(link => {
    link.addEventListener('click', clickLink)
})

// P
// ---------------
const paragraphs = document.querySelectorAll('.text')
console.log(paragraphs)

let countP = 0
const clickP = function(e) {
    e.preventDefault()
    countP++
    console.log('count P', countP)
}

paragraphs.forEach(p => {
    p.addEventListener('click', clickP)
})

/* nie modyfikuj kodu poniżej, ale przeanalizuj go */

const statsElement = document.querySelector('.stats');
const fireCustomEvent = function(element, name) {
    console.log(element, '=>', name);

    const event = new CustomEvent(name, {
        bubbles: true,
    });

    element.dispatchEvent( event );
}

const renderStats = function(data, element) {
    let html = '';
    for(let elementType in data) {
        html += '<ul>';

        for(let key in data[elementType]) {
            
            html += '<li>';
            html += key + ' -> ' + data[elementType][key];
            html += '</li>';
        }

        html += '</ul>'
    }

    element.innerHTML = html;
}


document.addEventListener('click', function(e) {
    const tagName = e.target.tagName;
    if(tagName.includes('P') || tagName.includes('A')) {
        fireCustomEvent(statsElement, 'render');
    }
});
statsElement.addEventListener('render', renderStats.bind(this, stats, statsElement));
document.addEventListener('DOMContentLoaded', fireCustomEvent.bind(null, statsElement, 'render'));


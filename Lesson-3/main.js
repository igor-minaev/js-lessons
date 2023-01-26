// handler === listener === subscriber => function
// handler c callback
// callback => handler, setTimeout, setInterval, param of arrays method
// onClick = handler; handler({...})
// {...} - event, e, ev

const sm = document.getElementById('small')
const md = document.getElementById('medium')
const bg = document.getElementById('big')

const handler1 = (e) => {
    e.stopPropagation()
    if (e.target.tagName === 'BUTTON') {
        alert('ok')
    }
}
const handler2 = (e) => {
    alert(e)
}

const handler3 = (e) => {
    alert('yo')
}

/*sm.onclick = handler1
sm.onclick = handler2*/
/*

sm.addEventListener('click', handler1)
sm.addEventListener('click', handler2)

sm.removeEventListener('click', handler1)
sm.removeEventListener('click', handler2)*/

sm.onclick = handler1
md.onclick = handler2
bg.onclick = handler3

const a = document.getElementById('a')

const handler4 = (e) => {
    e.preventDefault()
    alert('Hello!')
}

a.addEventListener('click', handler4)

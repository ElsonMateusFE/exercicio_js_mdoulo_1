const btn = document.querySelector('button')

btn.addEventListener('click', function(){
    
    const a = Number(document.getElementById('a').value)
    const b = Number(document.getElementById('b').value)
    const c = Number(document.getElementById('c').value)

    const media = (a + b + c) / 3

    document.getElementById('resposta').innerHTML = media.toFixed(2)
})
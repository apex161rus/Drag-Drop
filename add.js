const item = document.querySelector('.item')
const placeholders = document.querySelectorAll('.placeholder')

item.addEventListener('dragstart', dragstart)
item.addEventListener('dragend', dragend)

for(const placeholder of placeholders) {
    placeholder.addEventListener('dragover', dragover)
    placeholder.addEventListener('dragenter', dragentr)
    placeholder.addEventListener('dragleave', dragleave)
    placeholder.addEventListener('drop', dragdrob)
}

function dragstart(event){
    console.log('ok', event.target)
    event.target.classList.add('hold')
    setTimeout(() => event.target.classList.add('hide'), 0)
    
}

function dragend(event){
    console.log('off', event.target)
    // event.target.classList.remove('hold', 'hide')
    event.target.className = 'item'
}

function dragover(event) {
    console.log('drag over')
    event.preventDefault()
}

function dragentr(event) {
    console.log('drag entr')
    event.target.classList.add('hoverer')
}

function dragleave(event) {
    console.log('drag leave')
    event.target.classList.remove('hoverer')
}

function dragdrob(event) {
    console.log('drag drob')
    event.target.classList.remove('hoverer')
    event.target.append(item)
}
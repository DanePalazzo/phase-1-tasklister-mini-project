document.addEventListener("DOMContentLoaded", () => {
  let form = document.querySelector("form")
  form.addEventListener('submit', (e) =>{
    e.preventDefault()
    buildToDo(e.target["new-task-description"].value)
    form.reset()
  })

// function buildToDo(todo){
//   let p = document.createElement('li')
//   let btn = document.createElement('button')
//   let editBtn = document.createElement('button')
//   btn.textContent = 'x'
//   editBtn.textContent = 'edit'
//   p.textContent = `${todo} `
//   handleDelete(btn)
//   editTasks(editBtn)
//   p.appendChild(btn)
//   p.appendChild(editBtn)
//   document.querySelector('#tasks').appendChild(p)
// }

function buildToDo(todo){
    let li = document.createElement('li')
    let txt = document.createElement('p')
    let btn = document.createElement('button')
    let editBtn = document.createElement('button')
    txt.className = 'txt'
    btn.textContent = 'x'
    editBtn.textContent = 'edit'
    txt.textContent = `${todo} `
    handleDelete(btn)
    editTasks(editBtn)
    li.appendChild(txt)
    li.appendChild(btn)
    li.appendChild(editBtn)
    document.querySelector('#tasks').appendChild(li)
  }


function handleDelete(e){
    e.addEventListener('click', ()=> e.parentNode.remove())
}

// function editTasks(edit) {
//     edit.addEventListener('click', () => {
//       edit.parentNode.remove()
//       buildToDo(`${document.getElementById(["new-task-description"]).value} `)
//       form.reset()
//     })
//   }

  
//   function editTasks(edit) {
//     edit.addEventListener('click', () => {
//       edit.parentNode.firstChild.textContent = `${document.getElementById(["new-task-description"]).value} `
//       form.reset()
//     })
//   }

  function editTasks(edit) {
    edit.addEventListener('click', () => {
      edit.parentNode.querySelector(['.txt']).textContent = `${document.getElementById(["new-task-description"]).value} `
      form.reset()
    })
  }

});
const card = document.querySelector('.card')
const btnPrev = document.querySelector('.btn-prev')
const btnNext = document.querySelector('.btn-next')

let id = 1
const getData = async ()=>{
    try{
        const res=await fetch(`https://jsonplaceholder.typicode.com/todos/${id}`)
        return await res.json()
    }catch (error){
        console.error('error')
    }
}
const renderData = async ()=>{
    const data= await getData()
    card.innerHTML = `
            <h2>${data.title}</h2>
            <span>${data.id}</span>
            <h3>${data.completed}</h3>`
}


btnNext.onclick = () => {
    id++
    renderData()

}
btnPrev.onclick = () =>{
    if(id>1){
        id--
        renderData()
    }
}
renderData()

///////////////////////////////////////////


const dataTwo =async ()=>{
    try {
        const response = await fetch('https://jsonplaceholder.typicode.com/posts')
        const data = await response.json()
        console.log(data)
    }catch (error){
        console.error('error')
    }
}
dataTwo()

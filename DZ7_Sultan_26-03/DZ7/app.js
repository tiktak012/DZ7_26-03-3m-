const url = 'https://jsonplaceholder.typicode.com/posts'
const card = document.querySelector('.container')
async function fetchData (){
    try {
        const response = await fetch(url)
        const data = await response.json()
        data.forEach(i=>{
            card.innerHTML+=`
            <div class="card">
            <img src="image/howe_work7.jpg" alt="">
            <h1>${i.title}</h1>
            <span>${i.body}</span>
            </div>
            `
        })
    }catch (error){
        console.log('error')
    }
}
fetchData()
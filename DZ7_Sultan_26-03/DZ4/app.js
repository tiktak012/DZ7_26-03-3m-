const btn =document.querySelector('.btn')
const wrapper =document.querySelector('.wrapper')
btn.onclick =async ()=>{
    try {
        const response = await fetch('data.json')
        const data = await response.json()
        data.forEach(function (i){
            const div=document.createElement('div')
            div.classList.add('block')
            wrapper.append(div)
            div.innerHTML = i.name + '-' + i.age + 'y.o'

        })

    }
    catch (error){
        console.error('error')
    }
}

///////////////////////////////////////
const goods = async ()=>{
    try{
        const resp = await fetch('goods.json')
        const data = await resp.json()
        console.log(data)
    }
    catch (error){
        console.error('error')
    }
}
goods()




    

    function getBtnKatalog () {
        let allBtns = document.getElementsByClassName('table__item-btn')
        let modal = document.getElementsByClassName('modal')
            allBtns = [...allBtns]
            modal = [...modal]
        allBtns.map((e,i)=>{
            e.addEventListener('click', ()=>{
                modal[0].classList.toggle('active-modal')
            })
        })

        modal[0].addEventListener('click', ()=>{
        //    
        })

        modal[0].querySelector('.btn__modal').addEventListener('click', (e)=>{
            modal[0].classList.remove('active-modal')
        })
    }

    document.addEventListener('DOMContentLoaded', ()=>{
        getBtnKatalog()
    })

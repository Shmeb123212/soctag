

    

    function getBtnKatalog () {
        let allBtns = document.getElementsByClassName('table__item-btn')
        let modal = document.getElementsByClassName('modal')
            allBtns = [...allBtns]
            modal = [...modal]
        allBtns.map((e,i)=>{
            e.addEventListener('click', ()=>{
                console.log(modal);
                modal[0].classList.toggle('active-modal')
            })
        })

        modal[0].addEventListener('click', ()=>{
            if(modal[0].classList.contains('active-modal'))  modal[0].classList.remove('active-modal')
        })

        console.log( modal[0].querySelector('.btn__modal'));
    }

    document.addEventListener('DOMContentLoaded', ()=>{
        getBtnKatalog()
    })

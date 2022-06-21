

    

    function getBtnKatalog () {
        let allBtns = document.getElementsByClassName('table__item-btn')
        let allTitle = document.getElementsByClassName('table__item-title')
        let modal = document.getElementsByClassName('modal')
            allBtns = [...allBtns]
            modal = [...modal]
            allTitle = [...allTitle]
        let numberBtn = 0
        allBtns.map((e,i)=>{
            e.addEventListener('click', ()=>{
                numberBtn = i
                modal[0].classList.toggle('active-modal')
                let hiddenInput = modal[0].querySelector('.modal__input-hidden')
                hiddenInput.textContent = allTitle[numberBtn].textContent
                console.log(hiddenInput);
            })
        })



        modal[0].addEventListener('click', ()=>{
        //    
        })

        modal[0].querySelector('.modal__exit').addEventListener('click', (e)=>{
            modal[0].classList.remove('active-modal')
        })

       

        modal[0].querySelector('.btn__modal').addEventListener('click', (e)=>{
            modal[0].classList.remove('active-modal')
        })
    }

    document.addEventListener('DOMContentLoaded', ()=>{
        getBtnKatalog()
    })

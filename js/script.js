function mobileMenu()
{
    const 
        mob = document.querySelector(`[data-mobile]`),
        anima = document.querySelector('[data-anima]')

            mob.addEventListener('click', ()=>{
                const 
                mobStatus = mob.dataset,
                aniStatus = anima.dataset

                if(mobStatus.mobile === "close" || mobStatus.mobile ==="")
                {
                    mobStatus.mobile = 'open'
                    aniStatus.anima = "show"
                } 
                else if(mobStatus.mobile === "open" || mobStatus.mobile ==="")
                {
                    mobStatus.mobile = 'close'
                    aniStatus.anima = ""
                }
        })
}

function smoothScroll()
{
    const 
        links = document.querySelectorAll('a[href^="#"]'),
        sections = document.querySelectorAll('section')

    links.forEach(i=>i.addEventListener('click', Scroll))

    function Scroll(e)
    {
       const href = e.currentTarget.getAttribute('href').replace('#',"")
       e.preventDefault()

       sections.forEach((section)=>{
           if(section.id === href)
           {
               window.scrollTo({
                top: section.offsetTop,
                behavior:"smooth"
            })
           }
       })  
    }
}

function animaSection()
{
    const sections = document.querySelectorAll('section')
    sections.forEach((section)=>{
        const time = section.dataset.time
        setTimeout(()=> section.classList.add('active'),time)
    })
}

function statusLoja()
{
    const statusData = document.querySelectorAll('[data-status]')
    const hora = new Date().getHours()
    
    if(hora > 6 && hora < 18)
    {
        statusData[0].dataset.status = 'open'
        statusData[1].dataset.status = ''
    }
    else 
    {
        statusData[0].dataset.status = ''
        statusData[1].dataset.status = 'close'
    }

}



animaSection()
mobileMenu()
smoothScroll()
statusLoja()
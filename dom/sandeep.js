function showPage(pageId){
                 const pages  = document.querySelectorAll('.page')

                 pages.forEach(page=>{
                    page.style.display = 'none'
                 })

              const activepage  = document.getElementById(pageId)
              if(activepage){
                activepage.style.display = 'block'
              }
}






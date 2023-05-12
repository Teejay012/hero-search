const heros = document.querySelectorAll('.hero'),
search = document.querySelector('#search-hero');

search.addEventListener('keydown', e=>{
    if(e.key == 'Enter'){
        let searchValue = search.value;
        let value = searchValue.toLowerCase();
        console.log(value);
        heros.forEach(hero=>{
            if(hero.dataset.name == value){
                return hero.style.display = 'block';
            }
            return hero.style.display = 'none';
        });
    };
});

search.addEventListener('keyup', ()=>{
    if(search.value != ''){
        return;
    }else{
        heros.forEach(hero=>{
            hero.style.display = 'block';
        });
    }
})

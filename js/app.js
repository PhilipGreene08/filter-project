//My work
//filter bar
(function () {
    const filterBar = document.querySelector('#search-item')
    const storeItems = document.querySelectorAll('.store-item')

    filterBar.addEventListener('keyup', (e) => {
        e.preventDefault()
        const searchTerm = filterBar.value.toLowerCase().trim()

        storeItems.forEach((item) => {
            if (item.textContent.includes(searchTerm)) {
                item.style.display = `block`
            } else {
                item.style.display = `none`
            }
        })
    })
})();

(function () {
    const storeItems = document.querySelectorAll('.store-item')
    const buttons = document.querySelectorAll('.btn')

    //for each button
    buttons.forEach(btn => {
        //listen for an event of click
        btn.addEventListener('click', e => {
            e.preventDefault()

            //this grabs the html data ie cakes, sweets etc
            const filter = btn.dataset.filter
            console.log(filter);

            //for each store item 
            storeItems.forEach(item => { //look at the item 
                if (filter == 'all') { //if the filter matches all
                    storeItems.forEach(item => { //for each item we show in block display
                        item.style.display = `block`
                    })
                } else if (item.classList.contains(filter)) { //search for items based on click and display them
                    item.style.display = `block`
                } else {
                    item.style.display = `none`
                }

            })

        })

    })
})();


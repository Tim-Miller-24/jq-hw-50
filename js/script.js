$('#small a img').click(function (e) { 
    e.preventDefault();
    
    let main = $('#big img')
    let elem = $(this).attr('src')
    let elemSrc = elem.replace('-mini', '')
    // .attr('src', $(this).attr('src'))

    main.attr('src', elemSrc)

});
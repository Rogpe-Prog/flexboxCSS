$(function(){
    $('#btnDF').click(function(){
        $('#master').css({ display: "flex" })
    })
    $('#btnDFR').click(function(){
        $('#master').css({ display: "block" })
    })
    $('#btnFDC').click(function(){
        $('#master').css({ flexDirection: "column" })
    })
    $('#btnFDR').click(function(){
        $('#master').css({ flexDirection: "row" })
    })
    $('#btnFDCR').click(function(){
        $('#master').css({ flexDirection: "column-reverse" })
    })
    $('#btnFDRR').click(function(){
        $('#master').css({ flexDirection: "row-reverse" })
    })
    $('#btnJCFS').click(function(){
        $('#master').css({ justifyContent: "flex-start" })
    })
    $('#btnJCFE').click(function(){
        $('#master').css({ justifyContent: "flex-end" })
    })
    $('#btnJCC').click(function(){
        $('#master').css({ justifyContent: "center" })
    })
    $('#btnJCSB').click(function(){
        $('#master').css({ justifyContent: "space-between" })
    })
    $('#btnJCSA').click(function(){
        $('#master').css({ justifyContent: "space-around" })
    })
    $('#btnAIFS').click(function(){
        $('#master').css({ alignItems: "flex-start" })
    })
    $('#btnAIFE').click(function(){
        $('#master').css({ alignItems: "flex-end" })
    })
    $('#btnAIC').click(function(){
        $('#master').css({ alignItems: "center" })
    })
    $('#btnAIS').click(function(){
        $('#master').css({ alignItems: "stretch" })
    })
    $('#btnAIB').click(function(){
        $('#master').css({ alignItems: "baseline" })
    })
})

// javascript utility functions

// write data surrounded by tag to the document as the page is loaded
function output(data, tag)
{
	document.write("<" + tag + ">" + data + "</" + tag + ">");
}

// change the source of image i to filename  
function changeImg(i, filename)
{
	i.src=filename;
}

// make element e invisible
function hide(e)
{
	e.style.visibility = 'hidden';
}


// make element e visible
function show(e)
{
	e.style.visibility = 'visible';
}

// write text to element e
function changeTxt(area, text)
{
    var e=document.getElementById(area); 
	 e.innerHTML = text;
}

// make everything disappear
function cleargame()
{
    hScore = 0;
    cScore = 0;
    tScore = 0;

    document.getElementById('humanScore').innerHTML = 0;
    document.getElementById('computerScore').innerHTML = 0;
    document.getElementById('tieScore').innerHTML = 0;
    document.getElementById('cHand').style.visibility='hidden';
    document.getElementById('hHand').style.visibility='hidden';
}

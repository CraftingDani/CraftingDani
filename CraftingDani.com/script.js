
//Code by CraftingDani

//Scrolls to the top onLoad.
window.onload = function() {test()};

function test()
{
    if (document.documentElement.scrollTop > 0)
    {
        document.documentElement.scrollTop = 0;
    }
}

//Shows the navigation bar.
window.onscroll = function() {scrollFunction()};
        
function scrollFunction()
{
    if (document.body.scrollTop > 350 || document.documentElement.scrollTop > 350)
    {
     document.getElementById("navbar").style.top = "0";
    }
    else
    {
      document.getElementById("navbar").style.top = "-50px";
    }
}
let dollar = document.getElementById('dollar');
let pound = document.getElementById('pound');


dollar.onkeyup =function()
{
 pound.value=dollar.value * 29.65;
}


pound.onkeyup =function()
{
    dollar.value=pound.value / 29.65;
}
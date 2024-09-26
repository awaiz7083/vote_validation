function calculatelove()
{
    let name1 = document.getElementById('name1').value;
let name2 = document.getElementById('name2').value;
if(name1!=""  && name2!="")
{
    let percentage = math.random()* 100;
    let lovepercentage = math.floor(percentage);
    document.getElementById("lovepercent").textContent = '&{lovepercentage}%1';
 
}
else
{
    document.getElementById("lovepercent").textContent="please enter both names!";
}
}
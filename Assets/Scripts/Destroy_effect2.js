#pragma strict

function Update () 
{
	de();
}
function de()
{
	yield WaitForSeconds(0.5);
	Destroy(gameObject);
}
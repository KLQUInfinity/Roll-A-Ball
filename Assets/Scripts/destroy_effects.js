#pragma strict


function Update () 
{
	GetComponent.<AudioSource>().volume = MainMenu.Volume;
	de();
}
function de()
{
	yield WaitForSeconds(0.5);
	Destroy(gameObject);
}
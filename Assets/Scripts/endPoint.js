#pragma strict
var player : BallHealth;
function OnTriggerEnter(colinfo : Collider)
{
	if(colinfo.tag == "Player")
	{
		player.LoadNextLevel(); 
	}
}
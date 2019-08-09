#pragma strict
var player : BallHealth;
function OnTriggerEnter(colinfo : Collider)
{
	if(BallHealth.isRestarting == false)
	{
		if(colinfo.tag =="Player")
		{
			var destructable : Destructable = colinfo.GetComponent("Destructable") as Destructable;
			destructable.Destruct();
		}
		player.RestartLevel();
	}
}
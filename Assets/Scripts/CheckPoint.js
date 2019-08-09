#pragma strict
static var Reachedpoint : Vector3 = Vector3(0,1.137f,0);
//static var check = false;
static var checkLevel : int;
function OnTriggerEnter(other : Collider)
{
	if(other.tag == "Player")
	{
		checkLevel = Application.loadedLevel;
		if(transform.position.x > Reachedpoint.x&&checkLevel == Application.loadedLevel)
		{
			saving.check = true;
			Reachedpoint = transform.position;
		}
		else
		{
			Reachedpoint = Vector3(0,1.137f,0);
		}
	}
}
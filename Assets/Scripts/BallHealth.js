#pragma strict

var maxFallDistance :float;
static var isRestarting = false;
static var finalScore : int = 0;


function Update ()
{
	if (transform.position.y <= maxFallDistance)
	{
		if (isRestarting == false)
		{
			RestartLevel();
		}
	}
}

function RestartLevel () {
	isRestarting = true;
	GetComponent.<AudioSource>().pitch = 1;
	GetComponent.<AudioSource>().volume = MainMenu.Volume;
	GetComponent.<AudioSource>().Play();
	yield WaitForSeconds (GetComponent.<AudioSource>().clip.length);
	BallController.isFalling=true;
	transform.position=CheckPoint.Reachedpoint;
	var destructable : Destructable = GetComponent("Destructable") as Destructable;
	destructable.DeDestruct();
	isRestarting=false;
}
function LoadNextLevel()
{
	var scoreManager : Score_Manager;
	finalScore += scoreManager.score;
	
	Application.LoadLevel(Application.loadedLevel + 1);
}
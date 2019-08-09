#pragma strict
static var Volume : float = 0.7f;

function QuitGame()
{
	Application.Quit();
}
function StartGame()
{
	Application.LoadLevel(Application.loadedLevel+1);
}
function SetGameVolume(vol : float)
{
	GetComponent.<AudioSource>().volume=vol;
	Volume=vol;
}
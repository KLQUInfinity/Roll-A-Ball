#pragma strict
import UnityEngine.UI;

static var score : int = 0;
private var text : Text;
function Awake () 
{
	text = GetComponent.<Text>();
	score = BallHealth.finalScore;
}

function Update () 
{
	text.text = "Score : " + score;
}
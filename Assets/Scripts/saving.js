#pragma strict
import UnityEngine.UI;
public var text : Text;
static var check = false;
public var deley : float;
function Star ()
{
	text.text = "";
}
function Update () 
{
	if(check == true)
	{
		writeText();
		check = false;
	}
}
function writeText()
{
	text.text = "SAVING .";
	yield WaitForSeconds (deley);
	text.text = "SAVING ..";
	yield WaitForSeconds (deley);
	text.text = "SAVING ...";
	yield WaitForSeconds (deley);
	text.text = "SAVING .";
	yield WaitForSeconds (deley);
	text.text = "SAVING ..";
	yield WaitForSeconds (deley);
	text.text = "SAVING ...";
	yield WaitForSeconds (deley);
	text.text = "";
}
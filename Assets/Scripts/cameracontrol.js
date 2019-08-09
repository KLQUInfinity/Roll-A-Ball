#pragma strict

var target : Transform;
var distance = -10;
var left = 1.5;


function LateUpdate () 
{
	transform.position = target.position+Vector3(0,left,distance);
	transform.LookAt(target);
	GetComponent.<AudioSource>().volume = MainMenu.Volume;
}
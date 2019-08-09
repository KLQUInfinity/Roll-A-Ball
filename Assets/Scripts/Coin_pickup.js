#pragma strict

var coinEffect : Transform;
var scoreValue : int;
private var scoreManager : Score_Manager;
function OnTriggerEnter(info : Collider)
{
	if(info.tag == "Player")
	{
		Instantiate(coinEffect,transform.position,transform.rotation);
		scoreManager.score+=scoreValue;
		Destroy(gameObject);
	}
}
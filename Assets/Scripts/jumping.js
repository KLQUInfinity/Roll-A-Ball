#pragma strict
var hit1 : AudioClip;
var hit2 : AudioClip;
var hit3 : AudioClip;
function Update()
{
	GetComponent.<AudioSource>().volume = MainMenu.Volume;
}
function OnTriggerEnter (other : Collider) 
{
	if(other.tag == "Player")
	{
		if(BallController.isFalling==false)
		{
			var thehit=Random.Range(0,3);
			if(thehit == 0)
			{
				GetComponent.<AudioSource>().clip=hit1;
			}
			else if(thehit == 1)
			{
				GetComponent.<AudioSource>().clip=hit2;
			}
			else if(thehit == 2)
			{
				GetComponent.<AudioSource>().clip=hit3;
			}
			GetComponent.<AudioSource>().pitch=Random.Range(0.9,1.1);
			GetComponent.<AudioSource>().Play();
		}
		BallController.isFalling=true;
	}	
}
function OnTriggerExit (other : Collider) 
{
	if(other.tag == "Player")
	{
		BallController.isFalling=false;		
	}	
}

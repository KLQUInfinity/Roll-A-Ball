#pragma strict
var rotationspeed=100;
var jumphight=8;
private var playOnce=true;
static var isFalling=true;

function Update () 
{
	var rotation : float = Input.GetAxis("Horizontal")*rotationspeed;
	rotation *=Time.deltaTime;
	GetComponent.<Rigidbody>().AddRelativeTorque(Vector3.back*rotation);
	if((Input.GetKeyDown(KeyCode.Space)||Input.GetKeyDown(KeyCode.W)||Input.GetKeyDown(KeyCode.UpArrow))&& isFalling==true)
	{
		GetComponent.<Rigidbody>().velocity.y=jumphight;
	}
	
}

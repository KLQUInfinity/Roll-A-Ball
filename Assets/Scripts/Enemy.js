#pragma strict

var Player : Rigidbody;
var bounceAmount=10f;
private var centerAnim : Animator;
var deathparticle : Transform;
var enemyAnim : Animator;
var deathSound : AudioSource;
//var colliders : Transform;
function Awake()
{
	deathSound.volume = MainMenu.Volume;
	centerAnim=transform.GetComponent("Animator") as Animator;
}
function Die()
{
	Player.GetComponent.<Rigidbody>().velocity.y=bounceAmount;
	Instantiate(deathparticle,enemyAnim.transform.position,enemyAnim.transform.rotation);
	deathSound.Play();
	enemyAnim.SetTrigger("Die");
	centerAnim.SetTrigger("Stop");
	//Destroy(colliders.gameObject);
	yield WaitForSeconds(0.5);
	Destroy(gameObject);
}
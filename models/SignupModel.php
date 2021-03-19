<?php
class SignupModel extends CI_Model
{
	
	public function saverecords($email,$password,$phone,$address)
	{
		
		
		$query="INSERT INTO user_signup VALUES ('','$email','$password','$phone','$address')";
		return $this->db->query($query);
	}
	public function showrecords($email,$password)
	{
		$query="SELECT * FROM user_signup WHERE email='$email' AND password ='$password'";
		return $this->db->query($query);
	}

}
	?>
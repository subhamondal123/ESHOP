<?php
/**
 * 
 */
header("HTTP/1.1 200 OK");
header("Access-Control-Allow-Origin: *");
header("Access-Control-Allow-Headers: access");
header("Access-Control-Allow-Methods: POST, GET, OPTIONS, DELETE, PUT");
header("Content-Type: application/json; charset=UTF-8");
header('Access-Control-Allow-Credentials', 'false');
header("Access-Control-Allow-Headers: Content-Type, Access-Control-Allow-Headers, Authorization, X-Requested-With");
class Signup extends CI_Controller
{
	 // $data;
	function __construct()
	{
		parent::__construct();
		$this->load->database();
		$this->load->model('SignupModel');
	}
	function savedata()
	{
		// echo "subha";

		$data = json_decode(file_get_contents("php://input"));

		// print_r($data->email);


       $insertUser=$this->SignupModel->saverecords($data->email,$data->password,$data->phone,$data->address);

        if($insertUser){        
            echo json_encode(["success"=>1,"msg"=>"User Inserted."]);
        }
        else{
        	
            echo json_encode(["success"=>0,"msg"=>"User Not Inserted!"]);
        }
	}

	// function showdata()
	// {
	// 	$displayUser= $this->SignupModel->showrecords($data->email,$data->password);

	// 	if ($displayUser) {
	// 		echo json_encode(["success"=>1,"msg"=>"welcome"]);

	// 	}else{
        	
 //            echo json_encode(["success"=>0,"msg"=>"wrong credentials"]);
 //        }
	// }
}
?>
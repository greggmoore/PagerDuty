<?php  if ( ! defined('BASEPATH')) exit('No direct script access allowed');

/**
 * @author  Gregg Moore, findmoxie.com
 * @package \System\Application\
 * copyright Copyright (c) 2016, MOXIE.COM
 */

// ------------------------------------------------------------------------

class Users extends Public_Controller {

	
	protected $_models = array(
		'users_m' ,
		'leads/leads_m'
	);
	
	public function __construct()
	{
		parent::__construct();
		
		$this->load->model($this->_models);
		
		if($this->ion_auth->logged_in())
		{
						
			$seg2 = SEG2 ? SEG2 : 'index' ;
			
				if(empty($seg2) || $seg2 == 'dashboard')
				{
					$seg2 = 'index' ;
				}
				
				if($seg2 == 'lead')
				{
					$seg2 = 'leads' ;
				}				
			
			$data['user'] = $this->user = $this->ion_auth->user()->row();
			
			$data['user_menu'] = $this->users_m->menu(3, $seg2);
			
			$this->load->vars($data);
			
		}
		
		$redirect = $this->session->userdata('redirect_page') ? $this->session->userdata('redirect_page') : '/';
		
	
	}
	
	public function index()
	{
			
		if (!$this->ion_auth->logged_in())
		{
			redirect('login', 'refresh');
		}
		
		$this->meta_title = $this->module->meta_title ? $this->module->meta_title : 'User Dashboard';
			
		$this->meta_info = array(
	        array('name' => 'description', 'content' => SITE_TITLE.' - User Dashboard' ),
	        array('name' => 'author', 'content' => SITE_TITLE)
	    );
	    
		$data = array(
			'title' => 'Dashboard' ,
			'content' => $this->module->content ? $this->module->content : NULL,
			'css' => css(array('users.css'), $this->module->uri) ,
			'js' => js(array('users.js'),  $this->module->uri)
		);
	
	
		
		$data['partial']  = $this->load->view('public/index', $data, true);
			$this->load->view($this->public_theme.'/templates/users', $data);

	}
	
	
	public function account()
	{
			
		$response = 1;
		$response_txt = '<h4>Mail not sent! We experienced an issue with your request. Please try again or contact the site administrator.</h4>';
		$response_css = 'alert-warning';

		
		if($this->input->is_ajax_request())
		{
			if($this->input->post('user') == 'account')
			{
				$first_name = ucfirst(strtolower($this->input->post('first_name'))) ;
				$last_name = ucfirst(strtolower($this->input->post('last_name'))) ;
				$fullname = $first_name.' '.$last_name ;
				$email = ucfirst(strtolower($this->input->post('email'))) ;
				$username = ucfirst(strtolower($this->input->post('username'))) ;
				
				$uri = url_title($fullname, '-', TRUE);
				
				$data = array(
					'http_user_agent' => $this->input->user_agent(),
					'bio' => $this->input->post('bio') ,
					'first_name' => $first_name,
					'ip_address' => $this->input->ip_address() ,
					'last_name' => $last_name,
					'fullname' => $fullname,
					'mobilephone' => $this->input->post('mobilephone') ,
					'telephone' => $this->input->post('telephone') ,
					'uri' => $uri
				);
								
				
				if ($this->ion_auth->update($this->user->id, $data))
				{
					$response = 1;
					$response_txt = 'Your <strong>account info</strong> has been updated.';
					$response_css = 'alert-success';
				}
				
				echo json_encode(array('response' => $response, 'response_txt' => $response_txt, 'response_css' => $response_css ));
				exit();
				
			}
		}
		
		if (!$this->ion_auth->logged_in())
		{
			redirect('login', 'refresh');
		}
		
		$this->meta_title = $this->module->meta_title ? $this->module->meta_title : 'Account Info';
			
		$this->meta_info = array(
	        array('name' => 'description', 'content' => 'Account Info' ),
	        array('name' => 'author', 'content' => SITE_TITLE)
	    );
	    
		$data = array(
			'title' => 'Account Info' ,
			'content' => $this->module->content ? $this->module->content : NULL,
			'css' => css(array('users.css'), $this->module->uri) ,
			'js' => js(array('users.js'),  $this->module->uri)
		);
	
	
		
		$data['partial']  = $this->load->view('public/account', $data, true);
			$this->load->view($this->public_theme.'/templates/users', $data);

	}
	
	public function company()
	{
		$response = 1;
		$response_txt = '<h4>Mail not sent! We experienced an issue with your request. Please try again or contact the site administrator.</h4>';
		$response_css = 'alert-warning';
		
		if($this->input->is_ajax_request())
		{
			if($this->input->post('user') == 'company')
			{
				$data = array(
					'company_name' => $this->input->post('company_name') ,
					'company_address' => $this->input->post('company_address') ,
					'company_city' => $this->input->post('company_city'),
					'company_state' => $this->input->post('company_state') ,
					'company_zipcode' => $this->input->post('company_zipcode'),
					'company_phone' => $this->input->post('company_phone'),
					'team_name' => $this->input->post('team_name')
				);
				
				if ($this->ion_auth->update($this->user->id, $data))
				{
					$response = 1;
					$response_txt = 'Your <strong>company info</strong> has been updated.';
					$response_css = 'alert-success';
				}
				
				echo json_encode(array('response' => $response, 'response_txt' => $response_txt, 'response_css' => $response_css ));
				exit();
			}
		}
		
		if (!$this->ion_auth->logged_in())
		{
			redirect('login', 'refresh');
		}	
		
		$this->meta_title = $this->module->meta_title ? $this->module->meta_title : 'Company/Office info';
			
		$this->meta_info = array(
	        array('name' => 'description', 'content' => 'Company/Office Info' ),
	        array('name' => 'author', 'content' => SITE_TITLE)
	    );
	    
		$data = array(
			'title' => 'Company/Office Info' ,
			'content' => $this->module->content ? $this->module->content : NULL,
			'css' => css(array('users.css'), $this->module->uri) ,
			'js' => js(array('users.js'),  $this->module->uri)
		);
		
		$data['partial']  = $this->load->view('public/company', $data, true);
			$this->load->view($this->public_theme.'/templates/users', $data);

	}
	
	public function leads()
	{
		
		$response = 0;
		
		if($this->input->is_ajax_request())
		{
			
		}
		
		if (!$this->ion_auth->logged_in())
		{
			redirect('login', 'refresh');
		}
		
		$leads = NULL ;
		
		$leads = $this->leads_m->user_leads($this->user->id);
			
		$this->meta_title = $this->module->meta_title ? $this->module->meta_title : 'Leads';
			
		$this->meta_info = array(
	        array('name' => 'description', 'content' => 'Leads' ),
	        array('name' => 'author', 'content' => SITE_TITLE)
	    );
	    
		$data = array(
			'title' => 'Leads' ,
			'content' => $this->module->content ? $this->module->content : NULL,
			'css' => css(array('users.css'), $this->module->uri) ,
			'js' => js(array('users.js'),  $this->module->uri) ,
			'leads' => $leads ? $leads : NULL 
		);
	
	
		
		$data['partial']  = $this->load->view('public/leads', $data, true);
			$this->load->view($this->public_theme.'/templates/users', $data);

	}
	
	public function lead()
	{
		$id = $this->uri->segment(3);
		
		if(empty($id))
		{
			redirect('/users/leads', 'refresh');
		}
		
		$details = $this->leads_m->lead_details($id);
					
		$this->meta_title = $this->module->meta_title ? $this->module->meta_title : 'Lead Details';
			
		$this->meta_info = array(
	        array('name' => 'description', 'content' => 'Lead Details' ),
	        array('name' => 'author', 'content' => SITE_TITLE)
	    );
	    
		$data = array(
			'title' => 'Lead Details' ,
			'content' => $this->module->content ? $this->module->content : NULL,
			'css' => css(array('users.css'), $this->module->uri) ,
			'js' => js(array('users.js'),  $this->module->uri) ,
			'details' => $details ? $details : NULL
		);
	
	
		
		$data['partial']  = $this->load->view('public/lead', $data, true);
			$this->load->view($this->public_theme.'/templates/users', $data);

	}
	
	public function options()
	{
			
		$response = 1;
		$response_txt = '<h4>Mail not sent! We experienced an issue with your request. Please try again or contact the site administrator.</h4>';
		$response_css = 'alert-warning';
		
		if($this->input->is_ajax_request())
		{
			if($this->input->post('user') == 'options')
			{
				$data = array(
					'no_user_data_flow' => $this->input->post('no_user_data_flow') ,
					'auto_responder' => $this->input->post('auto_responder') ,
					'auto_responder_message' => $this->input->post('auto_responder_message')
				);
				
				if ($this->ion_auth->update($this->user->id, $data))
				{
					$response = 1;
					$response_txt = 'Your <strong>options</strong> have been updated.';
					$response_css = 'alert-success';
				}
				
				echo json_encode(array('response' => $response, 'response_txt' => $response_txt, 'response_css' => $response_css ));
				exit();
			}
		}
		
		
		if (!$this->ion_auth->logged_in())
		{
			redirect('login', 'refresh');
		}
		
		$this->meta_title = $this->module->meta_title ? $this->module->meta_title : 'User Options';
			
		$this->meta_info = array(
	        array('name' => 'description', 'content' => 'User Options' ),
	        array('name' => 'author', 'content' => SITE_TITLE)
	    );
	    
		$data = array(
			'title' => 'User Options' ,
			'content' => $this->module->content ? $this->module->content : NULL,
			'css' => css(array('users.css'), $this->module->uri) ,
			'js' => js(array('users.js'),  $this->module->uri)
		);
	
	
		
		$data['partial']  = $this->load->view('public/options', $data, true);
			$this->load->view($this->public_theme.'/templates/users', $data);

	}
	
	
	public function password()
	{
			
		$response = 1;
		$response_txt = '<h4>Mail not sent! We experienced an issue with your request. Please try again or contact the site administrator.</h4>';
		$response_css = 'alert-warning';
		
		if($this->input->is_ajax_request())
		{
			if($this->input->post('user') == 'password')
			{
				
				$current_password = $this->input->post('current_password') ;
				$new_password = $this->input->post('new_password');
		
				
				$data = array(
					'password' => $this->input->post('new_password')
				);
				
				if ($this->ion_auth->update($this->user->id, $data))
				{
					$response = 1;
					$response_txt = 'Your <strong>password</strong> has been updated.';
					$response_css = 'alert-success';
				}
				
				echo json_encode(array('response' => $response, 'response_txt' => $response_txt, 'response_css' => $response_css ));
				exit();
			}
		}
		
		if (!$this->ion_auth->logged_in())
		{
			redirect('login', 'refresh');
		}
		
		$this->meta_title = $this->module->meta_title ? $this->module->meta_title : 'Update Password';
			
		$this->meta_info = array(
	        array('name' => 'description', 'content' => SITE_TITLE.' - Update Password' ),
	        array('name' => 'author', 'content' => SITE_TITLE)
	    );
	    
		$data = array(
			'title' => 'Update Password' ,
			'content' => $this->module->content ? $this->module->content : NULL,
			'css' => css(array('users.css'), $this->module->uri) ,
			'js' => js(array('users.js'),  $this->module->uri)
		);
	
	
		
		$data['partial']  = $this->load->view('public/password', $data, true);
			$this->load->view($this->public_theme.'/templates/users', $data);

	}
	
	public function zipcodes()
	{
			
		$response = 1;
		$response_txt = '<h4>Mail not sent! We experienced an issue with your request. Please try again or contact the site administrator.</h4>';
		$response_css = 'alert-warning';
		$responce_html = '';
		
		if($this->input->is_ajax_request())
		{
			
			if($this->input->post('user') == 'add_zipcodes')
			{
				$css = NULL;
				$zips = NULL;
				$zipcodes = NULL;
				$html = NULL;
				
				$zipcodes = explode("\n", $this->input->post('zipcodes'));
				
				if(!empty($zipcodes))
				{
					foreach($zipcodes as $key)
					{
						$zip=trim($key);
						if (!$zip) { continue; }
						
						$this->users_m->toggle_zipcode($this->user->id, $zip);
							
					}
					
					$response = 1;
					$response_txt = 'Your <strong>password</strong> has been updated.';
					$response_css = 'alert-success';
					$responce_html = $this->users_m->user_zipcodes($this->user->id);
					
					
				}
			}
			
			
			//Remove zipcodes
			if($this->input->post('user') == 'remove_zipcodes')
			{
				if($this->input->post('deletezip'))
				{
					$zipcodes = $this->input->post('deletezip');
					
					foreach($zipcodes as $zip)
					{
						$this->users_m->delete_zipcode($this->user->id, $zip);
					}
					
					$response = 1;
					$message = '<strong>Awesome!</strong> Your zip code assignment has been updated!';
					$css = 'alert-success';	
					$html = $this->users_m->user_zipcodes($this->user->id);
					
				}
			}
			
			
			echo json_encode(array('response' => $response, 'response_txt' => $response_txt, 'response_css' => $response_css, 'html' => $html ));
			exit();
		}
		
		
		
		
		if (!$this->ion_auth->logged_in())
		{
			redirect('login', 'refresh');
		}
		
		$zipcodes = $this->users_m->user_zipcodes($this->user->id);
		
		$this->meta_title = $this->module->meta_title ? $this->module->meta_title : 'Assigned Zipcodes';
			
		$this->meta_info = array(
	        array('name' => 'description', 'content' => ' Assigned Zip Codes' ),
	        array('name' => 'author', 'content' => SITE_TITLE)
	    );
	    
		$data = array(
			'title' => 'Assigned Zip Codes' ,
			'content' => $this->module->content ? $this->module->content : NULL,
			'css' => css(array('users.css', 'zipcodes.css'), $this->module->uri) ,
			'js' => js(array('users.js'),  $this->module->uri) ,
			'zipcodes' => $zipcodes ? $zipcodes : '' 
		);
	
	
		
		$data['partial']  = $this->load->view('public/zipcodes', $data, true);
			$this->load->view($this->public_theme.'/templates/users', $data);

	}
	
	
	
	public function login()
	{
		
		$redirect = $this->session->userdata('redirect_page') ? $this->session->userdata('redirect_page') : '/';
		
		if ($this->ion_auth->logged_in())
		{
			redirect('/', 'refresh');
		}
		
		$this->form_validation->set_rules('identity', 'Email', 'required');
		$this->form_validation->set_rules('password', 'Password', 'required');
		
		if ($this->form_validation->run() == true)
		{
			$remember = (bool) $this->input->post('remember');
			if ($this->ion_auth->login($this->input->post('identity'), $this->input->post('password'), $remember))
			{
				$message = $this->session->set_flashdata('message', $this->ion_auth->messages());				
				//Only, AND ONLY, if it's an ajax request!!!!
				if($this->input->is_ajax_request())
				{
					$user = NULL;					
					$user = $this->ion_auth->user()->row();
					
					echo json_encode(array('success' => 1, 'first_name' => $user->first_name, 'photo' => $user->photo, 'redirect' => $redirect ));
					exit();
				}
					else
				{
					redirect($redirect, 'refresh');
				}
				
			}
				else
			{
				$data['message'] = $message = $this->session->set_flashdata('message', $this->ion_auth->errors());
				if($this->input->is_ajax_request())
				{
					$data['message'] = $message = 'Incorrect Login. Please try again.';
					
					echo json_encode(array('success' => 0, 'message' => $message, 'redirect' => NULL ));
					exit();
				}
					else
				{
					redirect('login', 'refresh'); //use redirects instead of loading views for compatibility with MY_Controller libraries
				}
			}
		}
			else
		{
			$message = (validation_errors()) ? validation_errors() : $this->session->flashdata('message');
			
			$identity = array(
				'name' => 'identity',
				'id' => 'identity',
				'class' => 'form-control' ,
				'type' => 'text',
				'value' => $this->form_validation->set_value('identity'),
				'placeholder' => 'Enter Email' ,
				'data-error' => 'Email is required and can not be left empty.' ,
				'required' => ''
			);
			$password = array(
				'name' => 'password',
				'id' => 'password',
				'class' => 'form-control' ,
				'type' => 'password',
				'placeholder' => 'Enter Password' ,
				'data-error' => 'Password is required and can not be left empty.' ,
			);
			
			
			$this->meta_info = array(
		        array('name' => 'description', 'content' => SITE_TITLE.' - Login' ),
		        array('name' => 'author', 'content' => SITE_TITLE)
		    );

			
			
			$page_css = file_exists(APPPATH.'modules/pages/assets/css/'.URI.'.css') ? URI.'.css' : '' ;
			$page_js = file_exists(APPPATH.'modules/pages/assets/js/'.URI.'.js') ? URI.'.js' : '' ;
					
			$data = array(
				'title' => 'Staging Login' ,
				'css' => css(array('users.css', $page_css), $this->module->uri),
				'js' => js(array('', $page_js), $this->module->uri) ,
				'identity' => $identity ,
				'password' => $password ,
				'message' => $message
			);
		
		
			
			$data['partial']  = $this->load->view('public/login', $data, true);
				$this->load->view($this->public_theme.'/templates/users_auth', $data);
		}
				
	}
	
	public function register()
	{
		echo 'register';
	}
	
	public function how_it_works()
	{
		echo 'register';
	}
	
	public function logout()
	{
		$this->ion_auth->logout();
		if ($this->input->is_ajax_request())
		{
			exit(json_encode(array('status' => true, 'message' => 'logged out')));
		}
		else
		{
			$this->session->set_flashdata('success', 'logged out');
			redirect('login');
		}
	}
}
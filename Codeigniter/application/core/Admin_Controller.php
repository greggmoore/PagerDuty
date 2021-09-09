<?php  if ( ! defined('BASEPATH')) exit('No direct script access allowed');

/**
 * @author  Gregg Moore, findmoxie.com
 * @package \System\Application\
 * copyright Copyright (c) 2016, MOXIE.COM
 */

// ------------------------------------------------------------------------

class Admin_Controller extends MY_Controller {
	
	public function __construct() {
		
		parent::__construct();
		
		$this->template_path = $this->settings->app_path.'modules/themes/'.$this->admin_theme;
		
		if ( ! self::_check_access())
		{
			$this->session->set_flashdata('error');
			redirect();
		}
		
		$page_class = '';
		
		$this->load->models(array('Weather_m'));
		
		$weather = '';
		$weather_js = '';
		
		$admin_menu = '' ;
		$admin_settings_menu = '';
		
		if($this->ion_auth->logged_in())
		{
			
			$this->user = $data['user'] = $this->ion_auth->user()->row();
			
			define('UID', $this->user->id);
			
			$module_menu = $this->modules_m->build_menu(UID, array('is_user_controlled' => 1, 'is_active' => 1));
			$admin_settings_menu = $this->modules_m->admin_settings_menu(UID);
			
			
			
			$recent_activity = $this->users_m->recent_activity(FALSE, '', 10);
			
			if (!$this->ion_auth->in_group(1))
			{
				$recent_activity = $this->users_m->recent_activity(TRUE, UID, 10);
			}
						
			$avatar = $this->users_m->get_avatar(UID);
			$this->weather_m->getLatest(UID);
			$weather = $this->weather_m->get_current_admin(UID);
		
			$weather_js = '';
			
			if(empty($weather))
			{
				echo 'no weather'; exit();
				
				$weather_js = '
				<script type="javacript">
					if ("geolocation" in navigator){
						navigator.geolocation.getCurrentPosition(function(position){ 
					
							$.ajax({
								type: "POST",
								url: "/weather/get_current_now_admin",
								data: "uid='.UID.'&lat=" + position.coords.latitude + "&lon=" + position.coords.longitude,
								cache: false,
								type: "POST",
								dataType: "json",
								success: function(response)
								{
									if(response.response==1)
									{
										$(".weather_call").fadeIn(200).html(response.html);
									}
								}
							});
			
						});
					}	
				</script>';
			}
			//$moxienews = $this->dashboard_m->fetchnews();
			
			$data = array(
				'user' => $this->user,
				'avatar' => $avatar ,
				'module_menu' => $module_menu ,
				'admin_settings_menu' => $admin_settings_menu ,
				'page_class' => 'layout layout-header-fixed' ,
				'weather' => $weather ,
				'weather_js' => $weather_js,
				'recent_activity' => $recent_activity
				
			);
			
			
			$this->load->vars($data);
		}
		
		//Get module
        if ($this->modules_m->exists($this->module))
		{
			ci()->module = $this->module = $this->modules_m->get($this->module);
		}
		
		
	}
	
	private function _check_access()
	{
		$ignored_pages = array('admin/contact', 'admin/icons', 'admin/login', 'admin/logout', 'admin/help', 'admin/forgot_password', 'admin/reset_password', 'admin/password_reset_sent');
		$current_page = $this->uri->segment(1) . '/' . $this->uri->segment(2, 'index');
		
		
		// Dont need to log in, this is an open page
		if (in_array($current_page, $ignored_pages))
		{
			return TRUE;
			//echo $this->template_path;
		}

		if (!$this->ion_auth->logged_in())
		{
			redirect('admin/login', 'refresh');
		}
		
		// Admins can go straight in
		//if ($this->ion_auth->is_admin())
		$admin_groups = array(1,2);
		if ($this->ion_auth->in_group($admin_groups))
		{
			
			return TRUE;
		}
		
		// good Lord knows what this is... erm...
		return FALSE; 
	}
}
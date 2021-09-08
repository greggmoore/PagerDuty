<?php  if ( ! defined('BASEPATH')) exit('No direct script access allowed');

/**
 * @author  Gregg Moore, blumoocreative.com
 * @package System\Cms\Third_Paty\MX
 * copyright Copyright (c) 2021, Blumoo Creative, LLC
 * Modular Extensions - HMVC
 *
 * Adapted from the CodeIgniter Core Classes, Wiredesign Modular Extensions - HMVC
 * @link	http://codeigniter.com
 *
 * Description:
 * This library extends the CodeIgniter CI_Controller class and creates an application 
 * object allowing use of the HMVC design pattern.
 *
 * Install this file as application/third_party/MX/Base.php
 *
 * @copyright Copyright (c) 2021, Blumoo Creative, LLC
 * @version 	2.3
**/ 
 

class MX_Config extends CI_Config 
{	
	public function load($file = '', $use_sections = FALSE, $fail_gracefully = FALSE, $_module = '') 
	{
		if (in_array($file, $this->is_loaded, TRUE)) return $this->item($file);

		$_module OR $_module = CI::$APP->router->fetch_module();
		list($path, $file) = Modules::find($file, $_module, 'config/');
		
		if ($path === FALSE)
		{
			parent::load($file, $use_sections, $fail_gracefully);					
			return $this->item($file);
		}  
		
		if ($config = Modules::load_file($file, $path, 'config'))
		{
			/* reference to the config array */
			$current_config =& $this->config;

			if ($use_sections === TRUE)	
			{
				if (isset($current_config[$file])) 
				{
					$current_config[$file] = array_merge($current_config[$file], $config);
				} 
				else 
				{
					$current_config[$file] = $config;
				}
				
			} 
			else 
			{
				$current_config = array_merge($current_config, $config);
			}

			$this->is_loaded[] = $file;
			unset($config);
			return $this->item($file);
		}
	}
}
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
 

class MX_Lang extends CI_Lang
{
	public function load($langfile, $lang = '', $return = FALSE, $add_suffix = TRUE, $alt_path = '', $_module = '')	
	{
		if (is_array($langfile)) 
		{
			foreach($langfile as $_lang) $this->load($_lang);
			return $this->language;
		}
			
		$deft_lang = CI::$APP->config->item('language');
		$idiom = ($lang == '') ? $deft_lang : $lang;
	
		if (in_array($langfile.'_lang'.EXT, $this->is_loaded, TRUE))
			return $this->language;

		$_module OR $_module = CI::$APP->router->fetch_module();
		list($path, $_langfile) = Modules::find($langfile.'_lang', $_module, 'language/'.$idiom.'/');

		if ($path === FALSE) 
		{
			if ($lang = parent::load($langfile, $lang, $return, $add_suffix, $alt_path)) return $lang;
		
		} 
		else 
		{
			if($lang = Modules::load_file($_langfile, $path, 'lang'))
			{
				if ($return) return $lang;
				$this->language = array_merge($this->language, $lang);
				$this->is_loaded[] = $langfile.'_lang'.EXT;
				unset($lang);
			}
		}
		
		return $this->language;
	}
}
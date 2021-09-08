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
 
/* load MX core classes */
require_once dirname(__FILE__).'/Lang.php';
require_once dirname(__FILE__).'/Config.php';


class CI extends CI_Controller
{
	public static $APP;
	
	public function __construct() {
		
		/* assign the application instance */
		self::$APP = $this;
		
		global $LANG, $CFG;
		
		/* re-assign language and config for modules */
		if ( ! $LANG instanceof MX_Lang) $LANG = new MX_Lang;
		if ( ! $CFG instanceof MX_Config) $CFG = new MX_Config;
		
		parent::__construct();
	}
}

/* create the application object */
new CI;


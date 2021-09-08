<?php  if ( ! defined('BASEPATH')) exit('No direct script access allowed');

/**
 * @author  Gregg Moore, findmoxie.com
 * @package \System\Application\
 * copyright Copyright (c) 2016, MOXIE.COM
 */

// ------------------------------------------------------------------------

class Pages extends Public_Controller {

	public function __construct()
	{
		parent::__construct();
	
	}
	
	public function index()
	{
		$uri = URI;
		
		switch($uri)
		{
			case 'agency':
				$uri = 'about';
				break;
		}
		
		$array = array(
			'uri' => $uri,
			'is_active' => 1
		);
		
		
		
		$data = $this->pages_m->get($array);
		if(empty($data))
		{
			redirect('/', 'refresh');
		}
		
		$this->load->library('googlemaps');
	    $center = NULL;
	    
	    $center = LATITUDE.', '.LONGITUDE;
		$google_map_type = GOOGLE_MAP_TYPE ? strtoupper(GOOGLE_MAP_TYPE) : 'ROADMAP';
			
	    $map_config = array(
			'apiKey' => 'AIzaSyDB2fQrd_2S1JkLOZDiIP73e3zez8LlQE0' ,
			'center' => $center ? $center : '34.244946, -77.866203', //Jacob's Field
			'map_height' => '390px',
			'map_name' => 'Map',
			'map_div_id' => 'map_canvas',
			'map_type' => $google_map_type,
			'maxzoom' => 20,
			'minzoom' => 10,
			'tilt' => 0,
			'zoom' => 15 ,
			'scrollwheel' => FALSE ,
			'geocodeCaching' => TRUE ,
			'onload' => "google.maps.event.trigger(marker_0, 'click');" ,
			'styles' =>  array(
				  array("name"=>"Orange Parks", "definition"=>array(
				    array("featureType"=>"all", "stylers"=>array(array("saturation"=>"-30"))),
				    array("featureType"=>"poi.park", "stylers"=>array(array("saturation"=>"10"), array("hue"=>"#ff9900")))
				  )),
				  array("name"=>"Black Roads", "definition"=>array(
				    array("featureType"=>"all", "stylers"=>array(array("saturation"=>"-70"))),
				    array("featureType"=>"road.arterial", "elementType"=>"geometry", "stylers"=>array(array("hue"=>"#000000")))
				  ))
				) ,
			'stylesAsMapTypes' => TRUE ,
			'stylesAsMapTypesDefault' => 'Black Roads'
		);
		
		$this->googlemaps->initialize($map_config);
		$marker = array();
			$marker = array(
				'position' => $center,
				'infowindow_content' => '<b>Tavern on 17th</b><br />1611 Dusty Miller Lane<br />Wilmington, NC<br /><b>Phone:</b> 910.555.5555' ,
				'icon' => 'https://development.editasmedicine.com/data/site/map-marker-orange.png'
				
			);
			
		$this->googlemaps->add_marker($marker);			
			$map = $this->googlemaps->create_map();
				
		$this->column_layout = $data->column_layout ? $data->column_layout : $this->column_layout ;
		
		$this->meta_info = array(
	        array('name' => 'description', 'content' => $data->meta_description ? $data->meta_description : $this->meta_description ),
	        array('name' => 'author', 'content' => 'BluMoo Creative')
	    );
	    
	    $this->meta_title = $data->meta_title ? $data->meta_title : $this->meta_title ;
		
		$title = $data->title ? $data->title : '';
		
		
		$page_css = file_exists(APPPATH.'modules/pages/assets/css/'.$uri.'.css') ? $uri.'.css' : '' ;
		$page_js = file_exists(APPPATH.'modules/pages/assets/js/'.$uri.'.js') ? $uri.'.js' : '' ;
		$js = js(array($page_js), $this->module->uri) ;
		$canonical = '';
		$this->og_image = base_url().'data/uploads/blumoo-creative-screenshot.jpg' ;
		
		if(isset($data->og_image))
		{
			$this->og_image = base_url().'data/uploads/'.$data->og_image ;
		}
		
		$this->page_url = base_url().$uri ;
		
		$this->open_graph = array(
		        array('property' => 'og:url', 'content' => $this->page_url ) ,
		        array('property' => 'og:title', 'content' => $title ) ,
		        array('property' => 'og:description', 'content' => $data->meta_description ? $data->meta_description : $this->meta_description ) ,
		        array('property' => 'og:image', 'content' => $this->og_image ) 
		    );
			
		
		if($uri == 'index')
		{
			//$js = js(array('maps.js', 'static.js', 'responder.js','pricing.js', $page_js), $this->module->uri);
			$canonical = '<link rel="canonical" href="https://www.blumoocreative.com" />';
		}
			else
		{
			$canonical = '<link rel="canonical" href="https://www.blumoocreative.com/'.$uri.'" />';
		}
		
		
		$data = array(
			'title' => $data->display_title == 1 ? $data->title : $data->title ,
			'subtitle' => $data->display_title == 1 ? $data->subtitle : $data->subtitle ,
			'subtitle_heading' => $data->subtitle_heading == 1 ? $data->subtitle_heading : $data->subtitle_heading ,
			'data' => $data,
			'css' => css(array($page_css), $this->module->uri),
			'js' => $js ,
			//'map' => $map ,
			'onload' => 'class="preloaded"' ,
			'canonical' => $canonical
		);
		

		$view = file_exists(APPPATH.'modules/pages/views/public/'.$uri.'.php') ? $uri : 'default' ;
			$data['partial']  = $this->load->view('public/'.$view, $data, true);
				$this->load->view($this->public_theme.'/templates/default', $data);
				
				if(SITE_CACHE == 1)
				{
					$time = SITE_CACHE_TIME ? SITE_CACHE_TIME : 10 ;
					$this->output->cache($time);
				}
				
	}
	
	
	public function ping($type)
	{
		if (defined('ENVIRONMENT') == 'production')
		{
			if(empty($type))
			{
				$type = 'sitemap';
			}
			
			$sitemap = SITE_URL.'/'.$type.'.xml';
			$pingurls = array(
				"https://www.google.com/webmasters/tools/ping?sitemap=",
				"https://www.bing.com/webmaster/ping.aspx?sitemap="
			);
			
			foreach ($pingurls as $pingurl)
			{
				$ch = curl_init();
				curl_setopt($ch, CURLOPT_URL, $pingurl.$sitemap);
				curl_setopt($ch, CURLOPT_RETURNTRANSFER, true);
				$output = curl_exec($ch);
				curl_close($ch);
			}
			
			echo 'WTG';
			return TRUE;
		}
		
		echo 'NOGO';
		return FALSE;
	}

}
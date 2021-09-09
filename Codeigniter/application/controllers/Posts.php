<?php  if ( ! defined('BASEPATH')) exit('No direct script access allowed');

/**
 * @author  Gregg Moore, findmoxie.com
 * @package \System\Application\
 * copyright Copyright (c) 2016, MOXIE.COM
 */

// ------------------------------------------------------------------------

class Posts extends Public_Controller {

	public function __construct()
	{
		parent::__construct();
	
	}
	
	
	/**
	 * @package Posts
	 * @function Index/Catch All
	 * @description: Display all articles
	 * @uri
	 */
	
	// ------------------------------------------------------------------------
	
	public function index()
	{
				
		$config['base_url'] = base_url().'/blog/';
		$config['total_rows'] = $this->db->count_all('posts');
		$config['uri_segment'] = 2;
		$this->pagination->initialize($config);
		
		
		$this->meta_title = $this->module->meta_title ? $this->module->meta_title : 'News &amp; Insights';
				
			$this->meta_info = array(
		        array('name' => 'description', 'content' => $this->module->meta_description ? $this->module->meta_description : NULL ),
		        array('name' => 'author', 'content' => DEFAULT_AUTHOR ? DEFAULT_AUTHOR : NULL )
		    );
		    
		$data = array(
			'title' => $this->module->title ? $this->module->title : 'Our Posts' ,
			'content' => $this->module->content ? $this->module->content : NULL,
			'css' => css(array('posts.css'), $this->module->uri) ,
			'js' => js(array('posts.js'),  $this->module->uri)
		);
		
		
		$offset = $this->uri->segment($config['uri_segment'], 0) > 0 ? ($this->uri->segment($config['uri_segment'], 0) - 1) * $this->config->item('per_page') : 0 ;
		$array = array(
			'p.is_active' => 1 ,
			//'start_date >= ' => date('Y-m-d')
		);
		
		$data['posts'] = $this->posts_m->get_posts(4, $offset, $array);
		
		$data['partial']  = $this->load->view('public/posts', $data, true);
			$this->load->view($this->public_theme.'/templates/default', $data);
	}

	
	
	/**
	 * @package Posts
	 * @function Article/Post
	 * @description: Author Posts
	 * @uri Segement 3
	 */
	
	// ------------------------------------------------------------------------
 	
	public function post()
	{
		
		$article = NULL ;
		
		$uri = $this->uri->segment(2);
		
		$article = $this->posts_m->article($uri);
				
		
		if(empty($article))
		{
			//redirect('posts', 'refresh');
		}
		
		$seo = new phpSEO($article->content);
				
		$meta_description = $article->meta_description ? $article->meta_description : $seo->getMetaDescription(160);
		
		$this->meta_info = array(
	        array('name' => 'description', 'content' => $meta_description ? $meta_description : $this->meta_description ),
	        array('name' => 'author', 'content' => $article->fullname ? $article->fullname : DEFAULT_AUTHOR )
	    );
	    
	    $this->meta_title = $article->meta_title ? $article->meta_title : $this->meta_title ;
	    
	    $data = array(
			'css' => css(array('posts.css'), $this->module->uri) ,
			'js' => js(array('posts.js'), $this->module->uri) ,
			'article' => $article
		);
		
		$data['partial']  = $this->load->view('public/post', $data, true);
			$this->load->view($this->public_theme.'/templates/default', $data);
		
		
	}
	
	
	/**
	 * @package Posts
	 * @function Article/Post
	 * @description: Author Posts
	 * @uri Segement 3
	 */
	
	// ------------------------------------------------------------------------
 	
	public function article()
	{
		
		$article = NULL ;
		
		$uri = $this->uri->segment(2);
		
		$article = $this->posts_m->article($uri);
				
		
		if(empty($article))
		{
			//redirect('posts', 'refresh');
		}
		
				
		$meta_description = $article->meta_description ? $article->meta_description : '';
		
		$this->meta_info = array(
	        array('name' => 'description', 'content' => $meta_description ? $meta_description : $this->meta_description ),
	        array('name' => 'author', 'content' => $article->fullname ? $article->fullname : 'Team Agios' )
	    );
	    
	    $this->meta_title = $article->meta_title ? $article->meta_title : $this->meta_title ;
	    
	    $data = array(
			'css' => css(array('article.css'), $this->module->uri) ,
			'js' => js(array('article.js'), $this->module->uri) ,
			'article' => $article
		);
		
		$data['partial']  = $this->load->view('public/article', $data, true);
			$this->load->view($this->public_theme.'/templates/default', $data);
		
		
	}
	
	
	
	/**
	 * @package Posts
	 * @function Author
	 * @description: Author Posts
	 * @uri Segement 3
	 */
	
	// ------------------------------------------------------------------------
 
	public function author()
	{
		$data = NULL;		
		
		$uri = $this->uri->segment(3) ? $this->uri->segment(3) : NULL;
		
		$config['base_url'] = base_url().'/posts/author/'.$uri.'/';
		$config['total_rows'] = $this->posts_m->get_author_count($uri);
		$config['uri_segment'] = 4;
		
		$this->pagination->initialize($config);
		
		$offset = $this->uri->segment($config['uri_segment'], 0) > 0 ? ($this->uri->segment($config['uri_segment'], 0) - 1) * $this->config->item('per_page') : 0 ;
		
		$author = $this->posts_m->get_author_posts($uri, 4, $offset);	
		$seo = new phpSEO($author->user->bio);	
		
		$this->meta_title = $author->user->fullname ? 'Posts by '.$author->user->fullname : 'Our Posts';
				
			$this->meta_info = array(
		        array('name' => 'description', 'content' => $seo->getMetaDescription(160) ? $seo->getMetaDescription(160) : NULL ),
		        array('name' => 'author', 'content' => DEFAULT_AUTHOR ? DEFAULT_AUTHOR : NULL )
		    );
		    
		    
		$title = 'Posts by '.$author->user->fullname;    	
			
		$data = array(
			'title' => $title ? $title : NULL ,
			'content' => NULL,
			'css' => css(array('posts.css'), $this->module->uri),
			'intro' => $author->intro,
			'posts' => $author->posts
		);
			
		$data['partial']  = $this->load->view('public/author', $data, true);
			
			$this->load->view($this->public_theme.'/templates/default', $data);
	}
	
	
	
	/**
	 * @package Posts
	 * @function Category
	 * @uri Segement 3
	 */
	
	// ------------------------------------------------------------------------
	
	public function category()
	{
		$data = NULL;		
		
		$uri = $this->uri->segment(3) ? $this->uri->segment(3) : NULL;
		
		$config['base_url'] = base_url().'/posts/category/'.$uri.'/';
		$config['total_rows'] = $this->posts_m->get_category_count($uri);
		$config['uri_segment'] = 4;
		
		$this->pagination->initialize($config);
		
		$offset = $this->uri->segment($config['uri_segment'], 0) > 0 ? ($this->uri->segment($config['uri_segment'], 0) - 1) * $this->config->item('per_page') : 0 ;
		
		$category = $this->posts_m->get_category_posts($uri, 4, $offset);
		$seo = new phpSEO($category->info->description);
				
		$this->meta_title = $category->info->title ? 'View Posts by Category: '.$category->info->title : 'Our Posts';
				
		$this->meta_info = array(
	        array('name' => 'description', 'content' => $seo->getMetaDescription(160) ? $seo->getMetaDescription(160) : NULL )
	    );
		
		
		
		$title = $category->info->title ? 'Posts: '.$category->info->title : '' ;    	
			
		$data = array(
			'title' => $title ,
			'content' => NULL,
			'css' => css(array('posts.css'), $this->module->uri),
			'description' => $category->info->description,
			'posts' => $category->posts
		);

		$data['partial']  = $this->load->view('public/category', $data, true);
			
			$this->load->view($this->public_theme.'/templates/default', $data);
		
	}
	
	
	/**
	 * @package Posts
	 * @function Perspectives
	 */
	
	// ------------------------------------------------------------------------
	
	public function perspectives()
	{
		
		$data = NULL;	
		
		$uri = $this->uri->segment(2) ? $this->uri->segment(2) : NULL;
	
		$config['base_url'] = base_url().'/news/perspectives/';
		$config['total_rows'] = $this->posts_m->get_category_count('perspectives');
		$config['uri_segment'] = 3;
		$config['per_page'] = 1000;
				
		$this->pagination->initialize($config);
		
		$this->meta_title = $this->module->meta_title ? $this->module->meta_title : 'News &amp; Insights';
				
			$this->meta_info = array(
		        array('name' => 'description', 'content' => $this->module->meta_description ? $this->module->meta_description : NULL ),
		        array('name' => 'author', 'content' => DEFAULT_AUTHOR ? DEFAULT_AUTHOR : NULL )
		    );
		    
		$data = array(
			'header_title' => '<h1>News &amp; Insights</h1>' ,
			'title' => 'Perspectives' ,
			'content' => $this->module->content ? $this->module->content : NULL,
			'css' => css(array('perspectives.css'), $this->module->uri) ,
			'js' => js(array('perspectives.js'),  $this->module->uri)
		);
		
		
		$offset = $this->uri->segment($config['uri_segment'], 0) > 0 ? ($this->uri->segment($config['uri_segment'], 0) - 1) * $config['per_page'] : 0 ;
		$array = array(
			'p.is_active' => 1 ,
		);
		
		$data['posts'] = $this->posts_m->get_perspective_posts($config['per_page'], $offset, $array);
		
		$data['partial']  = $this->load->view('public/perspectives', $data, true);
			$this->load->view($this->public_theme.'/templates/default', $data);
	}
	
	
	public function persepective_article()
	{

		
		$article = NULL ;
		
		$uri = $this->uri->segment(3);
		
		$article = $this->posts_m->article($uri);
				
		
		if(empty($article))
		{
			//redirect('posts', 'refresh');
		}
				
		$meta_description = $article->meta_description ? $article->meta_description : '';
		
		$this->meta_info = array(
	        array('name' => 'description', 'content' => $meta_description ? $meta_description : $this->meta_description ),
	        array('name' => 'author', 'content' => $article->fullname ? $article->fullname : 'Team Agios' )
	    );
	    
	    $this->meta_title = $article->meta_title ? $article->meta_title : $this->meta_title ;
	    
	    $data = array(
		    'header_title' => '<h1>News &amp; Insights</h1>' ,
			'css' => css(array('perspective.css'), $this->module->uri) ,
			'js' => js(array('perspectives.js'), $this->module->uri) ,
			'article' => $article
		);
		
		$data['partial']  = $this->load->view('public/perspective', $data, true);
			$this->load->view($this->public_theme.'/templates/default', $data);
		
		
	}
	
	
	/**
	 * @package Posts
	 * @function Publications
	 */
	
	// ------------------------------------------------------------------------
	
	public function publications()
	{
		
		$config['base_url'] = base_url().'/research/publications/';
		$config['total_rows'] = $this->db->count_all('posts');
		$config['uri_segment'] = 2;
		$this->pagination->initialize($config);
		
		
		$this->meta_title = $this->module->meta_title ? $this->module->meta_title : 'Publications | Research | Agios';
				
			$this->meta_info = array(
		        array('name' => 'description', 'content' => $this->module->meta_description ? $this->module->meta_description : NULL ),
		        array('name' => 'author', 'content' => DEFAULT_AUTHOR ? DEFAULT_AUTHOR : NULL )
		    );
		    
		$data = array(
			'header_title' => '<h1>Research</h1>' ,
			'title' => 'Publications' ,
			'content' => $this->module->content ? $this->module->content : NULL,
			'css' => css(array('news.css'), $this->module->uri) ,
			'js' => js(array('news.js'),  $this->module->uri)
		);
		
		
		$offset = $this->uri->segment($config['uri_segment'], 0) > 0 ? ($this->uri->segment($config['uri_segment'], 0) - 1) * $this->config->item('per_page') : 0 ;
		$array = array(
			'p.is_active' => 1 ,
			//'start_date >= ' => date('Y-m-d')
		);
		
		$data['posts'] = $this->posts_m->get_posts(4, $offset, $array);
		
		$data['partial']  = $this->load->view('public/publications', $data, true);
			$this->load->view($this->public_theme.'/templates/default', $data);
	}
	
	
	/**
	 * @package Posts
	 * @function Press Releases
	 */
	
	// ------------------------------------------------------------------------
	
	public function press_releases()
	{
		
		$config['base_url'] = base_url().'/news/press-releases/';
		$config['total_rows'] = $this->db->count_all('posts');
		$config['uri_segment'] = 2;
		$this->pagination->initialize($config);
		
		
		$this->meta_title = $this->module->meta_title ? $this->module->meta_title : 'Publications | Research | Agios';
				
			$this->meta_info = array(
		        array('name' => 'description', 'content' => $this->module->meta_description ? $this->module->meta_description : NULL ),
		        array('name' => 'author', 'content' => DEFAULT_AUTHOR ? DEFAULT_AUTHOR : NULL )
		    );
		    
		$data = array(
			'header_title' => '<h1>News &amp; Insights</h1>' ,
			'title' => 'Press Releases' ,
			'content' => $this->module->content ? $this->module->content : NULL,
			'css' => css(array('news.css'), $this->module->uri) ,
			'js' => js(array('news.js'),  $this->module->uri)
		);
		
		
		$offset = $this->uri->segment($config['uri_segment'], 0) > 0 ? ($this->uri->segment($config['uri_segment'], 0) - 1) * $this->config->item('per_page') : 0 ;
		$array = array(
			'p.is_active' => 1 ,
			//'start_date >= ' => date('Y-m-d')
		);
		
		$data['posts'] = $this->posts_m->get_posts(4, $offset, $array);
		
		$data['partial']  = $this->load->view('public/press_releases', $data, true);
			$this->load->view($this->public_theme.'/templates/default', $data);
	}
	
	
	public function publication_date()
	{

		$this->db->select('id, created_ts');
		$this->db->from('posts');
		$query = $this->db->get();
		
		if($query->num_rows() > 0)
		{
			foreach($query->result() as $r)
			{
				
				$data = array(
					'publication_date' => $r->created_ts
				);
				
				$this->db->where('id', $r->id);
				$this->db->update('posts', $data);
				
			
			}
			
			echo 'Done!';
		}
	}
}
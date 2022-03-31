package com.spring.newbox.controller;

import java.util.HashMap;
import java.util.Map;

import javax.servlet.http.HttpServletResponse;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.MediaType;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.ResponseBody;
import org.springframework.web.servlet.ModelAndView;

@Controller
public class AjaxtestController {
	
	@RequestMapping(value="/ajaxtest", method = RequestMethod.GET)
	public ModelAndView index() {
		ModelAndView view = new ModelAndView("/main/ajaxtest");
		
		return view; 
	}
	

	

	
	
	
	@RequestMapping(value="/data", method = RequestMethod.GET)
	public ModelAndView index2() {
		ModelAndView view = new ModelAndView("/main/data");
		
		return view; 
	}
	
	@RequestMapping(value="/data2", method = RequestMethod.GET)
	public ModelAndView index3() {
		ModelAndView view = new ModelAndView("/main/data2");
		return view; 
	}
	
	@RequestMapping(value="/ajaxtest", method = RequestMethod.POST)
	public ModelAndView post() {
		ModelAndView view = new ModelAndView("main/ajaxtest");
		return view;	
	}
	


	@RequestMapping(value="/data", method = RequestMethod.POST)
	public ModelAndView post2() {
		ModelAndView view = new ModelAndView("main/data");
			view.addObject("no","100");
			view.addObject("data","23232311");
			view.addObject("status","B-OK");
			view.addObject("regat","B-NOT OK");
			view.addObject("data","23232311");
			view.addObject("status","B-OK");
			view.addObject("regat","B-NOT OK");
			System.out.println("data를 경유합니다(POST)!");
		return view;	
	}


	@RequestMapping(value="/data2", method = RequestMethod.POST)
	public ModelAndView post3() {
		ModelAndView view = new ModelAndView("main/data2");
			System.out.println("data2를 경유합니다(POST)!");
		return view;	
	}
	

	@RequestMapping(value="/example", method = RequestMethod.GET)
	public ModelAndView example() {
		ModelAndView view = new ModelAndView("/main/example");
		return view; 
	}
	
	@RequestMapping(value="/example", method = RequestMethod.POST)
	public ModelAndView examplePost() {
		ModelAndView view = new ModelAndView("main/example");
			System.out.println("example,(POST)!");
		return view;	
	}

//	@RequestMapping(value="/data2", method = RequestMethod.GET)
//	public @ResponseBody String reqAjax1() {
//	    System.out.println("ajax 요청 도착!");
//	    return "this is just text";
//	}
	
//	@RequestMapping(value="/data", method = RequestMethod.POST)
//	public ModelAndView post4(@RequestParam("input")String input) {
//		ModelAndView view = new ModelAndView("main/data");
//			view.addObject("input", input);
//			System.out.println("data 1번의 리퀘스트 파람을 경유합니다(POST)!");
//		return view;	
//	}
	
//	@RequestMapping(value="/data2", method = RequestMethod.POST)
//	public ModelAndView post5(@RequestParam("input")String input) {
//		ModelAndView view = new ModelAndView("main/data2");
//			view.addObject("input", input);
//			System.out.println("data 2번의 리퀘스트 파람을 경유합니다(POST)!");
//		return view;	
//	}
	
	
//	@ResponseBody
//	@RequestMapping(value="/data", method=RequestMethod.POST)
//	public Map<String,Object> input(String input) {
//	    System.out.println("ajax 요청 도착!"+input);
//	    Map<String,Object> map = new HashMap<String,Object>();
//	    map.put("input",input);
//	    return map;
//	}

//	@RequestMapping(value="/what.mp3",method = RequestMethod.GET)
//	public ModelAndView mp3() {
//		ModelAndView view = new ModelAndView("main/what.mp3");
//		return view;
//	}

}


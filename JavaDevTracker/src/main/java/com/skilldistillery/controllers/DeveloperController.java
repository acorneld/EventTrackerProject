package com.skilldistillery.controllers;

import java.util.List;
import java.util.Optional;

import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.skilldistillery.entities.Developer;
import com.skilldistillery.repositories.DeveloperRepository;
import com.skilldistillery.services.DeveloperService;

@RequestMapping("api")
@RestController
public class DeveloperController {


	@Autowired
	DeveloperRepository devRepo;
	
	@Autowired
	DeveloperService devServ;

	
	@GetMapping("developers")
	List<Developer> listDevelopers(){
		return devServ.allDevelopers();
	}
	
	@GetMapping("developers/id/{developerId}")
	public Optional<Developer> getDeveloper(@PathVariable int developerId, HttpServletResponse res) {
		Optional<Developer> dev = devRepo.findById(developerId);
		return dev;
	}
		
	
	@PostMapping("developers")
	public Developer createDeveloper(@RequestBody Developer dev, HttpServletRequest req, HttpServletResponse res) {
		
		devRepo.saveAndFlush(dev);
		return dev;
	}
		
	@PutMapping("developers/{developerId}")
	public Developer updateDeveloper(@PathVariable("developerId") Integer developerId,
			@RequestBody Developer dev,
			HttpServletResponse res) {
		dev = devRepo.saveAndFlush(dev);
		return dev;
	}
	
	@DeleteMapping("developers/{developerId}")
	public void deleteDeveloper(@PathVariable Integer developerId, HttpServletResponse res) {
		if(devServ.deleteDeveloperById(developerId)) {
			res.setStatus(204);
		}else {
			res.setStatus(404);
		}
	}
	
	
	@GetMapping("developers/{name}")
	public List<Developer> getDeveloperByName(@PathVariable String name, HttpServletResponse res) {
		List<Developer> devs = devServ.searchDevelopersByName(name);
		if (devs == null) {
			res.setStatus(404);
		}
		return devs;
	}

}

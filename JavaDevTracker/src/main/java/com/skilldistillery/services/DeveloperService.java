package com.skilldistillery.services;

import java.util.List;

import com.skilldistillery.entities.Developer;

public interface DeveloperService {
	
	
	List<Developer> allDevelopers();
	List<Developer> searchDevelopersByName(String name);
	
	

}

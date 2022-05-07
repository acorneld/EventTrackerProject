package com.skilldistillery.data;

import java.util.List;

import com.skilldistillery.entities.Developer;

public interface DeveloperDAO {

	List<Developer> findAll();
	List<Developer> findByName(String name);
}

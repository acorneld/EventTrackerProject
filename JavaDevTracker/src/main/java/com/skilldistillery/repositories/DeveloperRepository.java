package com.skilldistillery.repositories;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;

import com.skilldistillery.entities.Developer;

public interface DeveloperRepository extends JpaRepository<Developer, Integer> {
	
	
	List<Developer> findByName(String name);
}

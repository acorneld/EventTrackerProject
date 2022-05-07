package com.skilldistillery.services;

import java.util.List;

import javax.persistence.EntityManager;
import javax.persistence.PersistenceContext;
import javax.transaction.Transactional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.skilldistillery.entities.Developer;
import com.skilldistillery.repositories.DeveloperRepository;

@Service
@Transactional
public class DeveloperServiceImpl implements DeveloperService {

	@Autowired
	DeveloperRepository devRepo;

	@Override
	public List<Developer> searchDevelopersByName(String name) {
		name = "%" + name;
		return devRepo.findByName(name);
	}

	@Override
	public List<Developer> allDevelopers() {
		return devRepo.findAll();
	}
	
	
	
}

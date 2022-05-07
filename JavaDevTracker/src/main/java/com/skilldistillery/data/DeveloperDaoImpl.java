package com.skilldistillery.data;

import java.util.List;

import javax.persistence.EntityManager;
import javax.persistence.PersistenceContext;

import com.skilldistillery.entities.Developer;

public class DeveloperDaoImpl implements DeveloperDAO {
	
	@PersistenceContext
	private EntityManager em;
	
	
	@Override
	public List<Developer> findAll() {
		String jpql = "SELECT d FROM Developer d";
		return em.createQuery(jpql, Developer.class).getResultList();
		
	}

	@Override
	public List<Developer> findByName(String name) {
		String jpql = "SELECT d FROM Developer d WHERE name=?";
		return em.createQuery(jpql, Developer.class).getResultList();
	}
	
	

}

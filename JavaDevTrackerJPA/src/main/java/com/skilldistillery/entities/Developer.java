package com.skilldistillery.entities;

import java.util.Objects;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;

@Entity
public class Developer {
	
	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	int id;
	
	String name;
	Boolean active;
	Integer caffeination;
	Integer anxiety;
	Integer productivity;

	public Developer() {
		super();
	}

	public int getId() {
		return id;
	}

	public void setId(int id) {
		this.id = id;
	}

	public String getName() {
		return name;
	}

	public void setName(String name) {
		this.name = name;
	}

	public Boolean getActive() {
		return active;
	}

	public void setActive(Boolean active) {
		this.active = active;
	}

	public Integer getCaffeination() {
		return caffeination;
	}

	public void setCaffeination(Integer caffeination) {
		this.caffeination = caffeination;
	}

	public Integer getAnxiety() {
		return anxiety;
	}

	public void setAnxiety(Integer anxiety) {
		this.anxiety = anxiety;
	}

	public Integer getProductivity() {
		return productivity;
	}

	public void setProductivity(Integer productivity) {
		this.productivity = productivity;
	}

	@Override
	public String toString() {
		return "Developer [id=" + id + ", name=" + name + ", active=" + active + ", caffeination=" + caffeination
				+ ", anxiety=" + anxiety + ", productivity=" + productivity + "]";
	}

	@Override
	public int hashCode() {
		return Objects.hash(active, anxiety, caffeination, id, name, productivity);
	}

	@Override
	public boolean equals(Object obj) {
		if (this == obj)
			return true;
		if (obj == null)
			return false;
		if (getClass() != obj.getClass())
			return false;
		Developer other = (Developer) obj;
		return Objects.equals(active, other.active) && Objects.equals(anxiety, other.anxiety)
				&& Objects.equals(caffeination, other.caffeination) && id == other.id
				&& Objects.equals(name, other.name) && Objects.equals(productivity, other.productivity);
	}
	
	
}

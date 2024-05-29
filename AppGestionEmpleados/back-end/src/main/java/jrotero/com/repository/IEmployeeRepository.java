package jrotero.com.repository;

import org.springframework.data.repository.CrudRepository;

import jrotero.com.model.EmployeeEntity;

public interface IEmployeeRepository extends CrudRepository<EmployeeEntity, Long> {

}

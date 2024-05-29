package jrotero.com.service;

import java.util.List;

import jrotero.com.model.EmployeeEntity;

public interface IEmployeeService {

	public List<EmployeeEntity> getAllEmployees();
	
	public EmployeeEntity createEmployee(EmployeeEntity employee);
	
	public EmployeeEntity searchEmployee(Long id) throws Exception;

	public EmployeeEntity updateEmployee(Long id, EmployeeEntity empleado) throws Exception;
	
	public EmployeeEntity deleteEmployee(Long id);
}

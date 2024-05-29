package jrotero.com.service.impl;

import java.util.ArrayList;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestBody;

import jrotero.com.model.EmployeeEntity;
import jrotero.com.repository.IEmployeeRepository;
import jrotero.com.service.IEmployeeService;

@Service
public class EmployeeServiceImpl implements IEmployeeService{

	@Autowired
	private IEmployeeRepository repository;	
	
	@Override
	public List<EmployeeEntity> getAllEmployees() {
		var response = repository.findAll();
		List<EmployeeEntity> empleados = new ArrayList<>();
		response.forEach(e -> {
			EmployeeEntity empleado = new EmployeeEntity();
			empleado.setId(e.getId());
			empleado.setName(e.getName());
			empleado.setSurname(e.getSurname());
			empleado.setEmail(e.getEmail());
			empleados.add(empleado);
		});
		return empleados;
	}

	@Override
	public EmployeeEntity createEmployee(@RequestBody EmployeeEntity employee) {
		var response = repository.save(employee);	
		return response;
	}

	@Override
	public EmployeeEntity searchEmployee(@PathVariable Long id) throws Exception{
		var response = repository.findById(id).orElseThrow(() -> new Exception("Id no encontrado: " + id));
		return response;
	}

	@Override
	public EmployeeEntity updateEmployee(@PathVariable Long id, @RequestBody EmployeeEntity empleado) throws Exception {
		var response = repository.findById(id).orElseThrow(() -> new Exception("Id no encontrado: " + id));
		response.setName(empleado.getName());
		response.setSurname(empleado.getSurname());
		response.setEmail(empleado.getEmail());
		return repository.save(response);
	}

	@Override
	public EmployeeEntity deleteEmployee(Long id){
		repository.deleteById(id);
		return null;
	}

}

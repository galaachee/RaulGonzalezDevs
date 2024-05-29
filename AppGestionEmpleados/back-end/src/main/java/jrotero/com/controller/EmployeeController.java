package jrotero.com.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import jrotero.com.model.EmployeeEntity;
import jrotero.com.service.IEmployeeService;

@RestController
@RequestMapping("/api/v1/")
@CrossOrigin(origins = "http://localhost:4200/")
public class EmployeeController { 

	@Autowired
	private IEmployeeService service;
	
	
	@GetMapping("/empleados")
	public ResponseEntity<?> getAllEmployees(){
		return ResponseEntity.ok(service.getAllEmployees());
	}
	
	@PostMapping("/empleados")
	public ResponseEntity<?> createEmployee(@RequestBody EmployeeEntity empleado){
		return ResponseEntity.ok(service.createEmployee(empleado));
	}
	
	@GetMapping("/empleados/{id}")
	public ResponseEntity<?> searchById(@PathVariable Long id) throws Exception{
		return ResponseEntity.ok(service.searchEmployee(id));
	}
	
	@PutMapping("/empleados/{id}")
	public ResponseEntity<?> updateEmployeeById(@PathVariable Long id, @RequestBody EmployeeEntity empleado) throws Exception{
		return ResponseEntity.ok(service.updateEmployee(id, empleado)); 
	}
	
	@DeleteMapping("/empleados/{id}")
	public ResponseEntity<?> deleteEmployee(@PathVariable Long id) throws Exception{
		return ResponseEntity.ok(service.deleteEmployee(id));
	}
}

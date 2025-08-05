package com.example.calculator.controller;

import com.example.calculator.model.CalculationLog;
import com.example.calculator.repository.CalculationLogRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@CrossOrigin(origins = "*") // for local testing (optional)
public class CalculatorController {

    @Autowired
    private CalculationLogRepository repository;

    // Save a calculation log
    @PostMapping("/calculate")
    public void saveCalculation(@RequestBody CalculationLog log) {
        repository.save(log);
    }

    // Get all calculation logs
    @GetMapping("/history")
    public List<CalculationLog> getHistory() {
        return repository.findAll();
    }
}

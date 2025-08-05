package com.example.calculator.repository;

import com.example.calculator.model.CalculationLog;
import org.springframework.data.jpa.repository.JpaRepository;

public interface CalculationLogRepository extends JpaRepository<CalculationLog, Long> {
}

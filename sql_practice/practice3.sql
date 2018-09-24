SELECT department_name AS 'Department Name', 
COUNT(*) AS 'No of Courses' 
FROM departments 
INNER JOIN employees 
ON course.department_id = department.department_id 
GROUP BY department.department_id, department_name 
ORDER BY department_name;
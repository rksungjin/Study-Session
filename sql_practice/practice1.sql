SELECT   c.name
FROM     company c
JOIN     salary s ON c.id = s.company_id
GROUP BY c.name
HAVING   AVG(salary) >= 40000



SELECT COMPANY.ID FROM COMPANY WHERE EMPLOYEES > 10000;



SELECT department_name AS 'Department Name', 
COUNT(*) AS 'No of Courses' 
FROM departments 
INNER JOIN employees 
ON course.department_id = department.department_id 
GROUP BY department.department_id, department_name 
ORDER BY department_name;



select count(*) as count,DEPARTMENT.NAME 
from EMPLOYEE
inner join DEPARTMENT on EMPLOYEE.DEPT_ID = DEPARTMENT.ID
group by DEPARTMENT.NAME
ORDER BY COUNT(*) DESC, DEPARTMENT.NAME ASC



SELECT
    DEPARTMENT.NAME,
    COUNT(STUDENT.STUDENT_ID)
FROM
    DEPARTMENT
    LEFT JOIN STUDENT ON DEPARTMENT.ID = STUDENT.DEPARMENT_ID
GROUP by
    DEPARTMENT.ID
ORDER by
    COUNT(STUDENT.STUDENT_ID) DESC, 
    DEPARTMENT.NAME ASC




SELECT SUM(t1.TIV_2012)
FROM Insurance t1
INNER JOIN
(
    SELECT TIV_2011
    FROM Insurance
    GROUP BY TIV_2011
    HAVING COUNT(*) > 1
) t2
    ON t1.TIV_2011 = t2.TIV_2011
INNER JOIN
(
    SELECT lat, lon
    FROM Insurance
    GROUP BY lat, lon
    HAVING COUNT(*) = 1
) t3
    ON t1.lat = t3.lat AND
       t1.lon = t3.lon



SELECT TREE, CASE WHEN P_ID IS NULL THEN 'Root' 
WHEN(SELECT COUNT(*) FROM TREE WHERE P_ID = '5' THEN 'Inner'
ELSE 'Leaf'
END
FROM TREE
ORDER BY ID;  
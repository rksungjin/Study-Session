select count(*) as count,DEPARTMENT.NAME 
from EMPLOYEE
inner join DEPARTMENT on EMPLOYEE.DEPT_ID = DEPARTMENT.ID
group by DEPARTMENT.NAME
ORDER BY COUNT(*) DESC, DEPARTMENT.NAME ASC
SELECT   name
FROM     company
JOIN     salary ON id = company_id
GROUP BY name
HAVING   AVG(salary) >= 40000




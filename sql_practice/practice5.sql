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
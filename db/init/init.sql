DROP SCHEMA IF EXISTS mydb;
CREATE SCHEMA mydb;
USE mydb;

DROP TABLE IF EXISTS incomes;

CREATE TABLE incomes
(
    id  VARCHAR(40),
    incomeDate  VARCHAR(40),
    incomeAmount  VARCHAR(40),
    incomeCategoryId  VARCHAR(40),
    remarks  VARCHAR(40),
    updateDate  VARCHAR(40)
);

INSERT INTO incomes (
    id, incomeDate, incomeAmount, incomeCategoryId, remarks, updateDate
) VALUES ('1', '2025-07-16', '200', '1', 'aa', '2025-07-16');

DROP TABLE IF EXISTS users;

CREATE TABLE users
(
    id    INT(10),
    name  VARCHAR(40)
);

INSERT INTO users (id, name) VALUES (1, 'a');




DROP TABLE IF EXISTS incomes_category;

CREATE TABLE incomes_category
(
    id  VARCHAR(40),
    category_name  VARCHAR(40),
    update_date  VARCHAR(40)
);

INSERT INTO incomes_category (
    id,category_name,update_date
) VALUES ('1', 'salary', '2025-07-16');

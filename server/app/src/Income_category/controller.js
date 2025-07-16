//データベース読み書き
import mysql from 'mysql2';
import { v4 as uuidv4 } from 'uuid';
import { connectionStrings } from '../secrets/dbConnect';

export const Controller = () => {
    const connection = mysql.createConnection({
        ...connectionStrings
    });
    
    connection.connect((err) => {
        if(err){
            console.error('Error connecting to MYSQL:',err);
            return;
        }
        console.log('Connected to MySQL');
    });
    // データベース読み込み
    function readAllIncomesCategory(req, res) {
        const sql = "SELECT * FROM incomes_category ORDER BY update_date";
        connection.query(sql, (err, result, fields) => {
            if (err) throw err;
            res.send(result);
        });
    }
    function insertIncomesCategory(req, res){
        const data = req.body;
        const uidValue = uuidv4();
        const sql = `INSERT INTO incomes_category VALUES ("${uidValue}", "${data.category_name}","${data.update_date}")`
        connection.query(sql, (error, result) => {
            if(error){
                console.log(error);
                return res.status(500).json({ message: "Failed to add incomes_category" });
            }
        })
        return res.status(200).json({data});
    }
    function deleteIncomesCategory(req, res){
        const id = req.params.id;
        const sql = `DELETE FROM incomes_category WHERE id = "${id}"`;
        console.log(sql);
        connection.query(sql, (error) => {
            if(error){
                res.status(500).json({ message: error.message });
            } else {
                res.status(200).json({ message: "success" });
            }
        });    
    }
    function updateIncomesCategory(req, res){
        const data = req.body;
        const sql = `UPDATE incomes_category set category_name="${data.category_name}" WHERE id="${data.id}"`;
        console.log(sql);
        console.log(data)
        connection.query(sql, (error, result) => {
            if(error){
                console.log(error);
                return res.status(500).json({ message: "Failed to add incomes_category" });
            }
        })
        return res.status(200).json({data});    
    }
}
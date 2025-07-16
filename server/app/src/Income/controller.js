//データベース読み書き
import mysql from 'mysql2';
import { v4 as uuidv4 } from 'uuid';
import { connectionStrings } from '../secrets/dbConnect';
import { IncomeService } from './incomeService';
import { IncomeRepository } from './incomeRepository';

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

const incomeRepository = new IncomeRepository(connection);
const incomeService = new IncomeService(incomeRepository);

export const readAllIncomes = (req, res) => {
    const sql = `SELECT * FROM incomes`;
    console.log('test');
    connection.query(sql, (err, result) => {
        if(err){
            return res.status(500).json({error: err.message});
        };
        res.json(result);
    });
};
export const getAllIncomes = async (req, res) => {
    try {
        const result = await incomeService.getAllIncomes();
        console.log('Server result:', result); // データ構造の確認

        if (!Array.isArray(result)) {
            return res.status(500).json({ error: 'Unexpected data format' });
        }

        res.json(result);
    } catch (error) {
        console.log(error);
        res.status(500).json({ error: 'Server error' });
    }
};
// export const getAllIncomes = (req, res) => {
//     try{
//         const result = incomeService.getAllIncomes();
//         console.log(result.data)
//         res.json(result);
//     }catch (error) {
//         res.status(500).json({error: 'server error'});
//     }
// };



export const Controller = () => {
    

    
    //接続確認必要
    //外部キー制約で設定してあるテーブルも表示したい場合
    // function readAllIncomes(req, res) {
    //     const sql1 = "SELECT * FROM incomes";
    //     const sql2 = "SELECT * FROM incomes_category";
    //     connection.query(sql1, (err, results1, fields) => {
    //         if (err) throw err;
    
    //         connection.query(sql2, (err, results2, fields) => {
    //             if(err) throw err;
    
    //             const combinedResults = {
    //                 incomes: results1,
    //                 incomes_category: results2
    //             };
    
    //         res.send(combinedResults)
    //         });
    //     });
    // };
    
    function insertIncomes(req, res){
        const data = req.body;
        console.log(data)
        const uidValue = uuidv4();
        const sql = `INSERT INTO incomes VALUES ("${uidValue}", 
                    "${data.income_date}",
                    "${data.income_amount}",
                    "${data.income_category_id}", 
                    "${data.remarks}",
                    "${data.update_date}")`
        connection.query(sql, (error, result) => {
            if(error){
                console.log(error);
                return res.status(500).json({ message: "Failed to add incomes" });
            }
        })
        return res.status(200).json({data});
    }
    
    function deleteIncomes(req, res){
        console.log("deleteリクエストを受け付けました。");
        console.log(req.params.id);
        const id = req.params.id;
        const sql = `DELETE FROM incomes WHERE id = "${id}", "${data.income_date}", "${data.income_amount}", "${data.income_category_id}", "${data.remarks}"`;
        connection.query(sql, (error) => {
            if(error){
                res.status(500).json({ message: error.message });
            } else {
                res.status(200).json({ message: "success" });
            }
        });    
    }
    
    function updateIncomes(req, res){
        const data = req.body;
        const uidValue = uuidv4();
        const sql = `INSERT INTO incomes VALUES ("${uidValue}", "${data.income_date}", "${data.income_amount}", "${data.income_category_id}", "${data.remarks}" )`
        console.log(data.categoryname);
        connection.query(sql, (error, result) => {
            if(error){
                console.log(error);
                return res.status(500).json({ message: "Failed to add incomes_category" });
            }
        });
        return res.status(200).json({data});
    };
};
const {Pool}=require('pg');

const pool=new Pool({
  host:'localhost',
  user:'alexis',
  password: 'alexis',
  database: 'Ambition',
  port:'5432'

});

module.exports=pool;
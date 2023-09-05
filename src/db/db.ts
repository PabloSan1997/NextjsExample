
import {Pool} from 'pg';

const URL_DB = process.env.URL_DATABASE;

export const pool = new Pool({
    connectionString:URL_DB
});
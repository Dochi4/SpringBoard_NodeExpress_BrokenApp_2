\echo 'Delete and recreate bankly db?'

-- FIXES BUG #2
-- Drop and create main database
DROP DATABASE IF EXISTS bankly;
CREATE DATABASE bankly;

\connect bankly

-- Drop and create test database
DROP DATABASE IF EXISTS bankly_test;
CREATE DATABASE bankly_test;

\connect bankly_test

-- Drop and recreate users table
DROP TABLE IF EXISTS users;

CREATE TABLE users (
    username TEXT PRIMARY KEY,
    first_name TEXT NOT NULL,
    last_name TEXT NOT NULL,
    email TEXT NOT NULL,
    phone TEXT NOT NULL,
    password TEXT NOT NULL,
    admin BOOLEAN DEFAULT false
);

- Create postgres user
-- psql postgres;
-- CREATE ROLE lnode_dev WITH LOGIN ENCRYPTED PASSWORD 'lnode_dev' with createdb;
-- check with \du for all the existing roles


- Create database
-- node_modules/.bin/sequelize db:create


- Create migration and model file
-- node_modules/.bin/sequelize model:generate --name User --attributes name:string,email:string


- Run Migration
-- node_modules/.bin/sequelize db:migrate


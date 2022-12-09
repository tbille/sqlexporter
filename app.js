const { Sequelize, QueryTypes } = require('sequelize');
const PocketBase = require('pocketbase/cjs')


async function run() {
  const pb = new PocketBase(process.env.POCKETBASE_URI);

  await pb.admins.authWithPassword(process.env.POCKETBASE_USER, process.env.POCKETBASE_PASSWORD)
  const result = await pb.collection('queries').getOne(process.env.USER_ID)

  const sequelize = new Sequelize(process.env.DATABASE_URI)

  try {
    await sequelize.authenticate();
    console.log('Connection has been established successfully.');

    const results = await sequelize.query(process.env.SQL_QUERY, { type: QueryTypes.SELECT });
    
    //result.rows = result.rows + results.length;
    pb.collection('queries').update(process.env.USER_ID, bodyParams = {"rows": result.rows + results.length});
  } catch (error) {
    console.error('Unable to connect to the database:', error);
  }
}

run()
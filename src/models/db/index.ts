import { Sequelize, DataTypes, Model } from 'sequelize';

const sequelize = new Sequelize(
	'postgres://pixyotfn:Tfpedz_xIvU4tD5CcU_CXfKwMI3_XFYk@motty.db.elephantsql.com/pixyotfn'
);

async function testConnection() {
	try {
		return await sequelize.authenticate();
	} catch (error) {
		return new Error('Cannot establish connection to the server');
	}
}

export { testConnection, DataTypes, Model };
export default sequelize;

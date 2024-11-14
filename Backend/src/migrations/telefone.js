
    module.exports = {
    up: async (queryInterface, Sequelize) => {
        await queryInterface.changeColumn('Usuarios', 'telefone', {
        type: Sequelize.STRING,
        allowNull: false
        });
    },
    down: async (queryInterface, Sequelize) => {
        await queryInterface.changeColumn('Usuarios', 'telefone', {
        type: Sequelize.INTEGER,
        allowNull: false
        });
    }
    };

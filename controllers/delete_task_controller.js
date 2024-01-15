const List = require("../models/list");

module.exports.delete = async (req, res) => {
    try {
        // Extract the array directly from req.body
        const tasksToDelete = req.body;

        // Continue with your deletion logic
        await List.deleteMany({ _id: { $in: tasksToDelete } });

        console.log('Tasks to delete:', tasksToDelete);
        console.log('MongoDB Query:', { _id: { $in: tasksToDelete } });
        res.status(200).json({
            reload: true ,
            message: 'Tasks deleted successfully'
        });
    
    } catch (err) {
        console.error('Error deleting tasks', err);
        res.status(500).json({
            message: 'Internal server error'
        });
    }
};

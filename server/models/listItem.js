var mongoose = require('mongoose');

var schema = new mongoose.Schema({
	activity: {
		type: mongoose.Schema.Types.ObjectId,
		ref: 'Activity',
		required: true
	},
	status: {
		type: String,
		enum: ['todo', 'complete'],
		default: 'todo'
	}
});

module.exports = mongoose.model('ListItem', schema);
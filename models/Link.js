const { Schema, model, Types } = require("mongoose");

const schema = Schema({
  from: { type: String, required: true },
  to: {type: String, required: true, unique: true}
});

module.exports = model("Link", schema);

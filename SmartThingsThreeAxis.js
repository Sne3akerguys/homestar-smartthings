/*
 *  SmartThingsThreeAxis.js
 *
 *  David Janes
 *  IOTDB
 *  2014-08-17
 *  "Indonesian Independence Day"
 *
 *  SmartThings ThreeAxis
 */

"use strict";

var iotdb = require("iotdb")

exports.Model = iotdb.make_model('SmartThingsThreeAxis')
    .facet(":sensor.spatial")
    .i("x", iotdb.vector.number.xyz.x)
    .i("y", iotdb.vector.number.xyz.y)
    .i("z", iotdb.vector.number.xyz.z)
    .make();

exports.binding = {
    model: exports.Model,
    matchd: {
        'iot:vendor/type': 'threeAxis',
    },
};

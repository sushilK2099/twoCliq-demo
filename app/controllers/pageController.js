'use strict';

const DataServices = require('../services/dataServices');

var controllers = {

    index: async function (req, res) {
      const order = await DataServices.getGetData("twocliq-dashboard/orders/details", "testToken", {"orderId" : "TR0000003"})
      const data = order.data
      return res.render('pages/order', {data:data});
    },

    confirm: async function (req, res) {
      const order = await DataServices.getGetData("twocliq-dashboard/orders/details", "testToken", {"orderId" : "TR0000003"})
      const data = order.data
      return res.render('pages/confirmOrder', {data:data});
    },

    upload : async function (req, res) {
      return res.render('pages/readyToShip')
    },

    uploadBackend : async function (req, res) {
      
    }

};

module.exports = controllers;
// 'use strict';

// const Axios = require('axios');
// const baseUrl = "http://coutloot.projectx38.cloud/apis-test/";

// var services = {

//     getAppsData: async function (loginToken, accountToken, accountType) {
//         let data = [];

//         let headers = {
//             "login-token": loginToken,
//             "account-type": accountType,
//             "account-token":accountToken
//         };

//         try {

//             let postData = {
//             }

//             let result = await Axios({
//                 method: 'post',
//                 url: baseUrl + "/x38/apps/myApps",
//                 headers: headers,
//                 data: postData
//             });

//             //console.log("Log result")
//             //console.log(result.data)
//             data = result.data.data;

//             console.log(data);

//         } catch (e) {
//             console.log(e);
//         }

//         return data;
//     },

//     getNewData: async function () {

//         let data = {};

//         let headers = {
//             "login-token": "f48668d4ea1989d14a5692c5c4b7b29678f5328ba2c4bf91065565563aa01e9da96af5fac18bcec1817db406fbfbf767e79cf2be6a3df49f35b2fa7839e20cc000df486e62cf45e8c54d4cb7633f7f91e27bf77c74f7f928fb2dff403791b5bf6ce9386013eb7a0302ea5ef2c6435e9c2eb6ecb0b29f39719135a49c0b9eae46",
//             "default-account": "23feabac-0da0-44b5-8596-29c236036e1f"
//         };

//         try {

//             let postData = {

//             }

//             let result = await Axios({
//                 method: 'post',
//                 url: baseUrl + "/x38/vendor/app/getActiveTemplate",
//                 headers: headers,
//                 data: postData
//             });

//             //console.log("Log result")
//             //console.log(result.data)
//             data = result.data.data;


//         } catch (e) {
//             console.log(e);
//         }

//         return data;

//         //return newPageData;
//     },

//     getFormData: async function (formId) {

//         let data = {};

//         let headers = {
//             "login-token": "f48668d4ea1989d14a5692c5c4b7b29678f5328ba2c4bf91065565563aa01e9da96af5fac18bcec1817db406fbfbf767e79cf2be6a3df49f35b2fa7839e20cc000df486e62cf45e8c54d4cb7633f7f91e27bf77c74f7f928fb2dff403791b5bf6ce9386013eb7a0302ea5ef2c6435e9c2eb6ecb0b29f39719135a49c0b9eae46",
//             "default-account": "23feabac-0da0-44b5-8596-29c236036e1f"
//         };

//         try {

//             let postData = {
//                 formId: formId
//             }

//             let result = await Axios({
//                 method: 'post',
//                 url: baseUrl + "/x38/vendor/app/getFormData",
//                 headers: headers,
//                 data: postData
//             });

//             data = result.data.data;

//         } catch (e) {
//             console.log(e);
//         }

//         return data;

//         //return newPageData;
//     },

//     updateComponentData: async function (componentName, data) {

//         try {
//             pageData[componentName] = data;
//         } catch (e) {
//             console.log(e);
//         }

//         return pageData;
//     }
// };

// module.exports = services;







"use strict";

const Axios = require("axios");
const baseUrl = "http://localhost/two-cliq-dash-apis/";
// const baseUrl = "https://gadigoda.projectx38.cloud/gagigoda-dash-apis";


var services = {
 
  getGetData: async function (endPoint,loginToken,postData) {

    let data = {};

    let headers = {
        "login-token":loginToken,
    };


    try {

        let result = await Axios({
            method: 'post',
            url: baseUrl + endPoint,
            headers: headers,
            data: postData
        });

        data = result.data;

    } catch (e) {
        console.log(e);
    }

    return data;

    //return newPageData;
},
  

 


};

module.exports = services;

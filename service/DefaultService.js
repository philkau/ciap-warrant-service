'use strict';


/**
 * 查詢調閱單
 *
 * startTime Date 查詢開始時間
 * endTime Date 查詢開始時間
 * returns Warrant
 **/
exports.warrantsGET = function(startTime,endTime) {
  return new Promise(function(resolve, reject) {
    var examples = {};
    examples['application/json'] = {
  "types" : "profile",
  "objectValue" : "A123456789",
  "startTime" : "2021-08-09T15:30:10.151Z",
  "id" : "W1619622895",
  "endTime" : "2021-08-09T15:30:10.151Z",
  "objectType" : "id"
};
    if (Object.keys(examples).length > 0) {
      resolve(examples[Object.keys(examples)[0]]);
    } else {
      resolve();
    }
  });
}


/**
 * 上傳調閱結果
 *
 * body WarrantResult 調閱結果 (optional)
 * warrantId String 調閱單編號
 * no response value expected for this operation
 **/
exports.warrantsWarrantIdResultsPOST = function(body,warrantId) {
  return new Promise(function(resolve, reject) {
    resolve();
  });
}


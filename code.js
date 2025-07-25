function doPost(e) {
  var sheet = SpreadsheetApp.getActiveSpreadsheet().getSheetByName("Log");
  var data = JSON.parse(e.postData.contents);
  sheet.appendRow([
    new Date(),
    data.guard_name,
    data.location_id,
    data.location_name
  ]);
  return ContentService.createTextOutput("Success");
}

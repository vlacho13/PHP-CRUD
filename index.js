/*$(document).ready(function() {
  $("#addNew").on("click", function() {
    $("#tableManager").modal("show");
  });
});

function manageData(key) {
  let name = $("#countryName");
  let abbrev = $("#countryAbbrev");
  let desc = $("#countryDesc");

  if (isNotEmpty(name) && isNotEmpty(abbrev) && isNotEmpty(desc)) {
    $.ajax({
      url: 'ajax.php',
      method: 'POST',
      dataType: 'text',
      data: {
        key: key,
        name: name.val(),
        abbrev: abbrev.val(),
        desc: desc.val()
      },
      success: function(response) {
        alert(response);
      }
    });
  }
}

function isNotEmpty(caller) {
  if (caller.val() == "") {
    caller.css("border", "1px solid red");
    return false;
  } else {
    caller.css("border", "");
    return true;
  }
}
*/
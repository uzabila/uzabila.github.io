// ALL JS GOES HERE
var cols = {
        regionDropdown: 1,
        roleDropdown: 2,
        associateStatusDropdown: 3
    },
    filters = {
        regionDropdown: 'All',
        roleDropdown: 'All',
        associateStatusDropdown: 'All'
    };

function filter(column, value) {
    var table = document.getElementById("download-forms-table-tbody"),
        tr = table.getElementsByTagName("tr"),
        i,
        keys,
        found;

    filters[column] = value;
    keys = Object.keys(filters);
    for (i = 0; i < tr.length; i++) {
        found = keys.every(function (k) {
            var td = tr[i].getElementsByTagName("td")[cols[k]];
            return filters[k] === "All" || td && td.innerHTML.indexOf(filters[k]) > -1;
        });
        tr[i].style.display = found ? "" : "none";
    }
}

//Filtering region dropdown
$('body').on("change", '#regionDropdown', function () {
    filter('regionDropdown', $(this).val());
});

//Filtering role dropdown
$('body').on("change", '#roleDropdown', function () {
    filter('roleDropdown', $(this).val());
});

//Show active inactive users
$('body').on("change", '#associateStatusDropdown', function () {
    filter('associateStatusDropdown', $(this).val());
});

function myFunction() {
  
  var input, filter, table, tr, td, i, txtValue;
  input = document.getElementById("myInput");
  filter = input.value.toUpperCase();
  table = document.getElementById("download-forms-table-tbody");
  tr = table.getElementsByTagName("tr");

  
  for (i = 0; i < tr.length; i++) {
    td = tr[i].getElementsByTagName("td")[0];
    if (td) {
      txtValue = td.textContent || td.innerText;
      if (txtValue.toUpperCase().indexOf(filter) > -1) {
        tr[i].style.display = "";
      } else {
        tr[i].style.display = "none";
      }
    }
  }
}

let logRegion = document.getElementById('logRegion');

function handleRegionChange(e) {
    let innerText = e.target[e.target.options.selectedIndex].innerText;
    let value = e.target.value;
      
    logRegion.innerHTML = `<span class='selectedOption'>${value}</span>`;

}

let logRole = document.getElementById('logRole');

function handleRoleChange(e) {
    let innerText = e.target[e.target.options.selectedIndex].innerText;
    let value = e.target.value;
  
    logRole.innerHTML = `<span class="selectedOption">${value}</span>`;
}

let logStatus = document.getElementById('logStatus');

function handleStatusChange(e) {            
    let innerText = e.target[e.target.options.selectedIndex].innerText;
    let value = e.target.value;
    let valueStatus = '<span class="selectedOption">' + value + '</span>';
    
    logStatus.innerHTML = valueStatus;
}

$(document).ready(function () {
    $('select').selectize({
        sortField: 'text'
    });
});

function showAll(){
    /*
    var $rows = $('#download-forms-table-tbody tr');
    $rows.show();
*/
    var $select = $('#regionDropdown').selectize();
    var control = $select[0].selectize;
    control.clear();

    var $select = $('#roleDropdown').selectize();
    var control = $select[0].selectize;
    control.clear();

    var $select = $('#associateStatusDropdown').selectize();
    var control = $select[0].selectize;
    control.clear();

    Array.from(document.querySelectorAll('.selectedOption')).forEach((el) => el.classList.remove('selectedOption'));
    Array.from(document.querySelectorAll('.fas.fa-times')).forEach((el) => el.classList.remove('fa-times'));
    
}

var buttonClearFilter = $('#clearFilter');
buttonClearFilter.click(showAll);

var checkbox = document.getElementById('flexSwitchCheckDefault')

function checker(checked) {
  checked ? showRemote() : hideRemote()
}

function showRemote() {
  $('.remote-none').closest('tr').hide();
  $('.remote-yes').closest('tr').show();
}

function hideRemote() {
  $('.remote-none').closest('tr').show();
  $('.remote-yes').closest('tr').show();
}

checker(this.checked)

checkbox.addEventListener('change', function () {
  checker(this.checked)
})
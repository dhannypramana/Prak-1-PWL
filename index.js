var item = [
  { jumlah: 10, nama: 'Jet Tempur' },
  { jumlah: 1, nama: 'Nuklir Hiroshima' },
  { jumlah: 6, nama: 'Infinity Stone' },
  { jumlah: 5, nama: 'Burj Khalifa' },
  { jumlah: 3, nama: 'Rudal Hipersonik' },
];

$('.tambah').hide();
var data = '';

$rowno = $('#data_produk tr').length;
$maks = 1;
function delete_row(rowno) {
  $('#' + rowno).remove();
  $maks--;
}

function tampil() {
  if ($maks < 5) {
    $('.tambah').show();
  }
}

function add_row() {
  if ($maks < 5) {
    $('#data_produk tr:last').after(
      "<tr id='row" +
        $rowno +
        "'><td><select class ='form-control-sm' id='produk" +
        $maks +
        "' onchange=tampil()><option disabled selected>Pilih produk</option><option value='Jet Tempur'>Jet Tempur</option><option value='Nuklir Hiroshima'>Nuklir Hiroshima</option><option value='Infinity Stone'>Infinity Stone</option><option value='Burj Khalifa'>Burj Khalifa</option><option value='Rudal Hipersonik'>Rudal Hipersonik</option></select></td><td> &emsp;  <input type='number' class='form-control-sm' id='jumlah" +
        $maks +
        "'> </td><td>  &emsp;<input class='hapus1 btn-danger btn' type='button' value='Delete' onclick=delete_row('row" +
        $rowno +
        "')></td></tr>"
    );
    $rowno = $rowno + 1;
    $maks += 1;
    $('.tambah').hide();
  }
}

$('.tambah').click(function () {
  add_row();
});
$('#pesan').click(function () {
  let status = 1;
  let belanja = [];
  let jumlah = [];

  $('#hasil').html('');

  for (i = 0; i < 5; i++) {
    if (i == 0) {
      belanja[i] = $('#produk').val();
      jumlah[i] = $('#jumlah').val();
    } else {
      belanja[i] = $('#produk' + i).val();
      jumlah[i] = $('#jumlah' + i).val();
    }
  }

  for (j = 0; j < $maks; j++) {
    for (k = $maks; k > j; k--) {
      if (belanja[j] == belanja[k]) {
        $('#warning').html('Produk tidak boleh kosong dan tidak memilih 2 produk yang sama');
        status = 0;
      }
    }
  }

  if (status == 1) {
    $('#warning').html('');
    let name = $('#name').val();
    $('#hasil').append('<h3>' + name + '</h3>');
    for (m = 0; m < $rowno; m++) {
      if (belanja[m] != null) {
        $('#hasil').append('<li>' + belanja[m] + ' (' + jumlah[m] + ')</li>');
      }
    }
  }
});

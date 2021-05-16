var arrNV = [];

document.querySelector('#btnXacNhan').addEventListener("click", function() {
    var nv = new NhanVien();

    nv.maNhanVien = document.querySelector("#maNhanvien").value;
    nv.tenNhanVien = document.querySelector("#tenNhanvien").value;
    var tagChucVu = document.querySelector("#chucVu");
    nv.chucVu = tagChucVu[tagChucVu.selectedIndex].innerHTML;
    nv.heSoChucVu = document.querySelector("#chucVu").value;
    nv.luongCoBan = document.querySelector("#luongCoBan").value;
    nv.gioLamTrongThang = document.querySelector("#gioLamTrongThang").value;

    arrNV.push(nv);
    renderTable(arrNV);

    // thể hiện thông tin ở span cột phải
    document.querySelector("#txtMaNhanVien").innerHTML = nv.maNhanVien;
    document.querySelector("#txtTenNhanVien").innerHTML = nv.tenNhanVien;
    document.querySelector("#txtChucVu").innerHTML = nv.chucVu;
    document.querySelector("#txtTongLuong").innerHTML = nv.tongLuong();
    document.querySelector("#txtXepLoai").innerHTML = nv.xepLoai();
});

function renderTable(arrNV) {
    var content = '';
    arrNV.forEach(nv => {
        var nhanvien = new NhanVien(nv.maNhanVien, nv.tenNhanVien, nv.chucVu, nv.luongCoBan, nv.gioLamTrongThang, nv.heSoChucVu);

        content += `
            <tr>
                <td>${nhanvien.maNhanVien}</td>
                <td>${nhanvien.tenNhanVien}</td>
                <td>${nhanvien.chucVu}</td>
                <td>${nhanvien.luongCoBan}</td>
                <td>${nhanvien.tongLuong()}</td>
                <td>${nhanvien.gioLamTrongThang}</td>
                <td>${nhanvien.xepLoai()}</td>
                <td><button class="btn btn-danger" onclick="xoaNhanVien(${nhanvien.maNhanVien})">Xoá</button></td>
            </tr>
        `;

        document.getElementById("tblNhanVien").innerHTML = content;
    });
}

function xoaNhanVien(maNV) {
    arrNV = arrNV.filter(nv => nv.maNhanVien !== String(maNV));
    renderTable(arrNV);
}
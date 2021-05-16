function NhanVien(maNV, tenNV, chucVu, luongCoBan, gioLamTrongThang, heSoChucVu) {
    this.maNhanVien = maNV;
    this.tenNhanVien = tenNV;
    this.chucVu = chucVu;
    this.luongCoBan = luongCoBan;
    this.gioLamTrongThang = gioLamTrongThang;
    this.heSoChucVu = heSoChucVu;
    this.tongLuong = function() {
        return this.luongCoBan * this.heSoChucVu;;
    }
    this.xepLoai = function() {
        let gioLam = Number(this.gioLamTrongThang);
        let result = '';
        if(gioLam > 120) {
            result = 'Nhân viên xuất sắc';
        } else if (gioLam > 100) {
            result = 'Nhân viên giỏi';
        } else if (gioLam > 80) {
            result = 'Nhân viên khá';
        } else if (gioLam > 50) {
            result = 'Nhân viên trung bình';
        } else {
            result = 'Nhân viên yếu';
        }
        return result;
    }
}
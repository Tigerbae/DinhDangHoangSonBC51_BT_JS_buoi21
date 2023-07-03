function NV(tknv, name, email, password, datepicker, luongCB, chucvu, gioLam) {
  this.LtongLuong = 0;
  this.LxepLoai = ``;
  this.Ltknv = tknv;
  this.Lname = name;
  this.Lemail = email;
  this.Lpassword = password;
  this.Ldatepicker = datepicker;
  this.LluongCB = luongCB;
  this.Lchucvu = chucvu;
  this.LgioLam = gioLam;
  this.tinhTongLuong = function () {
    if (this.Lchucvu === "Sếp") {
      this.LtongLuong = parseFloat(this.LluongCB) * 3;
    } else if (this.Lchucvu === "Trưởng phòng") {
      this.LtongLuong = parseFloat(this.LluongCB) * 2;
    } else if (this.Lchucvu === "Nhân viên") {
      this.LtongLuong = parseFloat(this.LluongCB) * 1;
    }
  };
  this.tinhXepLoai = function () {
    if (this.LgioLam >= 192) {
      this.LxepLoai = `xuất sắc`;
    } else if (this.LgioLam >= 176) {
      this.LxepLoai = `giỏi`;
    } else if (this.LgioLam >= 160) {
      this.LxepLoai = `khá`;
    } else {
      this.LxepLoai = `trung bình`;
    }
  };
}

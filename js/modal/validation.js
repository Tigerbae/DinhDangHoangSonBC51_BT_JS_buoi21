function validation() {
  this.kiemTraRong = function (value, errorId, mess) {
    if (value === "") {
      getId(errorId).innerHTML = mess;
      getId(errorId).style.display = `inline-block`;
      return false;
    }
    getId(errorId).innerHTML = ``;
    getId(errorId).style.display = `none`;
    return true;
  };
  this.kiemTraSelect = function (idSelect, errorId, mess) {
    var select = getId(idSelect);
    if (select.selectedIndex !== 0) {
      getId(errorId).innerHTML = ``;
      getId(errorId).style.display = `none`;
      return true;
    }
    getId(errorId).innerHTML = mess;
    getId(errorId).style.display = `inline-block`;
    return false;
  };
  this.kiemTraDoDaiKyTu = function (value, errorId, mess, min, max) {
    if (min <= value.trim().length && value.trim().length <= max) {
      getId(errorId).innerHTML = ``;
      getId(errorId).style.display = `none`;
      return true;
    }
    getId(errorId).innerHTML = mess;
    getId(errorId).style.display = `inline-block`;
    return false;
  };
  this.kiemTraDoDaiSo=function(value,errorId,mess,min,max){
   if(min <= value && value <= max){
    getId(errorId).innerHTML = ``;
    getId(errorId).style.display = `none`;
    return true;
   }
   getId(errorId).innerHTML = mess;
   getId(errorId).style.display = `inline-block`;
   return false;
  }
  this.checkPattern = function (value, errorId, mess, letter) {
    if (value.match(letter)) {
      getId(errorId).innerHTML = ``;
      getId(errorId).style.display = `none`;
      return true;
    }
    getId(errorId).innerHTML = mess;
    getId(errorId).style.display = `inline-block`;
    return false;
  };
  this.kiemTraNVDaTonTai = function (value, errorId, mess, danhSachNV) {
    //flag khong ton tai:
    var isExist = false;
    for (var i = 0; i < danhSachNV.length; i++) {
      var nv = danhSachNV[i];
      if (nv.Ltknv === value) {
        isExist = true;
        break;
      }
    }
    if (isExist) {
      getId(errorId).innerHTML = mess;
      getId(errorId).style.display = `inline-block`;
      return false;
    }
    getId(errorId).innerHTML = ``;
    getId(errorId).style.display = `none`;
    return true;
  };
}

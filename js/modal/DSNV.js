function DSNV() {
  this.arr = [];
  this.themNV = function (nv) {
    this.arr.push(nv);
  };
  this.timViTri = function (Ltknv) {
    for (var i = 0; i < this.arr.length; i++) {
      var nv = this.arr[i];
      if (nv.Ltknv === Ltknv) {
        index = i;
        break;
      }
    }
    return index;
  };
  this.xoaNV = function (Ltknv) {
    var index = this.timViTri(Ltknv);
    if (index !== -1) {
      this.arr.splice(index, 1);
    }
  };
  this.layThongTinChiTietNV = function (Ltknv) {
    var index = this.timViTri(Ltknv);
    if (index !== -1) {
      var nv = this.arr[index];
    }
    return nv;
  };
  this.capNhatNV = function (nv) {
    getId(`tbTKNV`).style.display = `none`;
    
    var index = this.timViTri(nv.Ltknv);
    if (index !== -1) {
      this.arr[index] = nv;
    }
  };
  this.timNV=function(searchName){
    var arrSearchName = [];
    for(var i=0;i<this.arr.length;i++){
      var nv = this.arr[i];
      if(nv.LxepLoai.indexOf(searchName) !== -1){
        arrSearchName.push(nv);
      }
    }
    return arrSearchName
  }
}

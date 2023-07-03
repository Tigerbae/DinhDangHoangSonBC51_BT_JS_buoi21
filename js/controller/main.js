var dsnv = new DSNV();
var validation = new validation();
function getId(id) {
  return document.getElementById(id);
}
getLocalStorage();
function layThongTinNV(isAsk) {
  var tknv = getId("tknv").value;
  var name = getId("name").value;
  var email = getId("email").value;
  var password = getId("password").value;
  var datepicker = getId("datepicker").value;
  var luongCB = getId("luongCB").value;
  var chucvu = getId("chucvu").value;
  var gioLam = getId("gioLam").value;
  //VALIDATION______________________________START
  //flag isValid true se thuc thi DOM lay value:
  var isValid = true;
  //flag co isAsk true se thuc thi validation;
  if (isAsk) {
    // Tài khoản tối đa 4 - 6 ký số, không để trống
    isValid &=
      validation.kiemTraRong(tknv, `tbTKNV`, `Vui lòng không để trống`) &&
      validation.kiemTraDoDaiKyTu(
        tknv,
        `tbTKNV`,
        `Vui lòng điền tối đa 4 - 6 ký số`,
        4,
        6
      ) &&
      validation.kiemTraNVDaTonTai(
        tknv,
        `tbTKNV`,
        `Tài khoản đã tồn tại`,
        dsnv.arr
      );
  }
  //Tên nhân viên phải là chữ, không để trống
  isValid &=
    validation.kiemTraRong(name, `tbTen`, `Vui lòng không để trống`) &&
    validation.checkPattern(
      name,
      `tbTen`,
      `Vui lòng điền tên nhân viên phải là chữ`,
      "^[a-zA-Z_ÀÁÂÃÈÉÊẾÌÍÒÓÔÕÙÚĂĐĨŨƠàáâãèéêìíòóôõùúăđĩũơƯĂẠẢẤẦẨẪẬẮẰẲẴẶ" +
        "ẸẺẼỀỀỂưăạảấầẩẫậắằẳẵặẹẻẽềềểếỄỆỈỊỌỎỐỒỔỖỘỚỜỞỠỢỤỦỨỪễệỉịọỏốồổỗộớờởỡợ" +
        "ụủứừỬỮỰỲỴÝỶỸửữựỳỵỷỹ\\s]+$"
    );
  //Email phải đúng định dạng, không để trống
  isValid &=
    validation.kiemTraRong(email, `tbEmail`, `Vui lòng không để trống`) &&
    validation.checkPattern(
      email,
      `tbEmail`,
      `Vui lòng điền đúng định dạng mail(abc@gmail.com)`,
      /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/
    );
  //mật Khẩu từ 6-10 ký tự (chứa ít nhất 1 ký tự số, 1 ký tự in hoa, 1 ký tự đặc biệt), không để trống
  isValid &=
    validation.kiemTraRong(password, `tbMatKhau`, `Vui lòng không để trống`) &&
    validation.checkPattern(
      password,
      `tbMatKhau`,
      `Vui lòng điền mật Khẩu từ 6-10 ký tự (chứa ít nhất 1 ký tự số, 1 ký tự in hoa, 1 ký tự đặc biệt)`,
      /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[^a-zA-Z0-9])(?!.*\s).{0,}$/
    );
  // Ngày làm không để trống, định dạng mm/dd/yyyy
  isValid &=
    validation.kiemTraRong(datepicker, `tbNgay`, `Vui lòng không để trống`) &&
    validation.checkPattern(
      datepicker,
      `tbNgay`,
      `Vui lòng điền đúng định dạng mm/dd/yyyy`,
      /^((0?[1-9]|1[012])[- /.](0?[1-9]|[12][0-9]|3[01])[- /.](19|20)?[0-9]{2})*$/
    );
  //Lương cơ bản 1 000 000 - 20 000 000, không để trống
  isValid &=
    validation.kiemTraRong(luongCB, `tbLuongCB`, `Vui lòng không để trống`) &&
    validation.checkPattern(
      luongCB,
      `tbLuongCB`,
      `Vui lòng điền lương là ký số`,
      /^[0-9]+$/
    ) && validation.kiemTraDoDaiSo(luongCB, `tbLuongCB`,`Vui lòng nhập lương cơ bản 1 000 000 - 20 000 000`,1000000,20000000);
  //Chức vụ phải chọn chức vụ hợp lệ (Giám đốc, Trưởng Phòng, Nhân Viên)
  isValid &= validation.kiemTraSelect(
    `chucvu`,
    `tbChucVu`,
    `Vui lòng chọn Chức vụ`
  );
  // Số giờ làm trong tháng 80 - 200 giờ, không để trống
  isValid &=
    validation.kiemTraRong(gioLam, `tbGiolam`, `Vui lòng không để trống`) &&
    validation.checkPattern(
      gioLam,
      `tbGiolam`,
      `Vui lòng điền số giờ làm là ký số`,
      /^[0-9]+$/
    )&& validation.kiemTraDoDaiSo(gioLam, `tbGiolam`,`Vui lòng nhập số giờ làm trong tháng 80 - 200 giờ`,80,200);
  //VALIDATION______________________________END
  if (isValid) {
    var nv = new NV(
      tknv,
      name,
      email,
      password,
      datepicker,
      luongCB,
      chucvu,
      gioLam
    );
    nv.tinhTongLuong();
    nv.tinhXepLoai();
    return nv;
  }
  return null;
}
function renderTable(data) {
  var content = ``;
  for (var i = 0; i < data.length; i++) {
    var nv = data[i];

    content += `
        <tr>
            <td> ${nv.Ltknv} </td>
            <td> ${nv.Lname} </td>
            <td> ${nv.Lemail} </td>
            <td> ${nv.Ldatepicker} </td>
            <td> ${nv.Lchucvu} </td>
            <td> ${nv.LtongLuong} </td>
            <td> ${nv.LxepLoai} </td>
            <td><button class="btn btn-warning" onclick="suaNhanVien('${nv.Ltknv}')">Sua</button></td>
            <td><button class="btn btn-Danger" onclick="xoaNhanVien('${nv.Ltknv}')">Xoa</button></td>
        </tr>
        `;
  }
  getId(`tableDanhSach`).innerHTML = content;
}
function themNhanVien() {
  var nv = layThongTinNV(true);
  if (nv) {
    dsnv.themNV(nv);
    renderTable(dsnv.arr);
    setLocalStorage();
  }
}
function setLocalStorage() {
  var dataString = JSON.stringify(dsnv.arr);
  localStorage.setItem(`DSNV`, dataString);
}
function getLocalStorage() {
  if (localStorage.getItem(`DSNV`)) {
    var dataString = localStorage.getItem(`DSNV`);
    var dataJSON = JSON.parse(dataString);
    dsnv.arr = dataJSON;
    renderTable(dsnv.arr);
  }
}
function xoaNhanVien(Ltknv) {
  dsnv.xoaNV(Ltknv);
  renderTable(dsnv.arr);
  setLocalStorage();
}
function suaNhanVien(Ltknv) {
  var nv = dsnv.layThongTinChiTietNV(Ltknv);
  if (nv) {
    getId(`btnThem`).click();
    getId("tknv").value = nv.Ltknv;
    getId("tknv").disabled = true;
    getId("name").value = nv.Lname;
    getId("email").value = nv.Lemail;
    getId("password").value = nv.Lpassword;
    getId("datepicker").value = nv.Ldatepicker;
    getId("luongCB").value = nv.LluongCB;
    getId("chucvu").value = nv.Lchucvu;
    getId("gioLam").value = nv.LgioLam;
  }
}
function capNhatNV() {
  var nv = layThongTinNV(false);
  if (nv) {
    dsnv.capNhatNV(nv);
    renderTable(dsnv.arr);
    setLocalStorage();
  }
}
function timNV() {
  var searchName = getId(`searchName`).value;
  var arrSearchName = dsnv.timNV(searchName);
  renderTable(arrSearchName);
}
//ap dung callback funtion
getId(`searchName`).addEventListener(`keyup`, timNV);

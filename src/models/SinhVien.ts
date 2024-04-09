import { ISinhVien } from "../interface/ISinhVien";
import { KhoaHoc } from "../types/TKhoaHoc";

export class SinhVien implements ISinhVien {
  constructor(
    maSV: string,
    tenSV: string,
    emailSV: string,
    diemToan: number,
    diemLy: number,
    diemHoa: number,
    password: string,
    ngaySinh: Date,
    khoaHoc: KhoaHoc
  ) {
    this.maSV = maSV;
    this.tenSV = tenSV;
    this.emailSV = emailSV;
    this.diemToan = diemToan;
    this.diemLy = diemLy;
    this.diemHoa = diemHoa;
    this.password = password;
    this.khoaHoc = khoaHoc;
    this.ngaySinh = ngaySinh;
  }
  diemHoa: number;
  diemLy: number;
  diemToan: number;
  emailSV: string;
  khoaHoc: KhoaHoc;
  maSV: string;
  ngaySinh: Date;
  password: string;
  tenSV: string;
  diemTB(): number {
    return (this.diemToan + this.diemLy + this.diemHoa) / 3;
  }
}
